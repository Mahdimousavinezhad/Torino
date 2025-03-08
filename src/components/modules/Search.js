import { useState } from "react";
import { useRouter } from "next/router";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import toast from "react-hot-toast";

import styles from "@/styles/Search.module.css";
import "react-multi-date-picker/styles/colors/green.css";
import "react-multi-date-picker/styles/layouts/mobile.css";

export default function Search() {
  const router = useRouter();

  const [query, setQuery] = useState({
    start: "",
    end: "",
    date: [],
  });

  console.log(query);

  const changeHandler = (event) => {
    setQuery((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    const startDate = new Date(start).toLocaleDateString("US");
    const endDate = new Date(end).toLocaleDateString("US");

    setQuery((prev) => ({ ...prev, date: [startDate, endDate] }));
  };

  const searchHandler = (event) => {
    event.preventDefault();

    if (!query.start || !query.end || query.date.length <= 0) {
      toast.error("لطفا تمامی فیلتر ها رو ست کنید!");
      return;
    }

    router.push({ pathname: "/tours", query });
  };

  return (
    <div className={styles.searchBar}>
      <h2>
        <span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
      </h2>
      {/* for large screen  */}
      <form className={styles.largeScreen}>
        <select name="start" value={query.start} onChange={changeHandler}>
          <option value="">مبدا</option>
          <option value="Tehran">تهران</option>
          <option value="Sananndaj">سنندج</option>
          <option value="Tabriz">تبریز</option>
          <option value="Shiraz">شیراز</option>
        </select>
        <div className={styles.underline}></div>
        <select name="end" value={query.end} onChange={changeHandler}>
          <option value="">مقصد</option>
          <option value="Tehran">تهران</option>
          <option value="Sananndaj">سنندج</option>
          <option value="Tabriz">تبریز</option>
          <option value="Shiraz">شیراز</option>
        </select>
        <div className={styles.underline}></div>
        <DatePicker
          className="green"
          calendar={persian}
          locale={persian_fa}
          placeholder="تاریخ"
          range
          rangeHover
          onChange={handleDateChange}
        />
        <button className={styles.searchBtn} onClick={searchHandler}>
          جستجو
        </button>
      </form>
      {/* for small screen */}
      <form className={styles.smallScreen}>
        <div>
          <select name="start" value={query.start} onChange={changeHandler}>
            <option value="">مبدا</option>
            <option value="Tehran">تهران</option>
            <option value="Sananndaj">سنندج</option>
            <option value="Tabriz">تبریز</option>
            <option value="Shiraz">شیراز</option>
          </select>
          <select name="end" value={query.end} onChange={changeHandler}>
            <option value="">مقصد</option>
            <option value="Tehran">تهران</option>
            <option value="Sananndaj">سنندج</option>
            <option value="Tabriz">تبریز</option>
            <option value="Shiraz">شیراز</option>
          </select>
        </div>
        <DatePicker
          className="green rmdp-mobile"
          calendar={persian}
          locale={persian_fa}
          placeholder="تاریخ"
          range
          rangeHover
          onChange={handleDateChange}
        />
        <button className={styles.searchBtn} onClick={searchHandler}>
          جستجو
        </button>
      </form>
    </div>
  );
}
