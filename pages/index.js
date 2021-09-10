import { Calendar, ExerciseTable } from "components";
import { useState } from "react";
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

  return (
    <Main>
      <Calendar exercises={exercises} onSelect={() => setInputOpen(true)} />
      <ExerciseTable
        exercises={exercises}
        open={inputOpen}
        onClose={() => setInputOpen(false)}
      />
    </Main>
  );
};

export default Home;
