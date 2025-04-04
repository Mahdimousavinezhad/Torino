import * as yup from "yup";

const accountInfoSchema = yup.object({
  email: yup.string("").email("ایمیل معتبر وارد کنید!"),
});

const personalInfoSchema = yup.object({
  fullName: yup.string("نام شما باید به صورت متن باشد!"),
  nationalCode: yup.number(),
  birthDate: yup.string(),
  gender: yup.string(),
});

const paymentInfoSchema = yup.object({
  shaba_code: yup.string(),
  debitCard_code: yup.string(),
  accountIdentifier: yup.string(),
});

const basketCartInfoSchema = yup.object({
  fullName: yup
    .string("نام شما باید به صورت متن باشد!")
    .required("اسم خود را کامل وارد کنید"),
  nationalCode: yup.string().required("کد ملی خود را کامل وارد کنید"),
  birthDate: yup.string().required("تاریخ تولد خود را کامل وارد کنید"),
  gender: yup.string().required("جنسیت خود را انتخاب کنید"),
});

export {
  accountInfoSchema,
  personalInfoSchema,
  paymentInfoSchema,
  basketCartInfoSchema,
};
