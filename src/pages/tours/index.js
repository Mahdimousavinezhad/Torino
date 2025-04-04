import { useEffect, useState } from "react";

import Card from "@/components/modules/Card";
import api from "@/configs/api";

import styles from "@/styles/Tours.module.css";

function Tours(props) {
  console.log(props?.data);
  const [error, setError] = useState("");

  useEffect(() => {
    if (props.error) {
      setError(props?.error);
    }
  }, [props]);

  if (!props?.data) return <h1>Loading...</h1>;

  return (
    <div className={styles.conatiner}>
      {error && <h1>{error}</h1>}
      {!props?.data.length && !error && (
        <h1>هیچ توری با این مشخصات یافت نشد!</h1>
      )}
      {!error && props?.data && (
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
  console.log(query);
  try {
    const data = await api.get(
      `/tour?destinationId=${query.destinationId}&originId=${query.originId}&startDate=${query.date[0]}&endDate=${query.date[1]}`
    );

    return { props: { data } };
  } catch (error) {
    return {
      props: { data: [], error: "مشکلی پیش آمده لطفا بعدا دوباره تلاش کنید!" },
    };
  }
}
