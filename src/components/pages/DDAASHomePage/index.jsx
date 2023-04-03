import React from "react";
import styled from "styled-components";
import headerBg from "../../../assets/images/header_bg.png";
import logo from "../../../assets/svgs/logo-white.svg";
import { Flex } from "../../atoms/Flex";
import { Button } from "../../atoms/Button";
import { Text } from "../../atoms/Text";
import { NavBar } from "../../organisms";

const Header = styled.section`
  background-image: url(${headerBg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 70vh;
`;

const HeroSection = styled(Flex)`
  align-items: center;
  flex-direction: column;
  padding: 80px 12px;
`;

export const DDAASHomePage = () => {
  return (
    <Header>
      <NavBar />
      <HeroSection>
        <Text type="h1" margin="0 0 16px 0" color="#001036">
          Due Diligence As A Service.
        </Text>
        <Text
          type="p"
          width="50%"
          textAlign="center"
          margin="0 0 32px 0"
          color="#575A65"
        >
          An essential resource for a potential real estate investor. Our aim is
          to execute the highest quality deals. DDaaS was borne out of the
          frequency of fraudulent transactions and misleading marketing baits in
          the real estate industry.
        </Text>

        <Button
          text="Get Started"
          borderColor="#62e000"
          padding="18px 42px"
          fontWeight="600"
        />
      </HeroSection>
    </Header>
  );
};
