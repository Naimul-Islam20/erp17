const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.NEXT_PUBLIC_LIVE_API_BASE_URL ||
  "https://service.erp17.com";
const API_PREFIX = `${API_BASE_URL}/api`;

/** Get a Quote / website leads only — separate from main API host */
const WEBSITE_LEADS_API_BASE_URL =
  process.env.NEXT_PUBLIC_WEBSITE_LEADS_API_BASE_URL ||
  "https://api.erp17.com";
const WEBSITE_LEADS_API_PREFIX = `${WEBSITE_LEADS_API_BASE_URL}/api`;

export function buildApiUrl(path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_PREFIX}${normalizedPath}`;
}

export function buildWebsiteLeadsApiUrl(path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${WEBSITE_LEADS_API_PREFIX}${normalizedPath}`;
}

export const apiConfig = {
  baseUrl: API_BASE_URL,
  apiPrefix: API_PREFIX,
  websiteLeadsBaseUrl: WEBSITE_LEADS_API_BASE_URL,
  websiteLeadsApiPrefix: WEBSITE_LEADS_API_PREFIX,
};
