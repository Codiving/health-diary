import React from "react";
import styled from "styled-components";
import { MONTH, YEAR, DECADE, getDecadeModeTitle } from "./utils";

const ButtonWrapper = styled.div`
  width: 80%;
  text-align: center;
  font-size: 2rem;
  :active {
    background-color: #eee;
  }
`;

const SwitchButton = ({ mode, cursorDate, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      {mode !== DECADE
        ? cursorDate.toFormat(mode === MONTH ? "MMM yyyy" : "yyyy")
        : getDecadeModeTitle(cursorDate)}
    </ButtonWrapper>
  );
};

export default SwitchButton;
