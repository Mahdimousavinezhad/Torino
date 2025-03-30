import { useRouter } from "next/router";
import Link from "next/link";

import styles from "@/styles/DashboardSidebar.module.css";

function DashboardSidebar() {
  const { pathname } = useRouter();

  return (
    <div>
      <div className={styles.sidebar}>
        <ul>
          <li
            className={pathname === "/dashboard" ? styles.active : styles.list}
          >
            <Link href="/dashboard">
              <img src="/images/profile (5).png" alt="Profile" />
              <p>پروفایل</p>
            </Link>
          </li>
          <li
            className={
              pathname === "/dashboard/tours" ? styles.active : styles.list
            }
          >
            <Link href="/dashboard/tours">
              <img src="/images/sun-fog.png" alt="Tours" />
              <p>تور های من</p>
            </Link>
          </li>
          <li
            className={
              pathname === "/dashboard/transactions"
                ? styles.active
                : styles.list
            }
          >
            <Link href="/dashboard/transactions">
              <img src="/images/convert-card.png" alt="Transactions" />
              <p>تراکنش ها</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.sidebarSmallScreen}>
        <ul>
          <li
            className={
              pathname === "/dashboard" ? styles.activeSm : styles.list
            }
          >
            <Link href="/dashboard">
              <img src="/images/profile (5).png" alt="Profile" />
              <p>پروفایل</p>
            </Link>
          </li>
          <li
            className={
              pathname === "/dashboard/tours" ? styles.activeSm : styles.list
            }
          >
            <Link href="/dashboard/tours">
              <img src="/images/sun-fog.png" alt="Tours" />
              <p>تور های من</p>
            </Link>
          </li>
          <li
            className={
              pathname === "/dashboard/transactions"
                ? styles.activeSm
                : styles.list
            }
          >
            <Link href="/dashboard/transactions">
              <img src="/images/convert-card.png" alt="Transactions" />
              <p>تراکنش ها</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardSidebar;
