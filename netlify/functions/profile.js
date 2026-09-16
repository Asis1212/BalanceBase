import { db } from '../../db/index.js';
import { profile } from '../../db/schema.js';

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function toClient(row) {
  return {
    personOneName:          row.person_one_name,
    personTwoName:          row.person_two_name,
    currency:               row.currency,
    personOneMonthlyIncome: row.person_one_monthly_income ?? '0',
    personTwoMonthlyIncome: row.person_two_monthly_income ?? '0',
    monthCycleDay:          row.month_cycle_day ?? 1,
  };
}

export default async (req) => {
  if (req.method === 'GET') {
    const rows = await db.select().from(profile).limit(1);
    if (!rows.length) return json({ error: 'Not found' }, 404);
    return json(toClient(rows[0]));
  }

  if (req.method === 'PUT') {
    const body = await req.json();
    await db.insert(profile).values({
      id:                       1,
      person_one_name:          body.personOneName,
      person_two_name:          body.personTwoName,
      currency:                 body.currency,
      person_one_monthly_income: String(body.personOneMonthlyIncome ?? 0),
      person_two_monthly_income: String(body.personTwoMonthlyIncome ?? 0),
      month_cycle_day:          body.monthCycleDay ?? 1,
      updated_at:               new Date(),
    }).onConflictDoUpdate({
      target: profile.id,
      set: {
        person_one_name:           body.personOneName,
        person_two_name:           body.personTwoName,
        currency:                  body.currency,
        person_one_monthly_income: String(body.personOneMonthlyIncome ?? 0),
        person_two_monthly_income: String(body.personTwoMonthlyIncome ?? 0),
        month_cycle_day:           body.monthCycleDay ?? 1,
        updated_at:                new Date(),
      },
    });
    const rows = await db.select().from(profile).limit(1);
    return json(toClient(rows[0]));
  }

  return json({ error: 'Method not allowed' }, 405);
};

export const config = { path: '/api/profile' };
