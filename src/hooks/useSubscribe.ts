// hooks/useSubscribe.ts
import { useCallback, useMemo, useRef, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

/** Match the API route's JSON */
export type SubscribeResponse =
  | { ok: true }
  | { ok: false; error: string };

export type UseSubscribeOptions = {
  endpoint?: string; // default: "/api/subscribe"
  onSuccess?: () => void;
  onError?: (message: string) => void;
  /** Shape the body if you later collect more fields */
  mapPayload?: (email: string) => Record<string, unknown>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isSubscribeResponse(x: unknown): x is SubscribeResponse {
  if (typeof x !== "object" || x === null) return false;
  const obj = x as Record<string, unknown>;
  if (obj.ok === true) return true;
  if (obj.ok === false && typeof obj.error === "string") return true;
  return false;
}

export function useSubscribe(options: UseSubscribeOptions = {}) {
  const {
    endpoint = "/api/subscribe",
    onSuccess,
    onError,
    mapPayload,
  } = options;

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const reset = useCallback(() => {
    setStatus("idle");
    setError(null);
  }, []);

  const subscribe = useCallback(
    async (email: string): Promise<boolean> => {
      if (status === "loading") return false;

      const trimmed = String(email ?? "").trim();
      if (!EMAIL_RE.test(trimmed)) {
        const msg = "Please enter a valid email.";
        setStatus("error");
        setError(msg);
        onError?.(msg);
        return false;
      }

      // cancel any in-flight request
      if (abortRef.current) abortRef.current.abort();
      abortRef.current = new AbortController();

      setStatus("loading");
      setError(null);

      try {
        const payload = mapPayload ? mapPayload(trimmed) : { email: trimmed };

        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: abortRef.current.signal,
        });

        // Narrow the response without using `any`
        const data: unknown = await res.json().catch(() => null);

        if (!isSubscribeResponse(data)) {
          throw new Error("Unexpected server response.");
        }

        if (!res.ok || data.ok !== true) {
          throw new Error(data.ok === false ? data.error : "Subscription failed.");
        }

        setStatus("success");
        onSuccess?.();
        return true;
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Something went wrong.";
        setStatus("error");
        setError(msg);
        onError?.(msg);
        return false;
      } finally {
        abortRef.current = null;
      }
    },
    [endpoint, mapPayload, onError, onSuccess, status]
  );

  return useMemo(
    () => ({ subscribe, status, error, reset }),
    [subscribe, status, error, reset]
  );
}
