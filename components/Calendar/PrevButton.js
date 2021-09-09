import styled from "styled-components";
import React from "react";

const Span = styled.div`
  font-size: 1.4rem;
`;

const PrevButton = ({ onClick }) => {
  return <Span onClick={onClick}>{"Prev"}</Span>;
};

export default PrevButton;
