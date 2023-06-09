import React from "react";
import styled, { css } from "styled-components";

const styles = css`
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => (color ? color : "#000000")};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  text-align: ${({ textAlign }) => textAlign};
  width: ${({ width }) => width};
  font-size: ${({ fontSize }) => fontSize};
  font-style: ${({ fontStyle }) => fontStyle};
`;

const StyledH1 = styled.h1`
  ${styles}
`;
const StyledParagraph = styled.p`
  ${styles}
`;
const StyledSpan = styled.span`
  ${styles}
`;

export const Text = (props) => {
  if (props.type === "h1")
    return <StyledH1 {...props}>{props.children}</StyledH1>;
  if (props.type === "p")
    return <StyledParagraph {...props}>{props.children}</StyledParagraph>;
  return <StyledSpan {...props}>{props.children}</StyledSpan>;
};
