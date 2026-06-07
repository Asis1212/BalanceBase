import { useState, useEffect } from "react";
import styled from "styled-components";

const CATEGORIES = {
  income: [
    { id: "salary", label: "משכורת", emoji: "💼" },
    { id: "present", label: "מתנה", emoji: "🎁" },
    { id: "other_in", label: "אחר", emoji: "➕" },
  ],
  expense: [
    { id: "food", label: "מזון וקניות", emoji: "🛒" },
    { id: "housing", label: "דיור ושכירות", emoji: "🏠" },
    { id: "transport", label: "דלק ותחבורה", emoji: "🚗" },
    { id: "education", label: "לימודים", emoji: "📚" },
    { id: "technology", label: "טכנולוגיה", emoji: "🤖" },
    { id: "entertainment", label: "בילויים", emoji: "🎉" },
    { id: "pharmacy", label: "פארם", emoji: "🏥" },
    { id: "health", label: "בריאות", emoji: "💊" },
    { id: "shopping", label: "שופינג", emoji: "🛍️" },
    { id: "subscription", label: "מנויים", emoji: "🔔" },
    { id: "gym", label: "חדר-כושר", emoji: "🏋" },
    { id: "events", label: "אירועים", emoji: "💍" },
    { id: "savings", label: "חיסכון", emoji: "🐷" },
    { id: "other_ex", label: "אחר", emoji: "📦" },
  ],
};

function History({ transactions, selectedMonth, removeTransaction, restoreTransaction, setActivityPage }) {
  const [active, setActive] = useState("both");
  const [undoItem, setUndoItem] = useState(null);
  const [undoTimer, setUndoTimer] = useState(null);

  const getCatInfo = (type, categoryId) => {
    const list = CATEGORIES[type] ?? [];
    return list.find((c) => c.id === categoryId) ?? { emoji: "📦", label: categoryId };
  };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("he-IL", { style: "currency", currency: "ILS", maximumFractionDigits: 0 }).format(amount);

  const monthFilteredTransactions = selectedMonth
    ? transactions.filter((tx) => {
        const txDate = new Date(tx.date);
        const txMonthLabel = new Intl.DateTimeFormat("he-IL", { month: "long", year: "numeric" }).format(txDate);
        return txMonthLabel === selectedMonth;
      })
    : transactions;

  const filteredTransactions =
    active === "both"
      ? monthFilteredTransactions
      : monthFilteredTransactions.filter((tx) => tx.person === active || tx.person === "both");

  const handleDelete = (tx) => {
    removeTransaction(tx.id);
    setUndoItem(tx);
    if (undoTimer) clearTimeout(undoTimer);
    const t = setTimeout(() => setUndoItem(null), 4000);
    setUndoTimer(t);
  };

  const handleUndo = () => {
    if (!undoItem) return;
    clearTimeout(undoTimer);
    restoreTransaction(undoItem);
    setUndoItem(null);
  };

  useEffect(() => () => { if (undoTimer) clearTimeout(undoTimer); }, []);

  return (
    <div>
      <PartitionWrapper>
        <SectionBtn className={active === "both" ? "clicked" : ""} onClick={() => setActive("both")}>ביחד ❤️</SectionBtn>
        <SectionBtn className={active === "personOne" ? "clicked" : ""} onClick={() => setActive("personOne")}>אלעד 🙋🏽</SectionBtn>
        <SectionBtn className={active === "personTwo" ? "clicked" : ""} onClick={() => setActive("personTwo")}>נויה 🙋🏽‍♀️</SectionBtn>
      </PartitionWrapper>

      <Wrapper>
        <Card>
          <CardHeader>
            <span>כל העסקאות</span>
            {selectedMonth && <MonthBadge>{selectedMonth}</MonthBadge>}
          </CardHeader>

          {!filteredTransactions.length ? (
            <EmptyContent>
              <span className="no-expenses-icon">🌟</span>
              <span>אין עסקאות</span>
            </EmptyContent>
          ) : (
            filteredTransactions.map((tx) => {
              const cat = getCatInfo(tx.type, tx.category);
              return (
                <TransactionRow key={tx.id}>
                  <TransactionIcon $type={tx.type}>{cat.emoji}</TransactionIcon>
                  <TransactionInfo onClick={() => setActivityPage({ page: "edit", tx })}>
                    <TransactionTitle>{cat.label}</TransactionTitle>
                    {tx.description && <TransactionDescription>{tx.description}</TransactionDescription>}
                    <TransactionMeta>
                      {tx.date} · {tx.person === "both" ? "שנינו" : tx.person === "personOne" ? "אלעד" : "נויה"}
                    </TransactionMeta>
                  </TransactionInfo>
                  <TransactionAmount $type={tx.type}>
                    {tx.type === "income" ? "+" : "-"}{formatCurrency(tx.amount)}
                  </TransactionAmount>
                  <DeleteBtn onClick={() => handleDelete(tx)}>🗑️</DeleteBtn>
                </TransactionRow>
              );
            })
          )}
        </Card>
      </Wrapper>

      {undoItem && (
        <UndoToast>
          <span>עסקה נמחקה</span>
          <UndoBtn onClick={handleUndo}>בטל</UndoBtn>
        </UndoToast>
      )}
    </div>
  );
}

export default History;

const PartitionWrapper = styled.div`
  margin-block: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const SectionBtn = styled.button`
  padding: 6px 14px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.7);
  color: rgb(85, 85, 85);
  font-weight: 400;
  box-shadow: none;
  transition: 0.2s;

  &.clicked {
    background: rgb(212, 80, 10) !important;
    color: white !important;
    font-weight: 700 !important;
    box-shadow: rgba(212, 80, 10, 0.3) 0px 4px 12px !important;
  }
`;

const Wrapper = styled.div`
  padding: 0 20px 16px;
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 20px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  color: rgb(45, 45, 45);
  margin-bottom: 12px;
`;

const MonthBadge = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #d4500a;
  background: #fef0ea;
  padding: 3px 10px;
  border-radius: 12px;
`;

const EmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px 0;
  color: rgb(187, 187, 187);

  .no-expenses-icon {
    font-size: 55px;
  }
`;

const TransactionRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f5f0ea;
  gap: 12px;

  &:last-child {
    border-bottom: none;
  }
`;

const TransactionIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: ${({ $type }) => $type === "income" ? "#e8f8f0" : "#fef0ea"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
`;

const TransactionInfo = styled.div`
  flex: 1;
  min-width: 0;
  cursor: pointer;
`;

const TransactionTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #2d2d2d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TransactionDescription = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #888;
  margin-top: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TransactionMeta = styled.div`
  font-size: 11px;
  color: #aaa;
  margin-top: 2px;
`;

const TransactionAmount = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: ${({ $type }) => $type === "income" ? "#27ae60" : "#d4500a"};
  flex-shrink: 0;
`;

const DeleteBtn = styled.button`
  background: #fff0ee;
  border: none;
  cursor: pointer;
  font-size: 15px;
  padding: 7px 9px;
  border-radius: 10px;
  flex-shrink: 0;
  transition: background 0.2s;

  &:hover {
    background: #ffd5cc;
  }
`;

const UndoToast = styled.div`
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  background: #2d2d2d;
  color: white;
  padding: 10px 16px;
  border-radius: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  z-index: 1000;
`;

const UndoBtn = styled.button`
  background: none;
  border: none;
  color: #e8722a;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  font-family: inherit;
  padding: 0;
`;
