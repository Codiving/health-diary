import { Calendar, ExerciseTable } from "components";
import { MONTH } from "components/Calendar/utils";
import { DataContext } from "context";
import { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { exercises } from "../data";

const Main = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [inputOpen, setInputOpen] = useState(null);
  const [mode, setMode] = useState(MONTH);
  const { dispatchData } = useContext(DataContext);

  const onHandleMode = useCallback(newMode => {
    setMode(newMode);
  }, []);

  useEffect(() => {
    dispatchData({
      type: "change",
      target: exercises
    });
  }, [dispatchData]);

  return (
    <Main>
      <Calendar
        exercises={exercises}
        onSelect={date => setInputOpen(date)}
        mode={mode}
        onHandleMode={onHandleMode}
      />
      {mode === MONTH && (
        <ExerciseTable open={inputOpen} onClose={() => setInputOpen(null)} />
      )}
    </Main>
  );
};

export default Home;
