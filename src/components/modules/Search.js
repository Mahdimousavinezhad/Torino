import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import styles from "@/styles/Search.module.css";

export default function Search() {
  const [query, setQuery] = useState({
    start: "",
    end: "",
    date: [],
  });

  console.log(query);

  const changeHandler = (event) => {
    setQuery((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <div className={styles.searchBar}>
      <h2>
        <span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
      </h2>
      <form action="">
        <select name="start" value={query.start} onChange={changeHandler}>
          <option value="" defaultChecked>
            مبدا
          </option>
          <option value="tehran">تهران</option>
          <option value="sanandaj">سنندج</option>
          <option value="tabriz">تبریز</option>
          <option value="shiraz">شیراز</option>
        </select>
        <span>|</span>
        <select name="end" value={query.end} onChange={changeHandler}>
          <option value="" defaultChecked>
            مقصد
          </option>
          <option value="tehran">تهران</option>
          <option value="sanandaj">سنندج</option>
          <option value="tabriz">تبریز</option>
          <option value="shiraz">شیراز</option>
        </select>
        <span>|</span>
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          format={"YYYY/MM/DD"}
          showOtherDays
          placeholder="تاریخ"
          range
          onChange={(event) =>
            setQuery((prev) => ({ ...prev, date: event.toString() }))
          }
        />
        <button className={styles.searchBtn}>جستجو</button>
      </form>
    </div>
  );
}
