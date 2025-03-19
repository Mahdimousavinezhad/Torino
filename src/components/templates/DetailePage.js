import { useReservation } from "@/hooks/mutations";
import styles from "@/styles/DetailePage.module.css";
import { sp } from "@/utils/replaceNumber";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

function DetailePage({ data }) {
  const router = useRouter();

  const {
    id,
    image,
    price,
    startDate,
    endDate,
    origin,
    destination,
    fleetVehicle,
    title,
    availableSeats,
  } = data;

  const timeDiff = new Date(endDate) - new Date(startDate);
  const finalDate = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  const { mutate } = useReservation();

  const reservationHandler = () => {
    mutate(id, {
      onSuccess: (data) => {
        console.log(data);
        toast.success("تور شما با موفقیت به سبدخرید اضافه شد!");
        router.push("/cart");
      },
      onError: (data) => {
        console.log(data);
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.topSide}>
          <div>
            <img src={image} alt="Cover" />
          </div>
          <div>
            <div className={styles.topInfo}>
              <h1>{title}</h1>
              <h3>
                {finalDate} روز و {finalDate - 1} شب
              </h3>
              <ul>
                <li>
                  <img src="/images/user-tick.png" alt="User" />
                  <span>تور لیدر از مبدا</span>
                </li>
                <li>
                  <img src="/images/map.png" alt="Map" />
                  <span>برنامه سفر</span>
                </li>
                <li>
                  <img src="/images/medal-star.png" alt="Medal" />
                  <span>تضمین کیفیت</span>
                </li>
              </ul>
            </div>
            <ul className={styles.smallScreenBottomInfo}>
              <li>
                <div>
                  <img src="/images/bus.png" alt="Car" />
                  <span>حمل و نقل</span>
                </div>
                <h4>{fleetVehicle}</h4>
              </li>
              <div></div>
              <li>
                <div>
                  <img src="/images/profile-2user.png" alt="Member" />
                  <span>ظرفیت</span>
                </div>
                <h4>حداکثر {sp(availableSeats)} نفر</h4>
              </li>
              <div></div>
              <li>
                <div>
                  <img src="/images/security.png" alt="Security" />
                  <span>بیمه</span>
                </div>
                <h4>بیمه {sp(50)} هزار دیناری</h4>
              </li>
            </ul>
            <div className={styles.buy}>
              <div>
                <h2>{sp(price)}</h2>
                <p>هزار تومان</p>
              </div>
              <button onClick={reservationHandler}>رزرو و خرید</button>
            </div>
          </div>
        </div>
        <div className={styles.bottomSide}>
          <ul>
            <li>
              <div>
                <img src="/images/routing-2.png" alt="Rout" />
                <span>مبدا</span>
              </div>
              <h4>{origin.name}</h4>
            </li>
            <div></div>
            <li>
              <div>
                <img src="/images/calendar.png" alt="Calendar" />
                <span>تاریخ رفت</span>
              </div>
              <h4>{new Date(startDate).toLocaleDateString("FA")}</h4>
            </li>
            <div></div>
            <li>
              <div>
                <img src="/images/calendar.png" alt="Calendar" />
                <span>تاریخ برگشت</span>
              </div>
              <h4>{new Date(endDate).toLocaleDateString("FA")}</h4>
            </li>
            <div></div>
            <li>
              <div>
                <img src="/images/bus.png" alt="Car" />
                <span>حمل و نقل</span>
              </div>
              <h4>{fleetVehicle}</h4>
            </li>
            <div></div>
            <li>
              <div>
                <img src="/images/profile-2user.png" alt="Member" />
                <span>ظرفیت</span>
              </div>
              <h4>حداکثر {sp(availableSeats)} نفر</h4>
            </li>
            <div></div>
            <li>
              <div>
                <img src="/images/security.png" alt="Security" />
                <span>بیمه</span>
              </div>
              <h4>بیمه {sp(50)} هزار دیناری</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailePage;
