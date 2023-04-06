import React from "react";
import { Text } from "../../atoms/Text";
import { Flex, Section } from "../../atoms/Flex";
import congratsIcon from "../../../assets/svgs/congrats_icon.svg";
import { Button } from "../../atoms/Button";
import styled from "styled-components";
import { toast } from "react-toastify";

const Receipt = styled.div`
  border: 1px solid #e4e4e4;
  width: 40%;
  padding: 24px 42px;
  border-radius: 10px;
`;

const ItemRow = styled(Flex)`
  border-bottom: 1px solid #e4e4e4;
  padding: 16px 0;
`;

const CongratsIcon = styled.img`
  margin: 16px 0;
`;

export const DDAASRequestSummary = () => {
  const formValues = JSON.parse(localStorage.getItem("ddaas_request_data"));

  const submitData = async () => {
    var formData = new FormData();
    for (var key in formValues) {
      formData.append(key, formValues[key]);
    }

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwOq8q4af6_dHkF896ztDL7xqjCwV63jPXTqv3bG8RwAI8Z1xXRDf-t7WUoV7cfJKpG/exec",
      {
        method: "POST",
        body: formData,
      }
    );
    if (response.status === 200) return toast.success("Request successful");
    toast.error("Failed to submit form due to an error");
  };

  if (!formValues) {
    return <Text>Nothing to show here</Text>;
  }

  return (
    <Receipt>
      <CongratsIcon src={congratsIcon} alt="success" />
      <Text type="p" fontWeight="600" margin="0 0 16px 0">
        Payment Details
      </Text>
      <Section>
        <ItemRow justifyContent="space-between">
          <Text>Full name</Text>
          <Text>{`${formValues["First Name"]} ${formValues["Last Name"]}`}</Text>
        </ItemRow>
        <ItemRow justifyContent="space-between">
          <Text>Email</Text>
          <Text>{`${formValues["Email Address"]}`}</Text>
        </ItemRow>
        <ItemRow justifyContent="space-between">
          <Text>Property Owners name</Text>
          <Text>{`${formValues["Property Owner Name"]}`}</Text>
        </ItemRow>
        <ItemRow justifyContent="space-between">
          <Text>Property Address</Text>
          <Text>{`${formValues["Property Address"]}`}</Text>
        </ItemRow>
        <ItemRow justifyContent="space-between">
          <Text>Fee</Text>
          <Text>50,000</Text>
        </ItemRow>
        <ItemRow justifyContent="space-between">
          <Text type="p" fontWeight="600">
            Total
          </Text>
          <Text color="#62E000">50,000</Text>
        </ItemRow>
        {/* <Link to="/reference_code"> */}
        <Button
          onClick={submitData}
          color="white"
          text="Make payment"
          borderColor="#62E000"
          width="100%"
          padding="16px 0"
          margin="32px 0"
        />
        {/* </Link> */}
      </Section>
    </Receipt>
  );
};
