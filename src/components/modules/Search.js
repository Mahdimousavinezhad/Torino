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
    originId: "",
    destinationId: "",
    date: [],
  });

  const changeHandler = (event) => {
    setQuery((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;

    const startDate = start?.toDate().toISOString();
    const endDate = end?.toDate().toISOString();

    setQuery((prev) => ({ ...prev, date: [startDate, endDate] }));
  };

  const searchHandler = (event) => {
    event.preventDefault();

    if (!query.originId || !query.destinationId || query.date.length <= 0) {
      toast.error("لطفا تمامی فیلتر ها رو ست کنید!");
      return;
    }

    router.push({ pathname: "/tours", query });

    // router.push({
    //   pathname: "/tours",
    //   query: `originId=${query.originId}&destinationId=${query.destinationId}&startDate=${query.date[0]}&endDate=${query.date[1]}`,
    // });
  };

  return (
    <div className={styles.searchBar}>
      <h2>
        <span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
      </h2>
      {/* for large screen  */}
      <form className={styles.largeScreen}>
        <select name="originId" value={query.originId} onChange={changeHandler}>
          <option value="">مبدا</option>
          <option value="1">تهران</option>
          <option value="2">سنندج</option>
          <option value="3">مادرید</option>
          <option value="4">اصفهان</option>
          <option value="5">سلیمانیه</option>
          <option value="6">هولر</option>
          <option value="7">مازندران</option>
          <option value="8">آفرود</option>
          <option value="9">ایتالیا</option>
        </select>
        <div className={styles.underline}></div>
        <select
          name="destinationId"
          value={query.destinationId}
          onChange={changeHandler}
        >
          <option value="">مقصد</option>
          <option value="1">تهران</option>
          <option value="2">سنندج</option>
          <option value="3">مادرید</option>
          <option value="4">اصفهان</option>
          <option value="5">سلیمانیه</option>
          <option value="6">هولر</option>
          <option value="7">مازندران</option>
          <option value="8">آفرود</option>
          <option value="9">ایتالیا</option>
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
          <select
            name="originId"
            value={query.originId}
            onChange={changeHandler}
          >
            <option value="">مبدا</option>
            <option value="1">تهران</option>
            <option value="2">سنندج</option>
            <option value="3">مادرید</option>
            <option value="4">اصفهان</option>
            <option value="5">سلیمانیه</option>
            <option value="6">هولر</option>
            <option value="7">مازندران</option>
            <option value="8">آفرود</option>
            <option value="9">ایتالیا</option>
          </select>
          <select
            name="destinationId"
            value={query.destinationId}
            onChange={changeHandler}
          >
            <option value="">مقصد</option>
            <option value="1">تهران</option>
            <option value="2">سنندج</option>
            <option value="3">مادرید</option>
            <option value="4">اصفهان</option>
            <option value="5">سلیمانیه</option>
            <option value="6">هولر</option>
            <option value="7">مازندران</option>
            <option value="8">آفرود</option>
            <option value="9">ایتالیا</option>
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
