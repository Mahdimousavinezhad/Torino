import { useCart } from "@/hooks/queries";
import { sp } from "@/utils/replaceNumber";

import styles from "@/styles/BasketCart.module.css";

function BasketCart({ handleSubmit, onSubmit }) {
  const { data } = useCart();

  if (!data)
    return <h1 style={{ color: "red" }}>شما هیچ توری در سبد خرید ندارید</h1>;

  const timeDiff =
    new Date(data?.endDate).getDate() - new Date(data?.startDate).getDate();

  return (
    <div className={styles.container}>
      {data ? (
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
          <button onClick={handleSubmit(onSubmit)}>ثبت و خرید نهایی</button>
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
