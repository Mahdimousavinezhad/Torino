import styles from "@/styles/PersonalInfo.module.css";

function PersonalInfo({ userData, setPerStatus }) {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2>اطلاعات شخصی</h2>
        <div onClick={() => setPerStatus(true)}>
          <img src="/images/edit-2.png" alt="Edit" />
          <p>ویرایش اطلاعات</p>
        </div>
      </div>
      <div className={styles.subContainer}>
        <div>
          <p>نام و نام خانوادگی</p>
          <p>{userData?.fullName ? userData.fullName : "_"}</p>
        </div>
        <div>
          <p>کدملی</p>
          <p>{userData?.nationalCode ? userData.nationalCode : "__"}</p>
        </div>
        <div>
          <p>جنسیت</p>
          <p>{userData?.gender && userData.gender === "male" ? "مرد" : null}</p>
          <p>
            {userData?.gender && userData.gender === "female" ? "زن" : null}
          </p>
        </div>
        <div>
          <p>تاریخ تولد</p>
          <p>{userData?.birthDate ? userData.birthDate : "__"}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
