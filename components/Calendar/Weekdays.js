import styled from "styled-components";

const WeekdaysWrapper = styled.div`
  display: flex;
  & > div {
    width: calc(100% / 7);
    text-align: center;
    margin: 10px 0;
    font-size: 1.2rem;
  }
  & > div:first-child {
    color: red;
  }
  & > div:last-child {
    color: blue;
  }
`;

const days = ["일", "월", "화", "수", "목", "금", "토"];

const Weekdays = () => (
  <WeekdaysWrapper>
    {days.map(day => {
      return <div key={day}>{day}</div>;
    })}
  </WeekdaysWrapper>
);

export default Weekdays;
