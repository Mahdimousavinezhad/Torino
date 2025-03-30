import Link from "next/link";

import styles from "@/styles/404.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <img src="/images/Error TV.png" alt="404 Not Found" />
      <div>
        <h1>صفحه مورد نظر یافت نشد!</h1>
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </div>
    </div>
  );
}

export default NotFound;
