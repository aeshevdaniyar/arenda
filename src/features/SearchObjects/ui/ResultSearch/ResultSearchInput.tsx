import {
  Box,
  Flex,
  Input,
  InputProps,
  List,
  ListIcon,
  SlideFade,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { LegacyRef, MutableRefObject, forwardRef, useState } from "react";
import { MdApartment } from "react-icons/md";

interface ResultSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  trigger: () => void;
}
export const ResultSearchInput = forwardRef<
  MutableRefObject<HTMLDivElement>,
  ResultSearchInputProps
>((props, ref) => {
  const { onChange, value, trigger } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHidden, setIsHidden] = useState(false);
  const isSelected: InputProps = {
    boxShadow: "0 0 15px 0 rgba(0,0,0,.14)",
    bgColor: "white",
  };

  return (
    <Box
      position="relative"
      w="full"
      onFocus={() => {
        if (!isOpen) {
          onOpen();
          setIsHidden(true);
        }
      }}
      onBlur={onClose}
      tabIndex={1}
      pl={2}
      h={"full"}
      minH={"full"}
      ref={ref as LegacyRef<HTMLDivElement>}
    >
      <Input
        placeholder="Курорт, город или адрес"
        border={"none"}
        rounded={"full"}
        h={"full"}
        p={"4"}
        pl={"6"}
        minH={"full"}
        _focus={{
          outline: "none",
          border: "none",
          boxShadow: "0 0 15px 0 rgba(0,0,0,.14)",
        }}
        _placeholder={{
          fontWeight: "medium",
          fontSize: "14px",
          lineHeight: "20px",
        }}
        value={value || ""}
        tabIndex={-1}
        {...(isHidden && isSelected)}
        onChange={(e) => onChange(e.target.value)}
        fontWeight={"medium"}
      />
      <Box
        position="absolute"
        bottom={"-10px"}
        left={0}
        transform={"translateY(100%)"}
        zIndex={!isHidden ? "hide" : "popover"}
        w="full"
        display={!isHidden ? "none" : "block"}
      >
        <SlideFade
          onAnimationComplete={() => {
            if (!isOpen) {
              setIsHidden(false);
            }
          }}
          offsetY={"60px"}
          in={isOpen}
        >
          <Box
            maxW={{ base: "96", "2xl": "full" }}
            w={{ base: "96", "2xl": "full" }}
            p={"2"}
            background="white"
            border="1px solid"
            borderColor="gray.400"
            rounded={"lg"}
          >
            <Text>Популярные направления </Text>
            <List color="blackAlpha.800" fontSize="xs" spacing={3} mt={2}>
              <Flex
                alignItems="flex-start"
                onClick={() => {
                  onChange("Бостери");
                  trigger();
                  onClose();
                }}
                cursor={"pointer"}
              >
                <ListIcon
                  as={MdApartment}
                  fontSize={"3xl"}
                  color="blackAlpha.800"
                />
                <Stack
                  spacing={0}
                  borderBottom={"1px solid"}
                  borderColor={"gray.300"}
                  w="full"
                  pb={2}
                >
                  <Text fontWeight={"medium"} fontSize={"sm"}>
                    Бостери
                  </Text>
                  <Text color="gray.500" fontSize={"small"}>
                    Ыссык-кол
                  </Text>
                </Stack>
              </Flex>
            </List>
          </Box>
        </SlideFade>
      </Box>
    </Box>
  );
});
