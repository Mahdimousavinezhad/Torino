import styles from "@/styles/MyToursCard.module.css";
import { sp } from "@/utils/replaceNumber";

function MyToursCard({
  title,
  price,
  fleetVehicle,
  startDate,
  endDate,
  origin,
  index,
  lastIndex,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.topInfo}>
        <div>
          <img src="/images/sun-fog.png" alt="Sun" />
          <h3>{title}</h3>
        </div>
        <div>
          <img src="/images/airplane2.png" alt="Vehicle" />
          <h3>{fleetVehicle}</h3>
        </div>
        <p className={index === lastIndex ? styles.pending : styles.finish}>
          {index === lastIndex ? "درحال برگذاری" : "به اتمام رسیده"}
        </p>
      </div>
      <div className={styles.midInfo}>
        <div>
          <h4>
            {origin.name} به {title}
          </h4>
          <p>:</p>
          <span>{new Date(startDate).toLocaleDateString("FA-IR")}</span>
        </div>
        <div>
          <h4>تاریخ برگشت</h4>
          <p>:</p>
          <span>{new Date(endDate).toLocaleDateString("FA-IR")}</span>
        </div>
      </div>
      <div className={styles.border}></div>
      <div className={styles.downInfo}>
        <div>
          <h4>شماره تور :</h4>
          <p>{index + 1}</p>
        </div>
        <div className={styles.downBorder}></div>
        <div>
          <h4>مبلغ پرداخت شده :</h4>
          <h3>{sp(price)}</h3>
          <p>تومان</p>
        </div>
      </div>
    </div>
  );
}

export default MyToursCard;
