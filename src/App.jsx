import { useState, useMemo, useEffect, useCallback } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { getCycleLabel, getCycleStartIso, isInCycle } from "./utils/monthUtils";
import { api } from "./utils/api";

function App() {
  const [pageItem, setPageItem] = useState("dashboard");
  const [toast, setToast]       = useState(null);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  const [profile,            setProfileState]    = useState(null);
  const [categories,         setCategoriesState] = useState([]);
  const [budgets,            setBudgetsState]    = useState({});
  const [transactions,       setTransactions]    = useState([]);
  const [recurringTemplates, setRecurring]       = useState([]);

  const [selectedMonth, setSelectedMonth] = useState(
    () => getCycleLabel(new Date().toISOString().slice(0, 10), 1)
  );

  const cycleDay = profile?.monthCycleDay ?? 1;

  // ── Bootstrap ───────────────────────────────────────────────────────────────
  useEffect(() => {
    Promise.all([
      api.getProfile(),
      api.getCategories(),
      api.getBudgets(),
      api.getTransactions(),
      api.getRecurring(),
    ]).then(([prof, cats, buds, txs, recs]) => {
      setProfileState(prof);
      setCategoriesState(cats ?? []);
      setBudgetsState(buds ?? {});
      setTransactions(txs ?? []);
      setRecurring(recs ?? []);
      if (prof?.monthCycleDay) {
        setSelectedMonth(getCycleLabel(new Date().toISOString().slice(0, 10), prof.monthCycleDay));
      }
      setLoading(false);
    }).catch(err => {
      setError(err.message);
      setLoading(false);
    });
  }, []);

  // ── Profile ─────────────────────────────────────────────────────────────────
  const handleSetProfile = useCallback((updater) => {
    setProfileState(prev => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      if (next.monthCycleDay !== prev?.monthCycleDay) {
        setSelectedMonth(getCycleLabel(new Date().toISOString().slice(0, 10), next.monthCycleDay ?? 1));
      }
      api.saveProfile(next).catch(console.error);
      return next;
    });
  }, []);

  // ── Categories ──────────────────────────────────────────────────────────────
  const handleSetCategories = useCallback((updater) => {
    setCategoriesState(prev => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      const added   = next.filter(c => !prev.find(p => p.id === c.id));
      const removed = prev.filter(p => !next.find(n => n.id === p.id));
      const changed = next.filter(c => {
        const old = prev.find(p => p.id === c.id);
        return old && (old.label !== c.label || old.emoji !== c.emoji || old.type !== c.type);
      });
      added.forEach(c => api.addCategory(c).catch(console.error));
      removed.forEach(c => api.deleteCategory(c.id).catch(console.error));
      changed.forEach(c => api.updateCategory(c).catch(console.error));
      return next;
    });
  }, []);

  // ── Budgets ─────────────────────────────────────────────────────────────────
  const handleSetBudgets = useCallback((updater) => {
    setBudgetsState(prev => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      api.saveBudgets(next).catch(console.error);
      return next;
    });
  }, []);

  // ── Transactions ────────────────────────────────────────────────────────────
  const addTransaction = useCallback((tx) => {
    setTransactions(prev => [tx, ...prev]);
    api.addTransaction(tx).catch(console.error);
  }, []);

  const replaceTransaction = useCallback((tx) => {
    setTransactions(prev => prev.map(t => t.id === tx.id ? tx : t));
    api.updateTransaction(tx).catch(console.error);
  }, []);

  const removeTransaction = useCallback((id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
    api.deleteTransaction(id).catch(console.error);
  }, []);

  const restoreTransaction = useCallback((tx) => {
    setTransactions(prev => [tx, ...prev.filter(t => t.id !== tx.id)]);
    api.addTransaction(tx).catch(console.error);
  }, []);

  // ── Recurring ───────────────────────────────────────────────────────────────
  const addRecurring = useCallback((t) => {
    setRecurring(prev => [...prev, t]);
    api.addRecurring(t).catch(console.error);
  }, []);

  const replaceRecurring = useCallback((t) => {
    setRecurring(prev => prev.map(r => r.id === t.id ? t : r));
    api.updateRecurring(t).catch(console.error);
  }, []);

  const removeRecurring = useCallback((id) => {
    setRecurring(prev => prev.filter(r => r.id !== id));
    api.deleteRecurring(id).catch(console.error);
  }, []);

  // ── Clear all (Profile page) ────────────────────────────────────────────────
  const clearAllData = useCallback(() => {
    transactions.forEach(tx => api.deleteTransaction(tx.id).catch(console.error));
    recurringTemplates.forEach(t => api.deleteRecurring(t.id).catch(console.error));
    setTransactions([]);
    setRecurring([]);
  }, [transactions, recurringTemplates]);

  // ── Visible transactions ────────────────────────────────────────────────────
  const visibleTransactions = useMemo(() => {
    const cycleStartIso = getCycleStartIso(selectedMonth, cycleDay);
    const virtual = recurringTemplates.map(t => ({
      ...t,
      id:                  `recurring-${t.id}-${selectedMonth}`,
      date:                cycleStartIso,
      _isRecurringVirtual: true,
      _templateId:         t.id,
    }));
    return [...virtual, ...transactions];
  }, [transactions, recurringTemplates, selectedMonth, cycleDay]);

  // ── Header cards ────────────────────────────────────────────────────────────
  const cards = useMemo(() => {
    const monthTx = visibleTransactions.filter(tx => isInCycle(tx.date, selectedMonth, cycleDay));
    const income  = monthTx.filter(tx => tx.type === "income") .reduce((s, tx) => s + Number(tx.amount), 0);
    const expense = monthTx.filter(tx => tx.type === "expense").reduce((s, tx) => s + Number(tx.amount), 0);
    const balance = income - expense;
    return [
      { id: "income",  label: "הכנסות", val: income,  color: "#22d3a5", icon: "📈" },
      { id: "expense", label: "הוצאות", val: expense, color: "#f472b6", icon: "📉" },
      { id: "balance", label: "מאזן",   val: balance, color: balance >= 0 ? "#22d3a5" : "#f472b6", icon: balance >= 0 ? "✨" : "⚠️" },
    ];
  }, [visibleTransactions, selectedMonth, cycleDay]);

  if (loading) {
    return (
      <AppShell>
        <LoadingScreen>
          <LoadingSpinner />
          <LoadingText>טוען...</LoadingText>
        </LoadingScreen>
      </AppShell>
    );
  }

  if (error) {
    return (
      <AppShell>
        <LoadingScreen>
          <LoadingText style={{ color: "#f472b6" }}>שגיאה: {error}</LoadingText>
        </LoadingScreen>
      </AppShell>
    );
  }

  return (
    <AppShell>
      {toast && <ToastMessage $type={toast.type}>{toast.msg}</ToastMessage>}
      {!["add","edit","add-recurring","edit-recurring"].includes(pageItem) && (
        <Header cards={cards} onProfileClick={() => setPageItem("profile")} />
      )}
      <ScrollArea>
        <Body
          activePage={pageItem}
          setActivityPage={setPageItem}
          toast={toast}
          setToast={setToast}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          cycleDay={cycleDay}
          budgets={budgets}
          setBudgets={handleSetBudgets}
          transactions={transactions}
          setTransactions={setTransactions}
          addTransaction={addTransaction}
          replaceTransaction={replaceTransaction}
          removeTransaction={removeTransaction}
          restoreTransaction={restoreTransaction}
          recurringTemplates={recurringTemplates}
          setRecurringTemplates={setRecurring}
          addRecurring={addRecurring}
          replaceRecurring={replaceRecurring}
          removeRecurring={removeRecurring}
          visibleTransactions={visibleTransactions}
          categories={categories}
          setCategories={handleSetCategories}
          profile={profile}
          setProfile={handleSetProfile}
          clearAllData={clearAllData}
        />
      </ScrollArea>
      <Navbar activePage={pageItem} onPageChange={setPageItem} />
    </AppShell>
  );
}

export default App;

const AppShell = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`;

const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
`;

const ToastMessage = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ $type }) => $type === "error"
    ? "linear-gradient(135deg, #f472b6, #e11d48)"
    : "linear-gradient(135deg, #22d3a5, #059669)"};
  color: white;
  padding: 11px 28px;
  border-radius: 24px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 1000;
  white-space: nowrap;
`;

const LoadingScreen = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: #0d1117;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid rgba(99,102,241,0.2);
  border-top-color: #6366f1;
  animation: spin 0.8s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`;

const LoadingText = styled.div`
  color: #4a5568;
  font-size: 14px;
  font-weight: 600;
`;
