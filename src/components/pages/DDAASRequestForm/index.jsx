import React from "react";
import { DDAASRequestTemplate } from "../../templates/DDAASRequestTemplate";
import { Text } from "../../atoms/Text";
import { Flex, Section } from "../../atoms/Flex";
import { Input } from "../../atoms/Input";
import homeIcon from "../../../assets/svgs/home_icon.svg";
import profileIcon from "../../../assets/svgs/profile_icon.svg";
import styled from "styled-components";
import { Button } from "../../atoms/Button";

const Icons = styled.img`
  width: 40px;
  margin: 16px 0;
`;

export const DDAASRequestForm = () => {
  return (
    <DDAASRequestTemplate title="Due Diligence Request Form">
      <Section>
        <Flex width="100%" gap="16px">
          <Section width="50%">
            <Icons src={homeIcon} alt="home icon" />
            <Text type="p" fontWeight="600" margin="0 0 16px 0">
              1. Personal Info
            </Text>
            <Flex gap="16px">
              <Input placeholder="First name" />
              <Input placeholder="Last name" />
            </Flex>
            <Flex gap="16px">
              <Input type="email" placeholder="Email" />
            </Flex>
            <Flex gap="16px">
              <Input type="tel" placeholder="Phone number" />
            </Flex>
          </Section>
          <Section width="50%">
            <Icons src={profileIcon} alt="property details" />
            <Text type="p" fontWeight="600" margin="0 0 16px 0">
              2. Property Details
            </Text>
            <Flex gap="16px">
              <Input placeholder="Property owners name" />
            </Flex>
            <Flex gap="16px">
              <Input placeholder="Property Address" />
            </Flex>
            <Flex gap="16px">
              <Input placeholder="Available Title" />
              <Input placeholder="Survey Number" />
            </Flex>
          </Section>
        </Flex>
        <Flex justifyContent="center" margin="24px 0">
          <Button
            text="Submit"
            borderColor="#62e000"
            padding="18px 72px"
            fontWeight="600"
          />
        </Flex>
      </Section>
    </DDAASRequestTemplate>
  );
};
