import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import { personalInfoSchema } from "@/schemas/dashboardSchema";
import { useChangeAccInfo } from "@/hooks/mutations";

import styles from "@/styles/PersonalInfoEdit.module.css";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";

function PersonalInfoEdit({ userData, setPerStatus }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(personalInfoSchema),
    defaultValues: {
      fullName: userData?.fullName || "",
      nationalCode: userData?.nationalCode || null,
      birthDate: userData?.birthDate || "",
      gender: userData?.gender || "",
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

    const { reactDatePicker, birthDate: oldBirthDate, ...rest } = data;

    const birthDate = new Date(reactDatePicker).toLocaleDateString("FA-IR");

    const newData = { ...rest, birthDate };
    console.log("NEW DATA:", newData);

    mutate(newData, { onSuccess: () => setPerStatus(false) });
  };

  return (
    <div className={styles.container}>
      <h2>اطلاعات حساب کاربری</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            {...register("fullName")}
            placeholder="نام و نام خانوادکی"
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
        <div>
          <Controller
            control={control}
            name="reactDatePicker"
            render={({ field: { onChange } }) => (
              <DatePicker
                onChange={onChange}
                className="green"
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
        <div className={styles.actions}>
          <button type="submit">تایید</button>
          <button onClick={() => setPerStatus(false)}>انصراف</button>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfoEdit;
