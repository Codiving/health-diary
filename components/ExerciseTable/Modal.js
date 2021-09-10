import styled from "styled-components";

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalBox = styled.div`
  position: absolute;
  background-color: #fff;
  border-radius: 8px;
  max-width: 800px;
  width: 100%;
  height: 170px;
  padding: 15px;
`;

const Modal = props => {
  const { onClose } = props;

  return (
    <ModalWrap>
      <Bg
        onClick={e => {
          e.stopPropagation();
          onClose();
        }}
      ></Bg>
      <ModalBox
        onClick={e => {
          e.stopPropagation();
          console.log(" # 333");
        }}
      ></ModalBox>
    </ModalWrap>
  );
};

export default Modal;
