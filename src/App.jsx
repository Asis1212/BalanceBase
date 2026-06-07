import { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

function App() {
  const [pageItem, setPageItem] = useState("dashboard");
  const [selectedMonth, setSelectedMonth] = useState(
    new Intl.DateTimeFormat("he-IL", { month: "long", year: "numeric" }).format(new Date())
  );
  const [toast, setToast] = useState(null);
  const [cards, setCards] = useState([
    { id: "income", label: "הכנסות", val: 0, color: "#a8f5c8", icon: "📈" },
    { id: "expense", label: "הוצאות", val: 0, color: "#ffc4b0", icon: "📉" },
    { id: "balance", label: "מאזן", val: 0, color: "#a8f5c8", icon: "✨" },
  ]);

  const updateCardsValues = (type, amount) => {
    setCards((prev) => {
      const updated = prev.map((card) =>
        card.id === type ? { ...card, val: card.val + amount } : card
      );

      const income = updated.find((card) => card.id === "income").val;
      const expense = updated.find((card) => card.id === "expense").val;
      const balance = income - expense;

      return updated.map((card) =>
        card.id === "balance"
          ? {
              ...card,
              val: balance,
              color: balance >= 0 ? "#a8f5c8" : "#ffc4b0",
              icon: balance >= 0 ? "✨" : "⚠️",
            }
          : card
      );
    });
  };

  return (
    <>
      {/* Toast */}
      {toast && (
        <ToastMessage type={toast.type}>
          {toast.msg}
        </ToastMessage>
      )}

      {/* Header */}
      <Header cards={cards} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />

      {/* Body */}
      <Body
        activePage={pageItem}
        setActivityPage={setPageItem}
        toast={toast}
        setToast={setToast}
        updateCardsValues={updateCardsValues}
        selectedMonth={selectedMonth}
      />

      {/* Navbar */}
      <Navbar activePage={pageItem} onPageChange={setPageItem} />
    </>
  );
}

export default App;

const ToastMessage = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({type}) => type === "error" ? "#e74c3c" : "#27ae60"};
  color: white;
  padding: 10px 24px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  z-index: 1000;
  animation: fadeIn 0.2s ease;
`;
