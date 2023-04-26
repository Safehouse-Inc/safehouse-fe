import React from "react";
import { Flex } from "../../atoms/Flex";

import styled, { css } from "styled-components";
import { Text } from "../../atoms/Text";
import { screen } from "../../../theme/theme-utils";

const centerStyle = css`
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Flex)`
  ${centerStyle};
  height: 100vh;
  flex-direction: column;

  @media only screen and (${screen.sm}) {
    height: auto;
    padding: 30px 0;
  }
`;

const ReceiptWrapper = styled(Flex)`
  background-color: white;
  width: 90%;
  border-radius: 20px;
  padding: 30px;

  ${centerStyle};

  @media only screen and (${screen.sm}) {
    width: 95%;
    padding: 15px;
  }
`;

const TitleText = styled(Text)`
  margin: 0 0 16px 0;
  @media only screen and (${screen.sm}) {
    font-size: 22px;
    text-align: center;
  }
`;

export const DDAASRequestTemplate = ({ title, children }) => {
  return (
    <Wrapper>
      {title && <TitleText type="h1">{title}</TitleText>}
      <ReceiptWrapper>{children}</ReceiptWrapper>
    </Wrapper>
  );
};
