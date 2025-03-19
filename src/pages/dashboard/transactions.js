import DashboardLayout from "@/components/layouts/DashboardLayout";
import TransactionsPage from "@/components/templates/dashboard/TransactionsPage";

function Transactions() {
  return (
    <div>
      <DashboardLayout>
        <TransactionsPage />
      </DashboardLayout>
    </div>
  );
}

export default Transactions;
