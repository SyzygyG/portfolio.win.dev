type DateParts = {
  year: number;
  month?: number;
  day?: number;
};

type DateRange = {
  start: DateParts;
  end?: DateParts;
  isCurrent?: boolean;
};

type CertificationDateLike = {
  issuedOn: DateParts;
  context?: string;
};

const SHORT_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

function getMonthLabel(month?: number) {
  if (!month) {
    return null;
  }

  return SHORT_MONTHS[month - 1] ?? null;
}

function getSortValue(date: DateParts) {
  return (date.year * 10_000) + ((date.month ?? 12) * 100) + (date.day ?? 31);
}

function formatDateParts(date: DateParts) {
  const monthLabel = getMonthLabel(date.month);

  if (monthLabel && date.day) {
    return `${monthLabel} ${date.day}, ${date.year}`;
  }

  if (monthLabel) {
    return `${monthLabel} ${date.year}`;
  }

  return String(date.year);
}

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function sortByNewestDate(left: DateParts, right: DateParts) {
  return getSortValue(right) - getSortValue(left);
}

export function sortByNewestRange(left: DateRange, right: DateRange) {
  const currentDate = { year: getCurrentYear(), month: 12, day: 31 };
  const leftReference = left.isCurrent ? currentDate : (left.end ?? left.start);
  const rightReference = right.isCurrent ? currentDate : (right.end ?? right.start);

  return sortByNewestDate(leftReference, rightReference);
}

export function formatDateRange(range: DateRange) {
  const startLabel = formatDateParts(range.start);

  if (range.isCurrent) {
    return `${startLabel} - Present`;
  }

  if (range.end) {
    return `${startLabel} - ${formatDateParts(range.end)}`;
  }

  return startLabel;
}

export function formatCertificationDate(entry: CertificationDateLike) {
  const issuedLabel = formatDateParts(entry.issuedOn);

  if (!entry.context) {
    return issuedLabel;
  }

  return `${issuedLabel} - ${entry.context}`;
}
