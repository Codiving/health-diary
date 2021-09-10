import { Calendar, ExerciseTable } from "components";
import { exercises } from "../data";
import styled from "styled-components";

const Main = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Main>
      <Calendar exercises={exercises} />
      <ExerciseTable exercises={exercises} />
    </Main>
  );
};

export default Home;
