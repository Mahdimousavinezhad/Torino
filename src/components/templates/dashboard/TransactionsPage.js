import TransactionsTable from "@/components/modules/dashboardModules/transactions/TransactionsTable";
import { useGetMyTransactions } from "@/hooks/queries";

function TransactionsPage() {
  const { data: userTransactions, isLoading } = useGetMyTransactions();
  console.log(userTransactions);

  if (isLoading) return <h1>چند لحظه صبر کنید....</h1>;

  return (
    <div>
      <TransactionsTable userTransactions={userTransactions} />
    </div>
  );
}

export default TransactionsPage;
