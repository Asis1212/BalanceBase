import { useState } from "react";
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

function Dashboard({transactions, setActivityPage}) {
  const [active, setActive] = useState("both");

  const getCatInfo = (type, categoryId) => {
    const list = CATEGORIES[type] ?? [];
    return list.find((c) => c.id === categoryId) ?? { emoji: "📦", label: categoryId };
  };
  
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("he-IL", { style: "currency", currency: "ILS", maximumFractionDigits: 0 }).format(amount);

  const filteredTransactions =
    active === "both"
      ? transactions
      : transactions.filter((tx) => tx.person === active || tx.person === "both");

  const expenseByCategory = CATEGORIES.expense
    .map((cat) => ({
      ...cat,
      total: filteredTransactions
        .filter((tx) => tx.type === "expense" && tx.category === cat.id)
        .reduce((sum, tx) => sum + Number(tx.amount), 0),
    }))
    .filter((cat) => cat.total > 0);

  const totalExpense = expenseByCategory.reduce((sum, cat) => sum + cat.total, 0);

  return (
    <div>
      <PartitionWrapper>
        <SectionBtn
          className={`${active === "both" ? "clicked" : ""}`}
          onClick={() => setActive("both")}
        >
          ביחד ❤️
        </SectionBtn>
        <SectionBtn
          className={`${active === "personOne" ? "clicked" : ""}`}
          onClick={() => setActive("personOne")}
        >
          אלעד 🙋🏽
        </SectionBtn>
        <SectionBtn
          className={`${active === "personTwo" ? "clicked" : ""}`}
          onClick={() => setActive("personTwo")}
        >
          נויה 🙋🏽‍♀️
        </SectionBtn>
      </PartitionWrapper>

      {expenseByCategory.length > 0 && (
        <CategoryBreakdownWrapper>
          <CategoryBreakdownCard>
            <CategoryBreakdownHeader>פירוט הוצאות לפי קטגוריה</CategoryBreakdownHeader>
            {expenseByCategory.map((cat) => (
              <CategoryRow key={cat.id}>
                <CategoryRowLabel>
                  <CategoryLabel>{cat.emoji} {cat.label}</CategoryLabel>
                  <CategoryAmount>{formatCurrency(cat.total)}</CategoryAmount>
                </CategoryRowLabel>
                <ProgressBarBg>
                  <ProgressBarFill style={{ width: `${Math.min(100, (cat.total / totalExpense) * 100)}%` }} />
                </ProgressBarBg>
              </CategoryRow>
            ))}
          </CategoryBreakdownCard>
        </CategoryBreakdownWrapper>
      )}

      <ElaborationBillingWrapper>
        <ElaborationBilling>
          <ElaborationBillingHeaderWrapper>
            <div className="elaboration-billings-header">עסקאות אחרונות</div>
            {transactions.length > 0 && (
              <ShowAllButton onClick={() => setActivityPage("history")}>הכל →</ShowAllButton>
            )}
          </ElaborationBillingHeaderWrapper>

          <ElaborationBillingDataWrapper>
            
            {!filteredTransactions.length ? (
              <EmptyContent>
                <span className="no-expenses-icon">🌟</span>
                <span>אין עסקאות</span>
              </EmptyContent>
            ) : (
              filteredTransactions.slice(0, 5).map((tx) => {
                const cat = getCatInfo(tx.type, tx.category);
                return (
                  <TransactionRow key={tx.id}>
                    <TransactionIcon $type={tx.type}>{cat.emoji}</TransactionIcon>
                    <TransactionInfo>
                      <TransactionTitle>{cat.label}</TransactionTitle>
                      {tx.description && <TransactionDescription>{tx.description}</TransactionDescription>}
                      <TransactionMeta>
                        {tx.date} · {tx.person === "both" ? "שנינו" : tx.person === "personOne" ? "אלעד" : "נויה"}
                      </TransactionMeta>
                    </TransactionInfo>
                    <TransactionAmount $type={tx.type}>
                      {tx.type === "income" ? "+" : "-"}{formatCurrency(tx.amount)}
                    </TransactionAmount>
                  </TransactionRow>
                );
              })
            )}
            
          </ElaborationBillingDataWrapper>
        </ElaborationBilling>
      </ElaborationBillingWrapper>
    </div>
  );
}

export default Dashboard;

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

const ElaborationBillingWrapper = styled.div`
  padding: 16px 20px;
`;

const ElaborationBilling = styled.div`
  background: white;
  border-radius: 20px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 20px;
`;

const ElaborationBillingHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  .elaboration-billings-header {
    font-weight: 700;
    font-size: 18px;
    color: rgb(45, 45, 45);
  }
`;

const ElaborationBillingDataWrapper = styled.div`
  color: rgb(187, 187, 187);
`;

const EmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px 0;

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

const ShowAllButton = styled.button`
  background: none;
  border: none;
  color: #d4500a;
  font-size: 13px;
  cursor: pointer;
  font-family: inherit;
`;

const CategoryBreakdownWrapper = styled.div`
  padding: 0 20px 16px;
`;

const CategoryBreakdownCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
`;

const CategoryBreakdownHeader = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 12px;
  color: #2d2d2d;
`;

const CategoryRow = styled.div`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryRowLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 13px;
`;

const CategoryLabel = styled.span`
  color: #555;
`;

const CategoryAmount = styled.span`
  font-weight: 600;
  color: #d4500a;
`;

const ProgressBarBg = styled.div`
  background: #f0e8e0;
  border-radius: 8px;
  height: 6px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #d4500a, #e8722a);
  border-radius: 8px;
  transition: width 0.5s ease;
`;
