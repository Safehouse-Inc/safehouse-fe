import React from "react";
import { Flex } from "../../atoms/Flex";

import styled, { css } from "styled-components";
import { Text } from "../../atoms/Text";

const centerStyle = css`
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Flex)`
  ${centerStyle};
  height: 100vh;
  flex-direction: column;
`;

const ReceiptWrapper = styled(Flex)`
  background-color: white;
  width: 90%;
  border-radius: 20px;
  padding: 30px;

  ${centerStyle};
`;

export const DDAASRequestTemplate = ({ title, children }) => {
  return (
    <Wrapper>
      {title && (
        <Text type="h1" margin="0 0 16px 0">
          {title}
        </Text>
      )}
      <ReceiptWrapper>{children}</ReceiptWrapper>
    </Wrapper>
  );
};
