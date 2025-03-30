import styles from "@/styles/PaymentInfo.module.css";

function PaymentInfo({ userData, setPayStatus }) {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2>اطلاعات حساب بانکی</h2>
        <div onClick={() => setPayStatus(true)}>
          <img src="/images/edit-2.png" alt="Edit" />
          <p>ویرایش اطلاعات</p>
        </div>
      </div>
      <div className={styles.subContainer}>
        <div>
          <p>شماره شبا</p>
          <p>{userData?.shaba_code ? userData.shaba_code : "__"} </p>
        </div>
        <div>
          <p>شماره Cvv2</p>
          <p>{userData?.debitCard_code ? userData.debitCard_code : "__"}</p>
        </div>
        <div>
          <p>شماره حساب</p>
          <p>
            {userData?.accountIdentifier ? userData.accountIdentifier : "__"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
