import styles from "@/styles/Card.module.css";
import { sp } from "@/utils/replaceNumber";

function Card(props) {
  const { image, title, price, options } = props;
  return (
    <div className={styles.card}>
      <img src={image} alt="Image" />
      <h2>{title}</h2>
      <span>{options.join(",")}</span>
      <hr />
      <div>
        <button>رزرو</button>
        <div>
          <p>{sp(price)}</p>
          تومان
        </div>
      </div>
    </div>
  );
}

export default Card;
