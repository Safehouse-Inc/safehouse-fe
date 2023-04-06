import React from "react";
import { DDAASRequestTemplate } from "../../templates/DDAASRequestTemplate";
import { Text } from "../../atoms/Text";
import { Flex, Section } from "../../atoms/Flex";
import { Input } from "../../atoms/Input";
import homeIcon from "../../../assets/svgs/home_icon.svg";
import profileIcon from "../../../assets/svgs/profile_icon.svg";
import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const Icons = styled.img`
  width: 40px;
  margin: 16px 0;
`;

export const DDAASRequestForm = () => {
  const navigate = useNavigate();

  async function submit(values) {
    await localStorage.setItem("ddaas_request_data", JSON.stringify(values));
    navigate("/summary");
  }

  const formik = useFormik({
    initialValues: {
      "First Name": "",
      "Last Name": "",
      "Email Address": "",
      "Phone Number": "",
      "Property Owner Name": "",
      "Property Address": "",
      "Available Title": "",
      "Survey Number": "",
    },
    validationSchema: Yup.object({
      "First Name": Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("This field is required"),
      "Last Name": Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("This field is required"),
      "Email Address": Yup.string()
        .email("Invalid email address")
        .required("This field is required"),
      "Phone Number": Yup.string().required("This field is required"),
      "Property Owner Name": Yup.string().required("This field is required"),
      "Property Address": Yup.string().required("This field is required"),
      "Available Title": Yup.string().required("This field is required"),
      "Survey Number": Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => submit(values),
  });

  return (
    <DDAASRequestTemplate title="Due Diligence Request Form">
      <Section>
        <form action="POST" onSubmit={formik.handleSubmit}>
          <Flex width="100%" gap="16px">
            <Section width="50%">
              <Icons src={homeIcon} alt="home icon" />
              <Text type="p" fontWeight="600" margin="0 0 16px 0">
                1. Personal Info
              </Text>
              <Flex gap="16px">
                <Input
                  name="First Name"
                  placeholder="First Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values["First Name"]}
                  touched={formik.touched["First Name"]}
                  errors={formik.errors["First Name"]}
                />

                <Input
                  name="Last Name"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values["Last Name"]}
                  touched={formik.touched["Last Name"]}
                  errors={formik.errors["Last Name"]}
                />
              </Flex>
              <Flex gap="16px">
                <Input
                  type="email"
                  name="Email Address"
                  placeholder="Email Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values["Email Address"]}
                  touched={formik.touched["Email Address"]}
                  errors={formik.errors["Email Address"]}
                />
              </Flex>
              <Flex gap="16px">
                <Input
                  type="tel"
                  name="Phone Number"
                  placeholder="Phone Number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values["Phone Number"]}
                  touched={formik.touched["Phone Number"]}
                  errors={formik.errors["Phone Number"]}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values["Property Owner Name"]}
                  touched={formik.touched["Property Owner Name"]}
                  errors={formik.errors["Property Owner Name"]}
                />
              </Flex>
              <Flex gap="16px">
                <Input
                  name="Property Address"
                  placeholder="Property Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values["Property Address"]}
                  touched={formik.touched["Property Address"]}
                  errors={formik.errors["Property Address"]}
                />
              </Flex>
              <Flex gap="16px">
                <Input
                  name="Available Title"
                  placeholder="Available Title"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values["Available Title"]}
                  touched={formik.touched["Available Title"]}
                  errors={formik.errors["Available Title"]}
                />
                <Input
                  name="Survey Number"
                  placeholder="Survey Number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values["Survey Number"]}
                  touched={formik.touched["Survey Number"]}
                  errors={formik.errors["Survey Number"]}
                />
              </Flex>
            </Section>
          </Flex>
          <Flex justifyContent="center" margin="24px 0">
            <Link to="/summary"></Link>
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
