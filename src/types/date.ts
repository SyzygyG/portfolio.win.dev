export type DateParts = {
  year: number;
  month?: number;
  day?: number;
};

export type DateRange = {
  start: DateParts;
  end?: DateParts;
  isCurrent?: boolean;
};
