import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import OtpInput from "react18-input-otp";

import { CloseIcon } from "@/components/icons/Close";
import { useRegister, useVerifyRegister } from "@/hooks/mutations";
import { setCookie } from "@/utils/cookies";
import reSendHandler from "@/utils/resendCode";

import styles from "@/styles/CheckOTPForm.module.css";

function CheckOTPForm({ setIsOpen, number }) {
  const router = useRouter();

  const [code, setCode] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const { mutate, isPending } = useVerifyRegister();
  const { mutate: mutateRegister, isPending: pendingRegister } = useRegister();

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    setMinutes(1);
    setSeconds(30);
  }, []);

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
    reSendHandler(pendingRegister, toast, number, mutateRegister);
  };

  const closeHandler = () => {
    setIsOpen(false);
    router.push("/");
  };

  const sendHandler = (event) => {
    event.preventDefault();

    if (isPending) {
      toast("چند لحظه صبر کنید!", {
        icon: "👏",
      });
      return;
    }

    if (!code || code.length > 6) {
      toast.error("کد خود را به صورت کامل وارد کنید!");
      return;
    } else {
      mutate(
        { mobile: number, code },
        {
          onSuccess: (data) => {
            console.log(data);
            setCookie("accessToken", data?.accessToken, 30);
            setCookie("refreshToken", data?.refreshToken, 365);
            toast.success("شما با موفقیت وارد شدید!");
            setIsOpen(false);
            router.push("/");
            router.reload();
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
      <CloseIcon onClick={closeHandler} />
      <h1>کد تایید را وارد کنید</h1>
      <h3>کد تایید به شماره {number} ارسال شد</h3>
      <form action="">
        <OtpInput value={code} onChange={(e) => setCode(e)} numInputs={6} />
        <div className="countdown-text">
          {seconds > 0 || minutes > 0 ? (
            <p>
              زمان باقی مانده: {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
          ) : (
            <>
              <p>کد برای شما ارسال نشد؟</p>
              <button
                className={styles.resendOTPBtn}
                disabled={seconds > 0 || minutes > 0}
                onClick={resendOTP}
              >
                ارسال مجدد
              </button>
            </>
          )}
        </div>
        <button onClick={sendHandler}>ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
