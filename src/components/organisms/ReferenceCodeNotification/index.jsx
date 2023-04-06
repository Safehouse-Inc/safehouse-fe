import React from "react";
import { Text } from "../../atoms/Text";
import checkMark from "../../../assets/svgs/check_mark.svg";
import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { Flex } from "../../atoms/Flex";
import { Link } from "react-router-dom";

const StyledIcon = styled.img`
  margin: 16px 0;
  width: 60px;
`;

export const ReferenceCodeNotification = () => {
  return (
    <Flex direction="column" alignItems="center" padding="60px 0">
      <StyledIcon src={checkMark} alt="checked" />
      <Text type="h1" margin="0 0 16px 0">
        Reference Code Sent
      </Text>
      <Text type="p" margin="0 0 16px 0" width="50%" textAlign="center">
        You have a request confirmation email. Kindly click on the link therein
        to proceed with your request
      </Text>
      <Link to="/">
        <Button
          text="Done"
          borderColor="#62e000"
          padding="18px 42px"
          fontWeight="600"
        />
      </Link>
    </Flex>
  );
};
