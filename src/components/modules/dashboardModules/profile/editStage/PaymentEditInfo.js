import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import { paymentInfoSchema } from "@/schemas/dashboardSchema";
import { useChangeAccInfo } from "@/hooks/mutations";

import styles from "@/styles/PaymentEditInfo.module.css";

function PaymentEditInfo({ userData, setPayStatus }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(paymentInfoSchema),
    defaultValues: {
      shaba_code: userData?.shaba_code || "",
      debitCard_code: userData?.debitCard_code || "",
      accountIdentifier: userData?.accountIdentifier || "",
    },
  });

  const { mutate, isPending } = useChangeAccInfo();

  const onSubmit = (data) => {
    console.log(data);

    if (isPending) {
      toast("چند لحظه صبر کنید!", {
        icon: "👏",
      });
      return;
    }

    mutate(data, { onSuccess: () => setPayStatus(false) });
  };

  return (
    <div className={styles.container}>
      <h2>اطلاعات حساب کاربری</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            {...register("shaba_code")}
            placeholder="شماره شبا"
          />
          <p className={styles.error}>{errors.shaba_code?.message}</p>
        </div>
        <div>
          <input
            type="text"
            {...register("debitCard_code")}
            placeholder="َشماره cvv2"
          />
          <p className={styles.error}>{errors.debitCard_code?.message}</p>
        </div>
        <div>
          <input
            type="text"
            {...register("accountIdentifier")}
            placeholder="شناسه حساب"
          />
          <p className={styles.error}>{errors.accountIdentifier?.message}</p>
        </div>
        <div className={styles.actions}>
          <button type="submit">تایید</button>
          <button onClick={() => setPayStatus(false)}>انصراف</button>
        </div>
      </form>
    </div>
  );
}

export default PaymentEditInfo;
