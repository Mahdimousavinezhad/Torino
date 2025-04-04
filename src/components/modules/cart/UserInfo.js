import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Controller } from "react-hook-form";

import "react-multi-date-picker/styles/colors/green.css";
import "react-multi-date-picker/styles/layouts/mobile.css";
import styles from "@/styles/UserInfo.module.css";

function UserInfo({ register, handleSubmit, errors, control, onSubmit }) {
  return (
    <div className={styles.container}>
      <div>
        <img src="/images/profile (3).png" alt="Profile" />
        <h1>مشخصات مسافر</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            {...register("fullName")}
            placeholder="نام و نام خانوادگی"
          />
          <p className={styles.error}>{errors.fullName?.message}</p>
        </div>
        <div>
          <input
            type="text"
            {...register("nationalCode")}
            placeholder="کد ملی"
          />
          <p className={styles.error}>{errors.nationalCode?.message}</p>
        </div>
        <div className={styles.largeScreen}>
          <Controller
            control={control}
            name="reactDatePicker"
            render={({ field: { onChange } }) => (
              <DatePicker
                onChange={onChange}
                className="green"
                name="birthDate"
                calendar={persian}
                locale={persian_fa}
                placeholder="تاریخ"
                rangeHover
              />
            )}
          />
          <p className={styles.error}>{errors.birthDate?.message}</p>
        </div>
        <div className={styles.smallScreen}>
          <Controller
            control={control}
            name="reactDatePicker"
            render={({ field: { onChange } }) => (
              <DatePicker
                onChange={onChange}
                className="green rmdp-mobile"
                name="birthDate"
                calendar={persian}
                locale={persian_fa}
                placeholder="تاریخ"
                rangeHover
              />
            )}
          />
          <p className={styles.error}>{errors.birthDate?.message}</p>
        </div>
        <div>
          <select {...register("gender")}>
            <option defaultValue value="">
              جنسیت
            </option>
            <option value="female">زن</option>
            <option value="male">مرد</option>
          </select>
          <p className={styles.error}>{errors.gender?.message}</p>
        </div>
      </form>
    </div>
  );
}

export default UserInfo;
