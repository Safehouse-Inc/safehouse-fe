import React from "react";
import { Flex } from "../../atoms/Flex";
import styled from "styled-components";
import { Button } from "../../atoms/Button";
import logo from "../../../assets/svgs/logo-white.svg";
import { Text } from "../../atoms/Text";
import { Link } from "react-router-dom";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const NavItems = styled(Flex)`
  & span {
    margin-right: 24px;
  }

  & span:hover,
  button:hover {
    color: black;
    cursor: pointer;
  }
`;
const StyledLogo = styled.img`
  width: 150px;
`;
const navItems = [
  // { name: "Home", link: "#", type: "text" },
  // { name: "How it works", link: "#", type: "text" },
  // { name: "Property portfolio", link: "#", type: "text" },
  // { name: "SafePay", link: "#", type: "text" },
  // { name: "FAQs", link: "#", type: "text" },
  { name: "Get Started", link: "/request_form", type: "button" },
];

export const NavBar = () => {
  return (
    <Wrapper>
      <StyledLogo src={logo} alt="logo" />
      <NavItems alignItems="center">
        {navItems.map((item, idx) => {
          if (item.type === "button")
            return (
              <Link key={idx} to={item.link}>
                <Button text={item.name} borderColor="#62e000" />
              </Link>
            );
          return (
            <Text color="#ffffff" key={idx}>
              {item.name}
            </Text>
          );
        })}
      </NavItems>
    </Wrapper>
  );
};
