import { Flex, Heading, Stack, useColorModeValue } from "@chakra-ui/react";
import { EmailResetPasswordForm } from "@features/EmailResetPasswordForm";
const ResetPage = () => {
  return (
    <Flex
      minH={"70vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Сброс пороля
        </Heading>
        <EmailResetPasswordForm />
      </Stack>
    </Flex>
  );
};

export default ResetPage;
