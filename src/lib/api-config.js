const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";
const API_PREFIX = `${API_BASE_URL}/api`;

export function buildApiUrl(path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_PREFIX}${normalizedPath}`;
}

export const apiConfig = {
  baseUrl: API_BASE_URL,
  apiPrefix: API_PREFIX,
};
