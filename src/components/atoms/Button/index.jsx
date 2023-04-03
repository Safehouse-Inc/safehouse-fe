import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#62e000")};
  padding: ${(props) => (props.padding ? props.padding : "10px 16px")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "5px"};
  border: ${(props) => `1px solid ${props.borderColor}`};
  cursor: pointer;
`;

export const Button = (props) => {
  return <StyledButton {...props}>{props.text}</StyledButton>;
};
