import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import { accountInfoSchema } from "@/schemas/dashboardSchema";
import { useChangeAccInfo } from "@/hooks/mutations";

import styles from "@/styles/AccountEditInfo.module.css";

function AccountEditInfo({ userData, setAccStatus }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(accountInfoSchema),
    defaultValues: {
      email: userData?.email || "",
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

    mutate(data, { onSuccess: () => setAccStatus(false) });
  };

  return (
    <div className={styles.container}>
      <h2>اطلاعات حساب کاربری</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>شماره موبایل</p>
          <p>{userData?.mobile}</p>
        </div>
        <div>
          <input type="text" {...register("email")} placeholder="آدرس ایمیل" />
          <p className={styles.error}>{errors.email?.message}</p>
        </div>
        <div>
          <button type="submit">تایید</button>
        </div>
      </form>
    </div>
  );
}

export default AccountEditInfo;
