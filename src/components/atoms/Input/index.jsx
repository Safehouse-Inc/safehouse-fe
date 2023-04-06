import React from "react";
import styled from "styled-components";
import { Text } from "../Text";
import { Flex } from "../Flex";

const StyledInput = styled.input`
  padding: 18px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #eef0ec;
  width: 100%;
  margin: 12px 0;
  color: #000000;

  &:hover,
  &:focus {
    border: 1px solid #62e000;
    outline: 0;
  }
`;

export const Input = (props) => {
  return (
    <Flex direction="column" width="100%">
      <StyledInput {...props} />

      {props.touched && props.errors ? (
        <Text
          fontStyle="italic"
          color="#ff0000"
          fontSize="0.7rem"
          margin="-8px 0 0 0"
        >
          {props.errors}
        </Text>
      ) : null}
    </Flex>
  );
};
