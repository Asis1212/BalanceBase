import { useState } from "react";
import styled from "styled-components";

import LabelField from "../components/LabelField";
import InputField from "../components/InputField";

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

function Dashboard({setActivityPage, toast, setToast, addTransaction, updateCardsValues, editTx, replaceTransaction}) {
  const isEdit = !!editTx;
  const [active, setActive] = useState("all");
  const [formData, setFormData] = useState(
    isEdit
      ? { type: editTx.type, date: editTx.date, amount: editTx.amount, category: editTx.category, person: editTx.person, description: editTx.description || "" }
      : { type: "expense", date: new Date().toISOString().slice(0, 10) }
  );
  const [expenses, setExpenses] = useState([]);

  const clickPartitionButtonHandler = (name) => {
    setActive(name);
  };

  const changeFormType = (type) => {
    setFormData({ type: type.val, date: new Date().toISOString().slice(0, 10)});
  };

  const handleAdd = () => {
    const amount = parseFloat(formData.amount);
    const person = formData.person;
    if (!amount || amount <= 0) {
      showToast("הכנס סכום תקין", "error");
      return;
    }
    if (!person) {
      showToast("יש לבחור למי שייכת הפעולה", "error");
      return;
    }

    if (isEdit) {
      replaceTransaction({ ...editTx, ...formData });
      showToast("✓ עודכן בהצלחה!");
      setActivityPage("history");
    } else {
      addTransaction({ id: crypto.randomUUID(), ...formData });
      updateCardsValues(formData.type, Number(formData.amount));
      showToast("✓ נוסף בהצלחה!");
      setActivityPage("dashboard");
    }
  }

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <TransactionContainer>
      <TransactionForm>
        <TransactionFormHeaderWrapper>
          <span className="transaction-form-header">{isEdit ? "עריכת עסקה" : "הוספת עסקה"}</span>
        </TransactionFormHeaderWrapper>

        {/* Type toggle */}
        <ToggleButtonContainer>
          {[
            { val: "expense", label: "הוצאה 📉" },
            { val: "income", label: "הכנסה 📈" },
          ].map((formType) => (
            <button
              className="form-type-button"
              key={formType.val}
              style={{
                background:
                  formData.type === formType.val
                    ? formType.val === "expense"
                      ? "#d4500a"
                      : "#27ae60"
                    : "transparent",
                color: formData.type === formType.val ? "white" : "#888",
                transition: "all 0.2s",
              }}
              onClick={() => changeFormType(formType)}
            >
              {formType.label}
            </button>
          ))}
        </ToggleButtonContainer>

        {/* Amount */}
        <FieldContainer>
          <LabelField labelText={"סכום (₪)"} />
          <InputField
            type={"number"}
            placeholder={"0"}
            fontSize={"20px"}
            value={formData.amount ?? ""}
            onChange={(e) =>
              setFormData((f) => ({ ...f, amount: e.target.value }))
            }
          />
        </FieldContainer>

        {/* Category */}
        <FieldContainer>
          <LabelField labelText={"קטגוריה"} />
          <CategoryWrapper>
            {CATEGORIES[formData.type].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFormData((f) => ({ ...f, category: cat.id }))}
                className="category-button"
                style={{
                  borderColor:
                    formData.category === cat.id ? "#d4500a" : "#f0e8e0",
                  background:
                    formData.category === cat.id ? "#fff5f0" : "white",
                  fontWeight: formData.category === cat.id ? 700 : 400,
                }}
              >
                <span className="category-icon">{cat.emoji}</span> {cat.label}
              </button>
            ))}
          </CategoryWrapper>
        </FieldContainer>

        {/* Person */}
        <FieldContainer>
          <LabelField labelText={"של מי?"} />
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { val: "personOne", label: "🙋🏽 אלעד" },
              { val: "personTwo", label: "🙋🏽‍♀️ נויה" },
              { val: "both", label: "👫 שנינו" },
            ].map((p) => (
              <button
                key={p.val}
                onClick={() => setFormData((f) => ({ ...f, person: p.val }))}
                style={{
                  flex: 1,
                  padding: "8px 4px",
                  border: "2px solid",
                  borderColor:
                    formData.person === p.val ? "#d4500a" : "#f0e8e0",
                  borderRadius: 12,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  background: formData.person === p.val ? "#fff5f0" : "white",
                  color: "#2d2d2d",
                  fontSize: 13,
                  fontWeight: formData.person === p.val ? 700 : 400,
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </FieldContainer>

        {/* Description */}
        <FieldContainer>
          <LabelField labelText={"תיאור (אופציונלי)"} />
          <InputField
            type={"text"}
            placeholder={"לדוגמה: סופר אלפא..."}
            value={formData.description ?? ""}
            onChange={(e) =>
              setFormData((f) => ({ ...f, description: e.target.value }))
            }
          />
        </FieldContainer>

        {/* Date */}
        <FieldContainer>
          <LabelField labelText={"תאריך"} />
          <InputField
            type={"date"}
            value={`${formData.date}`}
            fontSize={"14px"}
            onChange={(e) =>
              setFormData((f) => ({ ...f, date: e.target.value }))
            }
          />
        </FieldContainer>

        <AddTranscationButton onClick={handleAdd}>
          {isEdit ? "שמור שינויים ✓" : "הוסף עסקה ✓"}
        </AddTranscationButton>
      </TransactionForm>
    </TransactionContainer>
  );
}

export default Dashboard;

const TransactionContainer = styled.div`
  padding: 16px 20px;
`;

const TransactionForm = styled.div`
  background: white;
  border-radius: 20px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 20px;
`;

const TransactionFormHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  .transaction-form-header {
    font-weight: 700;
    font-size: 18px;
    color: rgb(45, 45, 45);
  }
`;

const ToggleButtonContainer = styled.div`
  display: flex;
  background: #f5f0ea;
  border-radius: 14px;
  padding: 4px;
  margin-bottom: 16px;

  .form-type-button {
    flex: 1;
    padding: 10px 0;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.2s;
  }
`;

const FieldContainer = styled.div`
  margin-bottom: 14px;
`;

const CategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  .category-button {
    padding: 10px 12px;
    border: 2px solid;
    border-radius: 12px;
    cursor: pointer;
    font-family: inherit;
    color: #2d2d2d;
    font-size: 13px;
    text-align: right;
    display: flex;
    align-items: center;
    gap: 8px;

    .category-icon {
      font-size: 18px;
    }
  }
`;

const AddTranscationButton = styled.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #d4500a, #e8722a);
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  box-shadow: 0px 4px 16px rgba(212,80,10,0.4);
`;
