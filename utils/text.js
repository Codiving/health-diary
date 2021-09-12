import { dayTexts } from "components/Calendar/utils";
import { DateTime as DT } from "luxon";

const FirstChartUpperCase = text =>
  text.charAt(0).toUpperCase() + text.slice(1);

const DateText = timestamp => {
  const date = new DT.fromMillis(timestamp);
  const yyyyMMdd = date.toFormat("yyyy-MM-dd");
  const day = dayTexts[new Date(yyyyMMdd).getDay()];

  return `${yyyyMMdd} (${day})`;
};

export { FirstChartUpperCase, DateText };
