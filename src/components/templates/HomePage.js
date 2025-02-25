import Banner from "../modules/Banner";
import Card from "../modules/Card";
import Search from "../modules/Search";

import styles from "@/styles/HomePage.module.css";
import Slider from "../modules/Slider";

function HomePage({ tours }) {
  return (
    <>
      <Banner />
      <div className={styles.main}>
        <Search />
        <div className={styles.cardsSec}>
          <h1>همه ی تورها</h1>
          <div className={styles.cards}>
            {tours.map((tour) => (
              <Card key={tour.id} {...tour} />
            ))}
          </div>
          <div className={styles.contactUs}>
            <img src="/images/Group 44.png" alt="" />
            <img src="/images/Group 45.png" alt="" />
          </div>
        </div>
        <div className={styles.slider}>
          <div>
            <div>
              <span>؟</span>
              <h1>
                چرا <span>تورینو</span> ؟
              </h1>
            </div>
            <h3>تور طبیعت گردی و تاریخی </h3>
            <p>
              اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
              طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید
              تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های
              گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای
              فرهنگی و تاریخی را خریداری کنید.
            </p>
          </div>
          <Slider />
        </div>
      </div>
    </>
  );
}

export default HomePage;
