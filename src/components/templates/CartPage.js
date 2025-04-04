import { useEffect } from "react";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import UserInfo from "../modules/cart/UserInfo";
import BasketCart from "../modules/cart/BasketCart";
import { useProfile } from "@/hooks/queries";
import { basketCartInfoSchema } from "@/schemas/dashboardSchema";
import { useOrder } from "@/hooks/mutations";

import styles from "@/styles/CartPage.module.css";

function CartPage() {
  const router = useRouter();
  const { data: userData, isLoading } = useProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(basketCartInfoSchema),
    defaultValues: {
      fullName: userData?.fullName || "",
      nationalCode: userData?.nationalCode || "",
      birthDate: userData?.birthDate || "",
      gender: userData?.gender || "",
    },
  });

  const { mutate, isPending } = useOrder();

  useEffect(() => {
    if (userData) {
      reset({
        fullName: userData.fullName || "",
        nationalCode: userData.nationalCode || "",
        birthDate: userData.birthDate || "",
        gender: userData.gender || "",
      });
    }
  }, [userData, reset]);

  const onSubmit = (data) => {
    if (isPending) {
      toast("چند لحظه صبر کنید!", {
        icon: "👏",
      });
      return;
    }

    const { reactDatePicker, ...rest } = data;

    mutate(rest, {
      onSuccess: (data) => {
        console.log(data);
        toast.success(data.message);
        setTimeout(() => {
          router.reload();
        }, 1500);
      },
      onError: (data) => {
        console.log(data);
      },
    });
  };

  if (isLoading) return <h1>چند لحظه صبور باشید!</h1>;

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <UserInfo
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          control={control}
          onSubmit={onSubmit}
        />
        <BasketCart handleSubmit={handleSubmit} onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default CartPage;
