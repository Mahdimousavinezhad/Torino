import AccountInfo from "@/components/modules/dashboardModules/profile/defaultStage/AccountInfo";
import PaymentInfo from "@/components/modules/dashboardModules/profile/defaultStage/PaymentInfo";
import PersonalInfo from "@/components/modules/dashboardModules/profile/defaultStage/PersonalInfo";
// import { useProfile } from "@/hooks/queries";

function ProfilePage() {
  // const { data } = useProfile();
  // console.log(data);

  return (
    <div>
      <AccountInfo />
      <PersonalInfo />
      <PaymentInfo />
    </div>
  );
}

export default ProfilePage;
