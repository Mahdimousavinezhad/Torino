import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "@/styles/NetworkConnection.module.css";

function NetworkConnection() {
  const router = useRouter();
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const status = navigator.onLine;
    setIsOnline(status);

    if (!isOnline) {
      router.push("/networkConnection");
    } else if (router.pathname === "/networkConnection" && isOnline) {
      router.push("/");
    }
  }, [isOnline, router.pathname]);

  if (isOnline) return;

  return (
    <div className={styles.container}>
      <img src="/images/Error Lamp Robot.png" alt="Network Connection Failed" />
      <div>
        <h1>!اتصال با سرور برقرار نیست</h1>
        <h2>.لطفا بعدا دوباره امتحان کنید</h2>
      </div>
    </div>
  );
}

export default NetworkConnection;
