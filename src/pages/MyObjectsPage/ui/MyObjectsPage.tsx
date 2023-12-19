import { Box, Container } from "@chakra-ui/react";
import { ObjectTable } from "@features/ObjectTable";

const MyObjectsPage = () => {
  return (
    <Box p={4} bgColor={"blackAlpha.50"}>
      <Container maxW="container.xl">
        <ObjectTable />
      </Container>
    </Box>
  );
};

export default MyObjectsPage;
