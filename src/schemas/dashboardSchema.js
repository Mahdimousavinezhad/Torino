import * as yup from "yup";

const accountInfoSchema = yup.object({
  email: yup.string("").email("ایمیل معتبر وارد کنید!"),
});

const personalInfoSchema = yup.object({
  fullName: yup.string("نام شما باید به صورت متن باشد!"),
  nationalCode: yup.number("کدملی را به صورت عدد وارد کنید!"),
  birthDate: yup.string(),
  gender: yup.string(),
});

const paymentInfoSchema = yup.object({
  shaba_code: yup.string(),
  debitCard_code: yup.string(),
  accountIdentifier: yup.string(),
});

export { accountInfoSchema, personalInfoSchema, paymentInfoSchema };
