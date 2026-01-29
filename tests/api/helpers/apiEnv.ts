export type ApiEnv = {
  baseURL: string;
  headers: Record<string, string>;
};

export function getPublicApiEnv(fallbackBaseURL?: string): ApiEnv {
  const baseURL =
    process.env.PUBLIC_API_BASE_URL ||
    fallbackBaseURL ||
    "https://api-dev.sent.hhdm";

  const headers: Record<string, string> = {};
  const apiKey = process.env.PUBLIC_API_KEY || process.env.API_KEY;
  if (apiKey) {
    headers["x-api-key"] = apiKey;
  }
  const senderId = process.env.PUBLIC_SENDER_ID || process.env.SENDER_ID;
  if (senderId) {
    headers["x-sender-id"] = senderId;
  }

  return { baseURL, headers };
}

export function getPrivateApiEnv(fallbackBaseURL?: string): ApiEnv {
  const baseURL =
    process.env.INTERNAL_API_BASE_URL ||
    fallbackBaseURL ||
    "https://internal-api-dev.sent.dm";

  const headers: Record<string, string> = {};
  const apiKey =
    process.env.INTERNAL_API_KEY || process.env.ADMIN_API_KEY || process.env.API_KEY;
  if (apiKey) {
    headers["x-api-key"] = apiKey;
  }
  const senderId = process.env.INTERNAL_SENDER_ID || process.env.SENDER_ID;
  if (senderId) {
    headers["x-sender-id"] = senderId;
  }

  return { baseURL, headers };
}

export function getApiEnv(fallbackBaseURL?: string): ApiEnv {
  return getPublicApiEnv(fallbackBaseURL);
}
