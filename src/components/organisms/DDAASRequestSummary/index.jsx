import React from "react";
import { Text } from "../../atoms/Text";
import { Flex, Section } from "../../atoms/Flex";
import congratsIcon from "../../../assets/svgs/congrats_icon.svg";
import { Button } from "../../atoms/Button";
import styled from "styled-components";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const formValues = JSON.parse(localStorage.getItem("ddaas_request_data"));

  const config = {
    public_key: "FLWPUBK_TEST-bd5d2a07a8065f1a5b23e3fc490b6db1-X",
    tx_ref: `safehouse-${uuidv4()}`,
    amount: 3000,
    currency: "NGN",
    payment_options: "card, mobilemoney, ussd",
    customer: {
      email: formValues["Email Address"],
      phone_number: formValues["Phone Number"],
      name: `${formValues["First Name"]} ${formValues["Last Name"]}`,
    },
    customizations: {
      title: "Safehouse DDAAS Request",
      description: "Service charge for Due Diligence on property",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

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
          onClick={() => {
            handleFlutterPayment({
              callback: async (response) => {
                console.log(response);
                if (response.status === "successful") {
                  await submitData();
                  navigate("/reference_code");
                }
                closePaymentModal(); // this will close the modal programmatically
              },
              onClose: () => {},
            });
          }}
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
