export const dayTexts = ["일", "월", "화", "수", "목", "금", "토"];
export const MONTH = "MONTH";
export const YEAR = "YEAR";
export const DECADE = "DECADE";

export const getDaysInMonthMode /* d: Luxon => [d: Luxon] */ = date =>
  Array(42)
    .fill()
    .map((_, i) =>
      date
        .startOf("month")
        .startOf("week")
        .plus({ days: i - 1 })
    );
// .filter((d, i) => i < 35 || d.startOf('week').month === date.month);

export const getMonthsInYearMode /* d: Luxon => [d: Luxon] */ = date =>
  Array(12)
    .fill()
    .map((_, i) => date.startOf("year").plus({ months: i }));

export const getYearsInDecadeMode /* d: Luxon => [d: Luxon] */ = date => {
  const startYear = Math.floor(date.year / 10) * 10 - 1;
  return Array(12)
    .fill()
    .map((_, i) => date.set({ year: startYear + i }).startOf("year"));
};

export const getDecadeModeTitle /* d: Luxon => string */ = date => {
  const startYear = Math.floor(date.year / 10) * 10 - 1;
  return `${startYear}-${startYear + 11}`;
};

export const roundTen /* number => number */ = x => Math.floor(x / 10) * 10;

export const getDifferenceByMode /* Mode => object */ = mode =>
  mode === MONTH
    ? { months: 1 }
    : mode === YEAR
    ? { years: 1 }
    : mode === DECADE
    ? { years: 10 }
    : { days: 0 };

export const getNextMode /* Mode => Mode */ = mode => {
  const nextModeMap = {
    [MONTH]: YEAR,
    [YEAR]: DECADE,
    [DECADE]: MONTH
  };
  console.log("mode", nextModeMap, mode);
  return nextModeMap[mode];
};
