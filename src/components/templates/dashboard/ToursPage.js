import MyToursCard from "@/components/modules/dashboardModules/myTours/MyToursCard";
import { useGetMyTours } from "@/hooks/queries";

import styles from "@/styles/ToursPage.module.css"

function ToursPage() {
  const { data: userTours, isLoading } = useGetMyTours();

  if (isLoading) return <h1>چند لحظه صبر کنید....</h1>;

  const lastIndex = userTours.length - 1;

  return (
    <div className={styles.container}>
      {userTours.map((tour, index) => (
        <MyToursCard
          key={tour.id}
          {...tour}
          index={index}
          lastIndex={lastIndex}
        />
      ))}
    </div>
  );
}

export default ToursPage;
