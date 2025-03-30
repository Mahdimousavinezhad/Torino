import styles from "@/styles/AccountInfo.module.css";

function AccountInfo({ userData, setAccStatus }) {
  console.log(userData);
  return (
    <div className={styles.container}>
      <h2>اطلاعات حساب کاربری</h2>
      <div className={styles.subContainer}>
        <div>
          <p>شماره موبایل</p>
          <p>{userData?.mobile}</p>
        </div>
        <div>
          <p>ایمیل</p>
          <p>{userData?.email ? userData.email : "__"}</p>
        </div>
        <div onClick={() => setAccStatus(true)}>
          <img src="/images/edit-2.png" alt="Edit" />
          <p>افزودن</p>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
