import { useRouter } from "next/router";
import toast from "react-hot-toast";

import { useOrder } from "@/hooks/mutations";
import { useCart } from "@/hooks/queries";
import { sp } from "@/utils/replaceNumber";

import styles from "@/styles/BasketCart.module.css";

function BasketCart({ userInfo, setUserInfo }) {
  const { data } = useCart();
  const { mutate, isPending } = useOrder();

  const router = useRouter();

  if (!data)
    return <h1 style={{ color: "red" }}>شما هیچ توری در سبد خرید ندارید</h1>;

  const timeDiff =
    new Date(data?.endDate).getDate() - new Date(data?.startDate).getDate();

  const orderHandler = (event) => {
    event.preventDefault();

    if (isPending) {
      toast("چند لحظه صبر کنید!", {
        icon: "👏",
      });
      return;
    } else if (
      !userInfo.nationalCode ||
      !userInfo.fullName ||
      !userInfo.gender ||
      !userInfo.birthDate
    ) {
      toast.error("لطفا اطلاعات شخصی خود را کامل کنید!");
      return;
    }

    mutate(userInfo, {
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

  return (
    <div className={styles.container}>
      {userInfo ? (
        <>
          <div className={styles.topInfo}>
            <h1>{data?.title}</h1>
            <h4>
              {timeDiff} روز و {timeDiff - 1} شب
            </h4>
          </div>
          <div className={styles.border}></div>
          <div className={styles.price}>
            <h4>قیمت نهایی :</h4>
            <h1>{sp(data.price)}</h1>
            <p>تومان</p>
          </div>
          <button onClick={orderHandler}>ثبت و خرید نهایی</button>
        </>
      ) : (
        <>
          <h1>شما هیچ توری در سبد خرید ندارید</h1>
        </>
      )}
    </div>
  );
}

export default BasketCart;
