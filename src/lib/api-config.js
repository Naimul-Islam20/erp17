const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.NEXT_PUBLIC_LIVE_API_BASE_URL ||
  "https://service.erp17.com";
const API_PREFIX = `${API_BASE_URL}/api`;

export function buildApiUrl(path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_PREFIX}${normalizedPath}`;
}

export const apiConfig = {
  baseUrl: API_BASE_URL,
  apiPrefix: API_PREFIX,
};
