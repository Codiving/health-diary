import React from "react";
import styled from "styled-components";

const Span = styled.div`
  font-size: 1.4rem;
`;

const NextButton = ({ onClick }) => {
  return <Span onClick={onClick}>{"Next"}</Span>;
};

export default NextButton;
