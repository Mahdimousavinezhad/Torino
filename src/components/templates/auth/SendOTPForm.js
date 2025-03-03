import { useRouter } from "next/router";
import { CloseIcon } from "@/components/icons/Close";
import { useRegister } from "@/hooks/mutations";

import styles from "@/styles/SendOTPForm.module.css";
import toast, { Toaster } from "react-hot-toast";

function SendOTPForm({ setIsOpen, number, setNumber, setStep }) {
  const router = useRouter();
  const { mutate, isPending } = useRegister();

  const closeHandler = () => {
    setIsOpen(false);
    router.push("/");
  };

  const sendHandler = (event) => {
    event.preventDefault();
    const phoneRegex = /^09\d{9}$/;

    if (!number) {
      toast.error("شماره خود را به صورت کامل وارد کنید!");
      return;
    } else if (!phoneRegex.test(number)) {
      toast.error("یک شماره معتبر وارد کنید!");
    } else {
      mutate(number, {
        onSuccess: (data) => {
          console.log(data);
          setStep(2);
          toast.success(`کد ارسال شده ${data.code} را وارد کنید`, {
            duration: 10000,
          });
        },
        onError: (error) => {
          console.log(error);
        },
      });
    }
  };

  return (
    <div className={styles.modal}>
      <Toaster />
      <CloseIcon onClick={closeHandler} />
      <h1>ورود به تورینو</h1>
      <form action="">
        <label htmlFor="phoneNumber">شماره موبایل خود را وارد کنید</label>
        <input
          type="number"
          id="phoneNumber"
          placeholder="0912***4253"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={sendHandler}>ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default SendOTPForm;
