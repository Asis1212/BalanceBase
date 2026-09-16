import { db } from '../../../db/index.js';
import { budgets } from '../../../db/schema.js';
import { json } from './_shared/helpers.js';

export default async (req) => {
  if (req.method === 'GET') {
    const rows = await db.select().from(budgets);
    // Return as { categoryId: amount } map
    const result = {};
    for (const row of rows) result[row.categoryId] = parseFloat(row.amount);
    return json(result);
  }

  if (req.method === 'PUT') {
    // Body: { categoryId: amount, ... }
    const body = await req.json();

    await db.delete(budgets);
    if (Object.keys(body).length > 0) {
      await db.insert(budgets).values(
        Object.entries(body).map(([categoryId, amount]) => ({
          categoryId,
          amount: String(amount),
          updatedAt: new Date(),
        }))
      );
    }
    return json(body);
  }

  return json({ error: 'Method not allowed' }, 405);
};

export const config = { path: '/api/budgets' };
