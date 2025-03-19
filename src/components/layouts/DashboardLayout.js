import DashboardSidebar from "../modules/dashboardModules/sidebar/DashboardSidebar";

import styles from "@/styles/DashboardLayout.module.css";

function DashboardLayout({ children }) {
  return (
    <div className={styles.container}>
      <div>
        <DashboardSidebar />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default DashboardLayout;
