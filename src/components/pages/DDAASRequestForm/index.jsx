import React from "react";
import { DDAASRequestTemplate } from "../../templates/DDAASRequestTemplate";
import { Text } from "../../atoms/Text";
import { Flex, Section } from "../../atoms/Flex";
import { Input } from "../../atoms/Input";
import homeIcon from "../../../assets/svgs/home_icon.svg";
import profileIcon from "../../../assets/svgs/profile_icon.svg";
import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { toast } from "react-toastify";

const Icons = styled.img`
  width: 40px;
  margin: 16px 0;
`;

export const DDAASRequestForm = () => {
  async function submit(e) {
    e.preventDefault();
    const formDatab = new FormData(e.target);
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwOq8q4af6_dHkF896ztDL7xqjCwV63jPXTqv3bG8RwAI8Z1xXRDf-t7WUoV7cfJKpG/exec",
      {
        method: "POST",
        body: formDatab,
      }
    );
    if (response.status === 200) return toast.success("Request successful");
    toast.error("Failed to submit form due to an error");
    console.log(response);
    // .then((res) => {
    //   toast.success("Request successful");
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  }
  return (
    <DDAASRequestTemplate title="Due Diligence Request Form">
      <Section>
        <form action="POST" onSubmit={(e) => submit(e)}>
          <Flex width="100%" gap="16px">
            <Section width="50%">
              <Icons src={homeIcon} alt="home icon" />
              <Text type="p" fontWeight="600" margin="0 0 16px 0">
                1. Personal Info
              </Text>
              <Flex gap="16px">
                <Input name="First Name" placeholder="First Name" />
                <Input name="Last Name" placeholder="Last Name" />
              </Flex>
              <Flex gap="16px">
                <Input
                  type="email"
                  name="Email Address"
                  placeholder="Email Address"
                />
              </Flex>
              <Flex gap="16px">
                <Input
                  type="tel"
                  name="Phone Number"
                  placeholder="Phone Number"
                />
              </Flex>
            </Section>
            <Section width="50%">
              <Icons src={profileIcon} alt="property details" />
              <Text type="p" fontWeight="600" margin="0 0 16px 0">
                2. Property Details
              </Text>
              <Flex gap="16px">
                <Input
                  name="Property Owner Name"
                  placeholder="Property Owner Name"
                />
              </Flex>
              <Flex gap="16px">
                <Input name="Property Address" placeholder="Property Address" />
              </Flex>
              <Flex gap="16px">
                <Input name="Available Title" placeholder="Available Title" />
                <Input name="Survey Number" placeholder="Survey Number" />
              </Flex>
            </Section>
          </Flex>
          <Flex justifyContent="center" margin="24px 0">
            <Button
              type="submit"
              text="Submit"
              borderColor="#62e000"
              padding="18px 72px"
              fontWeight="600"
            />
          </Flex>
        </form>
      </Section>
    </DDAASRequestTemplate>
  );
};
