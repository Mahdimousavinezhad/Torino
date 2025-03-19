import Card from "@/components/modules/Card";
import api from "@/configs/api";

import styles from "@/styles/Tours.module.css";
import { useEffect, useState } from "react";

function Tours(props) {
  const [error, setError] = useState("");

  useEffect(() => {
    if (props.error) {
      setError(props?.error);
    }
  }, [props]);

  if (!props.data) return <h1>Loading...</h1>;
  return (
    <div className={styles.conatiner}>
      {error && <h1>{error}</h1>}
      {!error && (
        <div className={styles.cards}>
          {props?.data?.map((tour) => (
            <Card key={tour.id} {...tour} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Tours;

export async function getServerSideProps({ query }) {
  const { start, end, date } = query;
  const data = await api.get("/tour");

  if (start && end && date.length > 0) {
    try {
      let filteredData = data.filter((tour) => {
        const startDate = new Date(tour.startDate).toLocaleDateString("US");
        const endDate = new Date(tour.endDate).toLocaleDateString("US");

        return (
          tour.origin.name === start &&
          tour.destination.name === end &&
          startDate === date[0] &&
          endDate === date[1]
        );
      });

      return {
        props: {
          data: filteredData,
          error:
            filteredData.length === 0
              ? "هیچ توری با این مشخصات یافت نشد."
              : null,
        },
      };
    } catch (error) {
      return {
        props: {
          data: [],
          error: "مشکلی در دریافت اطلاعات از سرور پیش آمد.",
        },
      };
    }
  } else {
    return {
      props: { data },
    };
  }
}
