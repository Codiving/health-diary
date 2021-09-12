import { Calendar, ExerciseTable } from "components";
import { MONTH } from "components/Calendar/utils";
import { useCallback, useState } from "react";
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
  const [inputOpen, setInputOpen] = useState(false);
  const [mode, setMode] = useState(MONTH);

  const onHandleMode = useCallback(newMode => {
    setMode(newMode);
  }, []);

  return (
    <Main>
      <Calendar
        exercises={exercises}
        onSelect={() => setInputOpen(true)}
        mode={mode}
        onHandleMode={onHandleMode}
      />
      {mode === MONTH && (
        <ExerciseTable
          exercises={exercises}
          open={inputOpen}
          onClose={() => setInputOpen(false)}
        />
      )}
    </Main>
  );
};

export default Home;
