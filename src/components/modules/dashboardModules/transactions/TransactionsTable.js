import { sp } from "@/utils/replaceNumber";

import styles from "@/styles/TransactionsTable.module.css";

function TransactionsTable({ userTransactions }) {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>تاریخ و ساعت</th>
            <th>مبلغ(تومان)</th>
            <th className={styles.type}>نوع تراکنش</th>
            <th>شماره سفارش</th>
          </tr>
        </thead>
        <tbody>
          {userTransactions.map((transaction, index) => (
            <tr key={transaction.id}>
              <td>{new Date(transaction.createdAt).toLocaleString("FA-IR")}</td>
              <td>{sp(transaction.amount)}</td>
              <td className={styles.type}>
                {transaction.type === "Purchase"
                  ? "ثبت نام در تور گردشگری"
                  : "در حال پیگیری"}
              </td>
              <td>
                <p>سفارش</p>
                <p>{index + 1}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsTable;
