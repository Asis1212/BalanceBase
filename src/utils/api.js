const BASE = '/api';

async function request(method, path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : {},
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(`API ${method} ${path} → ${res.status}`);
  return res.json();
}

export const api = {
  // Profile
  getProfile:  ()       => request('GET',  '/profile'),
  saveProfile: (data)   => request('PUT',  '/profile', data),

  // Categories
  getCategories:    ()     => request('GET',    '/categories'),
  addCategory:      (cat)  => request('POST',   '/categories', cat),
  updateCategory:   (cat)  => request('PUT',    `/categories/${cat.id}`, cat),
  deleteCategory:   (id)   => request('DELETE', `/categories/${id}`),

  // Budgets
  getBudgets:  ()       => request('GET', '/budgets'),
  saveBudgets: (data)   => request('PUT', '/budgets', data),

  // Transactions
  getTransactions:    ()    => request('GET',    '/transactions'),
  addTransaction:     (tx)  => request('POST',   '/transactions', tx),
  updateTransaction:  (tx)  => request('PUT',    `/transactions/${tx.id}`, tx),
  deleteTransaction:  (id)  => request('DELETE', `/transactions/${id}`),

  // Recurring templates
  getRecurring:          ()    => request('GET',    '/recurring'),
  addRecurring:          (t)   => request('POST',   '/recurring', t),
  updateRecurring:       (t)   => request('PUT',    `/recurring/${t.id}`, t),
  deleteRecurring:       (id)  => request('DELETE', `/recurring/${id}`),
};
