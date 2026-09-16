import { db } from '../db/index.js';
import { profile } from '../db/schema.js';
import { json } from './_shared/helpers.js';

const DEFAULT_PROFILE = {
  personOneName:          'אלעד',
  personTwoName:          'נויה',
  currency:               'ILS',
  personOneMonthlyIncome: '0',
  personTwoMonthlyIncome: '0',
  monthCycleDay:          1,
};

export default async (req) => {
  if (req.method === 'GET') {
    const rows = await db.select().from(profile).limit(1);
    return json(rows[0] ?? DEFAULT_PROFILE);
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
    return json(updated[0]);
  }

  return json({ error: 'Method not allowed' }, 405);
};

export const config = { path: '/api/profile' };
