import { useState } from "react";

import AccountInfo from "@/components/modules/dashboardModules/profile/defaultStage/AccountInfo";
import PaymentInfo from "@/components/modules/dashboardModules/profile/defaultStage/PaymentInfo";
import PersonalInfo from "@/components/modules/dashboardModules/profile/defaultStage/PersonalInfo";
import AccountEditInfo from "@/components/modules/dashboardModules/profile/editStage/AccountEditInfo";
import PaymentEditInfo from "@/components/modules/dashboardModules/profile/editStage/PaymentEditInfo";
import PersonalEditInfo from "@/components/modules/dashboardModules/profile/editStage/PersonalEditInfo";
import { useProfile } from "@/hooks/queries";

import styles from "@/styles/ProfilePage.module.css";

function ProfilePage() {
  const [accStatus, setAccStatus] = useState(false);
  const [perStatus, setPerStatus] = useState(false);
  const [payStatus, setPayStatus] = useState(false);

  const { data: userData, isLoading } = useProfile();

  if (isLoading) return <h1>چند لحظه صبر کنید....</h1>;

  return (
    <div className={styles.container}>
      {accStatus ? (
        <AccountEditInfo userData={userData} setAccStatus={setAccStatus} />
      ) : (
        <AccountInfo userData={userData} setAccStatus={setAccStatus} />
      )}
      {perStatus ? (
        <PersonalEditInfo userData={userData} setPerStatus={setPerStatus} />
      ) : (
        <PersonalInfo userData={userData} setPerStatus={setPerStatus} />
      )}
      {payStatus ? (
        <PaymentEditInfo userData={userData} setPayStatus={setPayStatus} />
      ) : (
        <PaymentInfo userData={userData} setPayStatus={setPayStatus} />
      )}
    </div>
  );
}

export default ProfilePage;
