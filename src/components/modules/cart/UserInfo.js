import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import styles from "@/styles/UserInfo.module.css";
import "react-multi-date-picker/styles/colors/green.css";
import "react-multi-date-picker/styles/layouts/mobile.css";

function UserInfo({ userInfo, setUserInfo }) {
  const changeHandler = (event) => {
    setUserInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const changeDateHandler = (date) => {
    const formatedDate = new Date(date).toLocaleDateString("US");
    setUserInfo((prev) => ({ ...prev, birthDate: formatedDate }));
  };

  return (
    <div className={styles.container}>
      <div>
        <img src="/images/profile (3).png" alt="Profile" />
        <h1>مشخصات مسافر</h1>
      </div>
      <form>
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          name="fullName"
          onChange={changeHandler}
        />
        <input
          type="number"
          placeholder="کدملی"
          name="nationalCode"
          onChange={changeHandler}
        />
        <div className={styles.largeScreen}>
          <DatePicker
            className={"green"}
            calendar={persian}
            locale={persian_fa}
            placeholder="تاریخ تولد"
            name="birthDate"
            onChange={changeDateHandler}
          />
        </div>
        <div className={styles.smallScreen}>
          <DatePicker
            className={"green rmdp-mobile"}
            calendar={persian}
            locale={persian_fa}
            placeholder="تاریخ تولد"
            name="birthDate"
            onChange={changeDateHandler}
          />
        </div>
        <select name="gender" onChange={changeHandler}>
          <option value="">جنسیت</option>
          <option value="female">زن</option>
          <option value="male">مرد</option>
        </select>
      </form>
    </div>
  );
}

export default UserInfo;
