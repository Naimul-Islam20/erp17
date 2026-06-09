export const CONSULTATION_OPEN_EVENT = "erp17:open-consultation";
export const CONSULTATION_OPEN_FLAG = "erp17-open-consultation";
export const CONSULTATION_SUBMITTED_KEY = "erp17-consultation-submitted-at";

const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000;

export function isConsultationSuppressed() {
  try {
    const submittedAt = Number(
      localStorage.getItem(CONSULTATION_SUBMITTED_KEY) || 0,
    );
    if (!submittedAt) return false;
    return Date.now() - submittedAt < TWENTY_FOUR_HOURS_MS;
  } catch {
    return false;
  }
}

export function markConsultationSubmitted() {
  try {
    localStorage.setItem(CONSULTATION_SUBMITTED_KEY, String(Date.now()));
  } catch {
    // ignore storage errors (private mode, etc.)
  }
}

export function openConsultationFromLogo() {
  if (isConsultationSuppressed()) {
    return;
  }

  try {
    sessionStorage.setItem(CONSULTATION_OPEN_FLAG, "1");
  } catch {
    // ignore storage errors (private mode, etc.)
  }

  const normalizedPath =
    window.location.pathname.replace(/\/$/, "") || "/";
  if (normalizedPath === "/") {
    window.dispatchEvent(new CustomEvent(CONSULTATION_OPEN_EVENT));
  }
}
