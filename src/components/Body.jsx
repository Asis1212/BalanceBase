import { useState } from "react";
import styled from "styled-components";

import Dashboard from "../pages/Dashboard";
import TransactionForm from "../pages/TransactionForm";
import History from "../pages/History";

function Body({ activePage, setActivityPage, toast, setToast, updateCardsValues, selectedMonth }) {
  const [transactions, setTransactions] = useState([]);
  const [editTx, setEditTx] = useState(null);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [transaction, ...prev]);
  };

  const removeTransaction = (id) => {
    setTransactions((prev) => prev.filter((tx) => tx.id !== id));
  };

  const restoreTransaction = (tx) => {
    setTransactions((prev) => {
      const exists = prev.find((t) => t.id === tx.id);
      if (exists) return prev;
      return [tx, ...prev];
    });
  };

  const replaceTransaction = (updated) => {
    setTransactions((prev) => prev.map((tx) => tx.id === updated.id ? updated : tx));
  };

  const handleSetActivityPage = (value) => {
    if (value && typeof value === "object" && value.page === "edit") {
      setEditTx(value.tx);
      setActivityPage("edit");
    } else {
      setEditTx(null);
      setActivityPage(value);
    }
  };

  return (
    <BodyContainer>
      {activePage === "dashboard" && (
        <Dashboard
          transactions={transactions}
          setActivityPage={handleSetActivityPage}
        />
      )}

      {activePage === "add" && (
        <TransactionForm
          setActivityPage={handleSetActivityPage}
          toast={toast}
          setToast={setToast}
          updateCardsValues={updateCardsValues}
          addTransaction={addTransaction}
        />
      )}

      {activePage === "edit" && editTx && (
        <TransactionForm
          setActivityPage={handleSetActivityPage}
          toast={toast}
          setToast={setToast}
          updateCardsValues={updateCardsValues}
          editTx={editTx}
          replaceTransaction={replaceTransaction}
        />
      )}

      {activePage === "history" && (
        <History
          transactions={transactions}
          selectedMonth={selectedMonth}
          removeTransaction={removeTransaction}
          restoreTransaction={restoreTransaction}
          setActivityPage={handleSetActivityPage}
        />
      )}
    </BodyContainer>
  );
}

export default Body;

const BodyContainer = styled.div`
  position: relative;
`;
