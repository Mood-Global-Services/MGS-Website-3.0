// app/api/subscribe/route.ts
import { NextResponse, type NextRequest } from "next/server";
import sgMail, { type MailDataRequired } from "@sendgrid/mail";

export const runtime = "nodejs"; // ensure Node runtime for SendGrid

type Env = {
  SENDGRID_API_KEY?: string;
  VERIFIED_SENDER?: string;
};

const { SENDGRID_API_KEY, VERIFIED_SENDER } = process.env as Env;

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

type SubscribePayload = { email: string };

type SubscribeResponse =
  | { ok: true }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getErrorMessage(err: unknown): string {
  const anyErr = err as {
    message?: string;
    response?: { body?: unknown; statusCode?: number };
  } | undefined;

  if (anyErr?.message) return anyErr.message;

  const body = anyErr?.response?.body as
    | { errors?: Array<{ message?: string; field?: string; help?: string }> }
    | string
    | undefined;

  if (typeof body === "string") return body;

  const first = body?.errors?.[0];
  if (first?.message) {
    const field = first.field ? ` (field: ${first.field})` : "";
    return `${first.message}${field}`;
  }

  try {
    return JSON.stringify(err);
  } catch {
    return "Unknown error";
  }
}

export async function POST(request: NextRequest): Promise<NextResponse<SubscribeResponse>> {
  try {
    if (!SENDGRID_API_KEY || !VERIFIED_SENDER) {
      return NextResponse.json<SubscribeResponse>(
        { ok: false, error: "Server not configured" },
        { status: 500 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json<SubscribeResponse>(
        { ok: false, error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const { email } = body as Partial<SubscribePayload>;
    if (typeof email !== "string" || !EMAIL_RE.test(email)) {
      return NextResponse.json<SubscribeResponse>(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const msg: MailDataRequired = {
      to: [VERIFIED_SENDER, "med.newton.2013@gmail.com"],
      from: VERIFIED_SENDER,
      subject: "New newsletter subscriber",
      text: `New subscriber: ${email}`,
      html: `<p><strong>New subscriber:</strong> ${email}</p>`,
    };

    const [sgRes] = await sgMail.send(msg);

    if (sgRes.statusCode < 200 || sgRes.statusCode >= 300) {
      return NextResponse.json<SubscribeResponse>(
        { ok: false, error: `SendGrid failed (${sgRes.statusCode})` },
        { status: 502 }
      );
    }

    const res = NextResponse.json<SubscribeResponse>({ ok: true }, { status: 200 });
    res.headers.set("Cache-Control", "no-store");
    return res;
  } catch (err: unknown) {
    console.error("SendGrid error:", getErrorMessage(err));
    const res = NextResponse.json<SubscribeResponse>(
      { ok: false, error: "Failed to subscribe" },
      { status: 500 }
    );
    res.headers.set("Cache-Control", "no-store");
    return res;
  }
}
