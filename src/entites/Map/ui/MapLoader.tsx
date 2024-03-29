import { Box, Center, CircularProgress } from "@chakra-ui/react";

export const MapLoader = () => {
  return (
    <Box
      w={"20"}
      h={"20"}
      bgColor={"blackAlpha.300"}
      p={2}
      rounded={"full"}
      boxShadow={"2xl"}
    >
      <Center w={"full"} h="full">
        <CircularProgress isIndeterminate color="telegram.600" />
      </Center>
    </Box>
  );
};
