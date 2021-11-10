import { useState, useCallback } from "react";
import styled from "styled-components";
import { DateTime as DT } from "luxon";
import SwitchButton from "./SwitchButton";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import DateDisplay from "./DateDisplay";
import { MONTH, getDifferenceByMode, getNextMode } from "./utils";

const CalendarWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  font-family: sans-serif;
`;

const FlexLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const Summary = styled.summary`
  margin-top: 30px;
  font-size: 1.2rem;
  padding: 10px;
  background-color: #9d9d9d;
  border-radius: 8px;
  color: white;
`;

const Calendar = ({
  date = null /*: Object | string  */,
  dates = [
    new Date("2021-09-08"),
    new Date("2021-09-09"),
    new Date("2021-09-10"),
    new Date("2021-09-16"),
    new Date("2021-09-17"),
    new Date("2021-09-18")
  ],
  onSelect /*: date => any  */
}) => {
  const today = DT.fromJSDate(new Date()).startOf("day");

  const [mode, setMode] = useState(MONTH);
  const [cursorDate, setCursorDate] = useState(
    date ? DT.fromJSDate(date) : today
  );
  const [selectedDates] = useState(
    dates ? dates.map(date => DT.fromJSDate(date)) : today
  );

  const [open, setOpen] = useState(false);

  const onClickPrev = useCallback(() => {
    setCursorDate(cursorDate.minus(getDifferenceByMode(mode)));
  }, [setCursorDate, mode, cursorDate]);

  const onClickSwitch = useCallback(() => {
    setMode(getNextMode(mode));
  }, [setMode, mode]);

  const onClickNext = useCallback(() => {
    setCursorDate(cursorDate.plus(getDifferenceByMode(mode)));
  }, [setCursorDate, mode, cursorDate]);

  return (
    <CalendarWrapper>
      <details
        onClick={() => {
          console.log("# 111");
        }}
      >
        <Summary
          onClick={e => {
            e.stopPropagation();
            setOpen(prev => !prev);
          }}
        >
          {open ? "Close" : "Open"} Calendar
        </Summary>
        <FlexLayout>
          <PrevButton onClick={onClickPrev} />
          <SwitchButton
            cursorDate={cursorDate}
            mode={mode}
            onClick={onClickSwitch}
          />
          <NextButton onClick={onClickNext} />
        </FlexLayout>
        <DateDisplay
          onSelect={onSelect}
          mode={mode}
          setMode={setMode}
          cursorDate={cursorDate}
          setCursorDate={setCursorDate}
          selectedDates={selectedDates}
        />
      </details>
    </CalendarWrapper>
  );
};

export default Calendar;
