import * as Yup from "yup";
import { PhoneNumberUtil } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();
const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};
Yup.addMethod(
  Yup.string,
  "phone",
  function (messageError = "Неверный номер телефона") {
    return this.test("phone", messageError, (value) => {
      if (value && value.length > 0) {
        return isPhoneValid(value);
      }
      return true;
    });
  }
);

export const LoginSchema = Yup.object({
  phoneNumber: Yup.string()
    .phone()
    .required("Необходимо указать номер телефона"),
  password: Yup.string()
    .min(6, "Необходимо указать пaроль не меньше 6 символов")
    .required("Необходимо указать пaроль"),
});
