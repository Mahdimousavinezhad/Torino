import { useState } from "react";
import { useRouter } from "next/router";

import { CloseIcon } from "@/components/icons/Close";
import { useVerifyRegister } from "@/hooks/mutations";

import styles from "@/styles/CheckOTPForm.module.css";
import OtpInput from "react18-input-otp";
import { setCookie } from "@/utils/cookies";
import toast, { Toaster } from "react-hot-toast";

function CheckOTPForm({ setIsOpen, number, setNumber }) {
  const router = useRouter();
  const { mutate, isPending } = useVerifyRegister();
  const [code, setCode] = useState("");

  const closeHandler = () => {
    setIsOpen(false);
    router.push("/");
  };

  const sendHandler = (event) => {
    event.preventDefault();

    if (!code || code.length > 6) {
      toast.error("کد خود را به صورت کامل وارد کنید!");
      return;
    } else {
      mutate(
        { mobile: number, code },
        {
          onSuccess: (data) => {
            console.log(data);
            setCookie({
              accessToken: data.accessToken,
              refreshToken: data.refreshToken,
            });
            toast.success("شما با موفقیت وارد شدید!");
            setIsOpen(false);
            router.push("/dashboard");
            setTimeout(() => {
              router.reload();
            }, 1000);
          },
          onError: (error) => {
            console.log(error);
            toast.error("مشکلی پیش آمده است بعدا دوباره تلاش کنید");
          },
        }
      );
    }
  };

  return (
    <div className={styles.modal}>
      <Toaster />
      <CloseIcon onClick={closeHandler} />
      <h1>کد تایید را وارد کنید</h1>
      <h3>کد تایید به شماره {number} ارسال شد</h3>
      <form action="">
        <label htmlFor="phoneNumber"></label>
        <OtpInput value={code} onChange={(e) => setCode(e)} numInputs={6} />
        <button onClick={sendHandler}>ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
