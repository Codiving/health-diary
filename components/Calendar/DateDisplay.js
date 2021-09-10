import { DateTime as DT } from "luxon";
import * as React from "react";
import styled from "styled-components";
import {
  DECADE,
  getDaysInMonthMode,
  getMonthsInYearMode,
  getYearsInDecadeMode,
  MONTH,
  roundTen,
  YEAR
} from "./utils";
import Weekdays from "./Weekdays";

const FlexLayout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > div {
    flex-basis: calc(100% / ${({ mode }) => (mode === MONTH ? 7 : 4)});
    height: ${({ mode }) => (mode === MONTH ? "100%" : "70px")};
    // line-height: ${({ mode }) => (mode === MONTH ? 40 : 70)}px;
    line-height: ${({ mode }) => (mode === MONTH ? "10vh" : "70px")};
    text-align: center;
    vertical-align: middle;
  }
  gap: 5px 0;
`;

const DateWrap = styled.div`
  position: relative;
  &:hover {
    transform: scale(1.15);
  }
`;

const DateItem = styled.div`
  background-color: ${({ isSelected }) => (isSelected ? "#db3d44" : "inherit")};
  color: ${({ isSelected, isOffRange, isToday }) =>
    isSelected
      ? "#fff"
      : isOffRange
      ? "#eee"
      : isToday
      ? "#db3d44"
      : "inherit"};
  border-radius: ${({ isSelected }) => (isSelected ? "50%" : "none")};
  transform: scale(0.7);
  font-size: 1.4em;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const BlockItem = styled.div`
  background-color: ${({ isSelected }) => (isSelected ? "#db3d44" : "inherit")};
  position: absolute;
  width: 100%;
  height: 70%;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  opacity: 0.5;
`;

const DateDisplay = ({
  onSelect,
  mode,
  setMode,
  cursorDate,
  setCursorDate,
  selectedDates
}) => {
  const dates = selectedDates.map(date => date.toFormat("yyyyMMdd"));

  return (
    <div>
      {mode === MONTH && <Weekdays />}
      <FlexLayout mode={mode}>
        {mode === MONTH &&
          getDaysInMonthMode(cursorDate).map((d, i) => (
            <DateWrap key={i}>
              <DateItem
                isSelected={dates.includes(d.toFormat("yyyyMMdd"))}
                isOffRange={d.month !== cursorDate.month}
                isToday={
                  d.toFormat("yyyyMMdd") ===
                  DT.fromJSDate(new Date()).toFormat("yyyyMMdd")
                }
              >
                {d.toFormat("d")}
              </DateItem>
              <BlockItem
                onClick={e => {
                  e.stopPropagation();
                  onSelect(true);
                }}
                isSelected={dates.includes(d.toFormat("yyyyMMdd"))}
              />
            </DateWrap>
          ))}
        {mode === YEAR &&
          getMonthsInYearMode(cursorDate).map((d, i) => (
            <DateItem
              key={i}
              isSelected={
                true
                // d.toFormat("yyyyMM") === selectedDate.toFormat("yyyyMM")
              }
              onClick={() => {
                setCursorDate(d);
                setMode(MONTH);
                console.log(d.toJSON());
              }}
              data-date-item
            >
              {d.toFormat("MMM")}
            </DateItem>
          ))}
        {mode === DECADE &&
          getYearsInDecadeMode(cursorDate).map((d, i) => (
            <DateItem
              key={i}
              isSelected={true} // && d.toFormat("yyyy") === selectedDate.toFormat("yyyy")}
              isOffRange={
                d.year < roundTen(cursorDate.year) ||
                d.year > roundTen(cursorDate.year) + 9
              }
              onClick={() => {
                setCursorDate(d);
                setMode(YEAR);
                console.log(d.toJSON());
              }}
              data-date-item
            >
              {d.toFormat("yyyy")}
            </DateItem>
          ))}
      </FlexLayout>
    </div>
  );
};

export default DateDisplay;
