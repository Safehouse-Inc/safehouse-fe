import styled, { css } from "styled-components";

const styles = css`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bgColor};
  border-radius: ${(props) => props.borderRadius};
`;

export const Section = styled.div`
  ${styles}
`;

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};

  ${styles}
`;
