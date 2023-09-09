import {
  FormControl,
  Box,
  FormLabel,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  Stack,
} from "@chakra-ui/react";
import { LoginSchema } from "@entites/User";
import { yupResolver } from "@hookform/resolvers/yup";
import { PhoneInput } from "@shared/ui/PhoneInput";
import { useForm, Controller } from "react-hook-form";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import * as Yup from "yup";
import { useState } from "react";
const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<Yup.InferType<typeof LoginSchema>>({
    resolver: yupResolver(LoginSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data: Yup.InferType<typeof LoginSchema>) => {
    console.log(data);
  };
  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <FormControl isInvalid={!!errors?.phone?.message}>
          <FormLabel>Номер телефона</FormLabel>
          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <PhoneInput onBlur={onBlur} onChange={onChange} value={value} />
              );
            }}
          />

          <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password?.message}>
          <FormLabel>Пароль</FormLabel>
          <InputGroup>
            <Input
              {...register("password")}
              type={showPassword ? "text" : "password"}
            />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <Button w="full" mt={2} type="submit" colorScheme="red">
          Войти
        </Button>
      </Stack>
    </Box>
  );
};

export default LoginForm;
