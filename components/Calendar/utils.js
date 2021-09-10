const dayTexts = ["일", "월", "화", "수", "목", "금", "토"];
const MONTH = "MONTH";
const YEAR = "YEAR";
const DECADE = "DECADE";

const getDaysInMonthMode /* d: Luxon => [d: Luxon] */ = date =>
  Array(42)
    .fill()
    .map((_, i) =>
      date
        .startOf("month")
        .startOf("week")
        .plus({ days: i - 1 })
    );
// .filter((d, i) => i < 35 || d.startOf('week').month === date.month);

const getMonthsInYearMode /* d: Luxon => [d: Luxon] */ = date =>
  Array(12)
    .fill()
    .map((_, i) => date.startOf("year").plus({ months: i }));

const getYearsInDecadeMode /* d: Luxon => [d: Luxon] */ = date => {
  const startYear = Math.floor(date.year / 10) * 10 - 1;
  return Array(12)
    .fill()
    .map((_, i) => date.set({ year: startYear + i }).startOf("year"));
};

const getDecadeModeTitle /* d: Luxon => string */ = date => {
  const startYear = Math.floor(date.year / 10) * 10 - 1;
  return `${startYear}-${startYear + 11}`;
};

const roundTen /* number => number */ = x => Math.floor(x / 10) * 10;

const getDifferenceByMode /* Mode => object */ = mode =>
  mode === MONTH
    ? { months: 1 }
    : mode === YEAR
    ? { years: 1 }
    : mode === DECADE
    ? { years: 10 }
    : { days: 0 };

const getNextMode /* Mode => Mode */ = mode => {
  const nextModeMap = {
    [MONTH]: YEAR,
    [YEAR]: DECADE,
    [DECADE]: MONTH
  };
  return nextModeMap[mode];
};

export {
  dayTexts,
  MONTH,
  YEAR,
  DECADE,
  getDaysInMonthMode,
  getMonthsInYearMode,
  getYearsInDecadeMode,
  getDecadeModeTitle,
  roundTen,
  getDifferenceByMode,
  getNextMode
};
