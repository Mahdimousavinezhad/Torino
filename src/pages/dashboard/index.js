import DashboardLayout from "@/components/layouts/DashboardLayout";
import ProfilePage from "@/components/templates/dashboard/ProfilePage";

function Dashboard() {
  return (
    <div>
      <DashboardLayout>
        <ProfilePage />
      </DashboardLayout>
    </div>
  );
}

export default Dashboard;
