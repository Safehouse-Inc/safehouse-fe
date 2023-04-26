import React from "react";
import styled from "styled-components";
import headerBg from "../../../assets/images/header_bg.png";
import serviceImg from "../../../assets/images/service_side_bg.png";
import footerLogo from "../../../assets/svgs/logo-dark.svg";
import getStartedImg from "../../../assets/images/get_started_bg.png";
import { Flex, Section } from "../../atoms/Flex";
import { Button } from "../../atoms/Button";
import { Text } from "../../atoms/Text";
import { NavBar } from "../../organisms";
import { Link } from "react-router-dom";
import { screen } from "../../../theme/theme-utils";

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

  @media only screen and (${screen.sm}) {
    padding: 40px 6px;
  }
`;

const TheServiceImage = styled.div`
  background-image: url(${serviceImg});
  background-size: contain;
`;

const ServiceSection = styled(Flex)`
  color: black;
  background-color: white;

  & div {
    width: 100%;
  }

  @media only screen and (${screen.sm}) {
    display: block;
  }
`;

const ServiceTextSection = styled(Flex)`
  height: 60vh;
  direction: column;
  justifycontent: center;
  padding: 50px;

  @media only screen and (${screen.sm}) {
    height: auto;
    display: block;
  }
`;

const GetStartedSection = styled(Flex)`
  background-image: url(${getStartedImg});
  background-size: contain;
  height: 50vh;
  align-items: center;
  padding: 100px;
  background-repeat: no-repeat;

  @media only screen and (${screen.sm}) {
    height: auto;
    background-size: cover;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const GetStartedSectionHeading = styled(Text)`
  width: 50%;
  margin: 0 0 16px 0;
  color: #ffffff;

  @media only screen and (${screen.sm}) {
    width: 100%;
  }
`;

const FooterLogo = styled.img`
  width: 150px;
  margin: 10px 0;
`;

const SocialIcons = styled(Flex)`
  & span:not(:last-child) {
    margin-right: 16px;
  }

  margin: 10px 0;
`;

const MoreInfoOuterSection = styled(Flex)`
  background-color: #ffffff;
  height: 50vh;
  justify-content: center;
  align-items: center;
`;

const MoreInfoInnerSection = styled(Flex)`
  flex-direction: column;
  width: 80%;
  height: 70%;
  align-items: center;
  justify-content: center;
  background-color: #62e000;
  border-radius: 16px;

  @media only screen and (${screen.sm}) {
    width: 95%;
    padding: 10px;
  }
`;

const FooterSection = styled(Flex)`
  justify-content: space-between;
  background-color: white;
  padding: 30px;

  @media only screen and (${screen.sm}) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const DDAASHomePage = () => {
  return (
    <>
      <Header>
        <NavBar />
        <HeroSection>
          <Text type="h1" margin="0 0 16px 0" color="#001036">
            Due Diligence As A Service.
          </Text>
          <Text
            type="p"
            width="70%"
            textAlign="center"
            margin="0 0 32px 0"
            color="#575A65"
          >
            An essential resource for a potential real estate investor. Our aim
            is to execute the highest quality deals. DDaaS was borne out of the
            frequency of fraudulent transactions and misleading marketing baits
            in the real estate industry.
          </Text>
          <Link to="/request_form">
            <Button
              text="Get Started"
              borderColor="#62e000"
              padding="18px 42px"
              fontWeight="600"
            />
          </Link>
        </HeroSection>
      </Header>

      <ServiceSection>
        <ServiceTextSection>
          <Text type="h1" color="#62E000" margin="0 0 16px 0">
            The Service
          </Text>
          <Text type="p" margin="0 0 16px 0">
            When you intend to buy an asset or a company or invest in a major
            project you need as much detail about what you're purchasing as
            possible. Our due diligence service investigates the genuinety of a
            prospective real estate transaction and ensures that all the
            marketed checklisted items are ticked (documentation) to help you
            make a better purchasing decision.
          </Text>
          <Text type="p" margin="0 0 16px 0">
            You will be required to make payment after sharing all the necessary
            information as required in the form below and will receive a
            detailed due diligence report withing 7 working days from the date
            of payment approval.
          </Text>
          <Text type="p" margin="0 0 16px 0">
            We will confirm all of the material facts relating to the sale of a
            business, project or asset. The scope of the facts can be very
            diverse, encompassing a variety of subjects such as court search,
            land registry search, operational due diligence and other related
            matters depending on client request.
          </Text>
        </ServiceTextSection>
        <TheServiceImage />
      </ServiceSection>

      <GetStartedSection>
        <Section>
          <GetStartedSectionHeading type="h1">
            Let’s get you Started
          </GetStartedSectionHeading>
          <Text type="p" width="70%" margin="0 0 16px 0" color="#ffffff">
            Click on the get started button and fill the from to uptake the
            service
          </Text>
          <Link to="/request_form">
            <Button
              text="Get Started"
              borderColor="#62e000"
              padding="18px 42px"
              fontWeight="600"
            />
          </Link>
        </Section>
      </GetStartedSection>

      <MoreInfoOuterSection>
        <MoreInfoInnerSection>
          <Text type="h1" margin="0 0 16px 0" color="#ffffff">
            Need more information
          </Text>
          <Text
            type="p"
            width="60%"
            color="#ffffff"
            margin="0 0 16px 0"
            textAlign="center"
          >
            Let us know what you need to have a successful transaction with ease
            and peace of mind.
          </Text>
          <Button
            text="Contact Us"
            borderColor="#ffffff"
            bgColor="#ffffff"
            padding="18px 42px"
            color="black"
            fontWeight="600"
          />
        </MoreInfoInnerSection>
      </MoreInfoOuterSection>

      <FooterSection>
        <FooterLogo src={footerLogo} alt="footer logo" />
        <SocialIcons color="black">
          <Text>Instagram</Text>
          <Text>Youtube</Text>
          <Text>Facebook</Text>
        </SocialIcons>
      </FooterSection>
    </>
  );
};
