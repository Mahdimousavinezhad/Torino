import DashboardLayout from "@/components/layouts/DashboardLayout";
import ProfilePage from "@/components/templates/dashboard/ProfilePage";

function Profile() {
  return (
    <div>
      <DashboardLayout>
        <ProfilePage />
      </DashboardLayout>
    </div>
  );
}

export default Profile;
