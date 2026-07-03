export const CONSULTATION_SUBMITTED_KEY = "erp17-consultation-submitted-at";
export const CONSULTATION_NEXT_OPEN_AT_KEY = "erp17-consultation-next-open-at";

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

  clearConsultationNextOpenAt();
}

export function getConsultationNextOpenAt() {
  try {
    const nextOpenAt = Number(
      sessionStorage.getItem(CONSULTATION_NEXT_OPEN_AT_KEY) || 0,
    );
    return Number.isFinite(nextOpenAt) ? nextOpenAt : 0;
  } catch {
    return 0;
  }
}

export function setConsultationNextOpenAt(timestamp) {
  try {
    sessionStorage.setItem(CONSULTATION_NEXT_OPEN_AT_KEY, String(timestamp));
  } catch {
    // ignore storage errors (private mode, etc.)
  }
}

export function clearConsultationNextOpenAt() {
  try {
    sessionStorage.removeItem(CONSULTATION_NEXT_OPEN_AT_KEY);
  } catch {
    // ignore storage errors (private mode, etc.)
  }
}
