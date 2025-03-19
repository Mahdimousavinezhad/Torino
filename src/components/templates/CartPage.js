import { useState } from "react";

import UserInfo from "../modules/cart/UserInfo";
import BasketCart from "../modules/cart/BasketCart";

import styles from "@/styles/CartPage.module.css";

function CartPage() {
  const [userInfo, setUserInfo] = useState({
    nationalCode: "",
    fullName: "",
    gender: "",
    birthDate: "",
  });

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <UserInfo userInfo={userInfo} setUserInfo={setUserInfo} />
        <BasketCart userInfo={userInfo} setUserInfo={setUserInfo} />
      </div>
    </div>
  );
}

export default CartPage;
