import { db } from '../../db/index.js';
import { budgets } from '../../db/schema.js';

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export default async (req) => {
  if (req.method === 'GET') {
    const rows = await db.select().from(budgets);
    const result = {};
    for (const row of rows) result[row.categoryId] = parseFloat(row.amount);
    return json(result);
  }

  if (req.method === 'PUT') {
    const body = await req.json();
    for (const [categoryId, amount] of Object.entries(body)) {
      await db.insert(budgets).values({
        categoryId,
        amount:    String(amount),
        updatedAt: new Date(),
      }).onConflictDoUpdate({
        target: budgets.categoryId,
        set: { amount: String(amount), updatedAt: new Date() },
      });
    }
    return json(body);
  }

  return json({ error: 'Method not allowed' }, 405);
};

export const config = { path: '/api/budgets' };
