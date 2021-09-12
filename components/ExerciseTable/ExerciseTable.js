import { DataContext } from "context";
import { useContext } from "react";
import styled from "styled-components";
import Diary from "./Diary";
import ExerciseInputDialog from "./ExerciseInputDialog";

const Exercise = styled.div`
  margin: 30px 0;
  max-width: 800px;
  width: 100%;
  overflow-x: auto;
`;

const ExerciseTable = props => {
  const { open, onClose } = props;
  const { dataContext } = useContext(DataContext);

  return (
    <>
      <Exercise>
        {dataContext.value.map((item, index) => {
          return <Diary key={index} {...item} />;
        })}
      </Exercise>

      {open && <ExerciseInputDialog date={open} onClose={onClose} />}
    </>
  );
};

export default ExerciseTable;
