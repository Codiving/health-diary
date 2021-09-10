import styled from "styled-components";
import Diary from "./Diary";
import Modal from "./Modal";

const Exercise = styled.div`
  margin: 30px 0;
  max-width: 800px;
  width: 100%;
  overflow-x: auto;
  // overflow-x: scroll;
`;

const ExerciseTable = props => {
  const { exercises, open, onClose } = props;

  return (
    <>
      <Exercise>
        {exercises.map((item, index) => {
          return <Diary key={index} {...item} />;
        })}
      </Exercise>

      {open && <Modal onClose={onClose} />}
    </>
  );
};

export default ExerciseTable;
