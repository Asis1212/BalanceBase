async function request(path, options = {}) {
  const res = await fetch(path, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`API error ${res.status}: ${path}`);
  return res.json();
}

export const api = {
  getProfile:  ()     => request('/api/profile'),
  saveProfile: (data) => request('/api/profile', { method: 'PUT', body: JSON.stringify(data) }),

  getCategories:  ()    => request('/api/categories'),
  addCategory:    (cat) => request('/api/categories',        { method: 'POST',   body: JSON.stringify(cat) }),
  updateCategory: (cat) => request(`/api/categories/${cat.id}`, { method: 'PUT', body: JSON.stringify(cat) }),
  deleteCategory: (id)  => request(`/api/categories/${id}`,  { method: 'DELETE' }),

  getBudgets:  ()     => request('/api/budgets'),
  saveBudgets: (data) => request('/api/budgets', { method: 'PUT', body: JSON.stringify(data) }),

  getTransactions:   ()   => request('/api/transactions'),
  addTransaction:    (tx) => request('/api/transactions',        { method: 'POST',   body: JSON.stringify(tx) }),
  updateTransaction: (tx) => request(`/api/transactions/${tx.id}`, { method: 'PUT', body: JSON.stringify(tx) }),
  deleteTransaction: (id) => request(`/api/transactions/${id}`,  { method: 'DELETE' }),

  getRecurring:    ()  => request('/api/recurring'),
  addRecurring:    (t) => request('/api/recurring',        { method: 'POST',   body: JSON.stringify(t) }),
  updateRecurring: (t) => request(`/api/recurring/${t.id}`, { method: 'PUT',   body: JSON.stringify(t) }),
  deleteRecurring: (id) => request(`/api/recurring/${id}`, { method: 'DELETE' }),
};
