import React from "react";
import { Text } from "../../atoms/Text";
import checkMark from "../../../assets/svgs/check_mark.svg";
import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { Flex } from "../../atoms/Flex";
import { Link } from "react-router-dom";
import { screen } from "../../../theme/theme-utils";

const Wrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
`;
const StyledIcon = styled.img`
  margin: 16px 0;
  width: 60px;
`;
const SuccessText = styled(Text)`
  width: 50%;

  @media only screen and (${screen.sm}) {
    width: 100%;
  }
`;
const Heading = styled(Text)`
  @media only screen and (${screen.sm}) {
    font-size: 22px;
  }
`;

export const ReferenceCodeNotification = () => {
  return (
    <Wrapper>
      <StyledIcon src={checkMark} alt="checked" />
      <Heading type="h1" margin="0 0 16px 0">
        Payment successful!
      </Heading>
      <SuccessText type="p" margin="0 0 16px 0" textAlign="center">
        We'll start the process immediately. Please note that you have a receipt
        from our payment partner. Kindly keep the reference code handy for
        further conversations with us.
      </SuccessText>
      <Link to="/">
        <Button
          text="Done"
          borderColor="#62e000"
          padding="18px 42px"
          fontWeight="600"
        />
      </Link>
    </Wrapper>
  );
};
