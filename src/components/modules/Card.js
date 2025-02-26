import styles from "@/styles/Card.module.css";
import { sp } from "@/utils/replaceNumber";
import Link from "next/link";

function Card(props) {
  const { id, image, title, price, options } = props;
  return (
    <div className={styles.card}>
      <img src={image} alt="Image" />
      <h2>{title}</h2>
      <span>{options.join(",")}</span>
      <hr />
      <div>
        <Link href={`/tours/${id}`}>رزرو</Link>
        <div>
          <p>{sp(price)}</p>
          تومان
        </div>
      </div>
    </div>
  );
}

export default Card;
