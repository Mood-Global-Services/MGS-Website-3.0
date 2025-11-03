import "server-only";
import { createClient, type ClientConfig, type SanityClient } from "@sanity/client";

type Env = {
  SANITY_PROJECT_ID?: string;
  SANITY_DATASET?: string;
  SANITY_API_VERSION?: string;
  SANITY_READ_TOKEN?: string;
};

const {
  SANITY_PROJECT_ID,
  SANITY_DATASET,
  SANITY_API_VERSION,
  SANITY_READ_TOKEN,
} = process.env as Env;

if (!SANITY_PROJECT_ID) {
  throw new Error("Missing env: SANITY_PROJECT_ID");
}

const projectId: string = SANITY_PROJECT_ID;
const dataset: string = SANITY_DATASET ?? "production";
const apiVersion: string = SANITY_API_VERSION ?? "2024-01-01";

const publicConfig: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
};

export const sanity: SanityClient = createClient(publicConfig);

export const previewSanity: SanityClient | null = SANITY_READ_TOKEN
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: SANITY_READ_TOKEN,
      perspective: "previewDrafts",
    })
  : null;

export const SANITY_CONFIG = Object.freeze({
  projectId,
  dataset,
  apiVersion,
});
