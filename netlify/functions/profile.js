import { db } from '../../db/index.js';
import { profile } from '../../db/schema.js';
import { json } from './_shared/helpers.js';

function toClient(row) {
  return {
    personOneName:          row.personOneName,
    personTwoName:          row.personTwoName,
    currency:               row.currency,
    personOneMonthlyIncome: row.personOneMonthlyIncome ?? '0',
    personTwoMonthlyIncome: row.personTwoMonthlyIncome ?? '0',
    monthCycleDay:          row.monthCycleDay ?? 1,
  };
}

export default async (req) => {
  if (req.method === 'GET') {
    const rows = await db.select().from(profile).limit(1);
    if (!rows.length) return json({ error: 'Profile not found' }, 404);
    return json(toClient(rows[0]));
  }

  if (req.method === 'PUT') {
    const body = await req.json();
    const existing = await db.select().from(profile).limit(1);

    if (existing.length === 0) {
      await db.insert(profile).values({ id: 1, ...body, updatedAt: new Date() });
    } else {
      const { id: _id, ...rest } = body;
      await db.update(profile).set({ ...rest, updatedAt: new Date() });
    }

    const updated = await db.select().from(profile).limit(1);
    return json(toClient(updated[0]));
  }

  return json({ error: 'Method not allowed' }, 405);
};

export const config = { path: '/api/profile' };
