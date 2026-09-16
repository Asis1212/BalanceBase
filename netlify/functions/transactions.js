import { db } from '../../../db/index.js';
import { transactions } from '../../../db/schema.js';
import { eq } from 'drizzle-orm';
import { json } from './_shared/helpers.js';

function toClient(row) {
  return {
    id:            row.id,
    type:          row.type,
    amount:        parseFloat(row.amount),
    category:      row.categoryId,
    date:          row.date,
    description:   row.description,
    person:        row.person,
    paymentMethod: row.paymentMethod,
    recurring:     row.recurring,
  };
}

export default async (req) => {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();
  const isCollection = url.pathname === '/api/transactions';

  if (req.method === 'GET') {
    const rows = await db.select().from(transactions).orderBy(transactions.date);
    return json(rows.map(toClient));
  }

  if (req.method === 'POST') {
    const body = await req.json();
    await db.insert(transactions).values({
      id:            body.id,
      type:          body.type,
      amount:        String(body.amount),
      categoryId:    body.category,
      date:          body.date,
      description:   body.description ?? '',
      person:        body.person ?? null,
      paymentMethod: body.paymentMethod ?? '',
      recurring:     body.recurring ?? false,
      createdAt:     new Date(),
    });
    return json(toClient({ ...body, categoryId: body.category, amount: String(body.amount) }), 201);
  }

  if (req.method === 'PUT' && !isCollection) {
    const body = await req.json();
    await db.update(transactions).set({
      type:          body.type,
      amount:        String(body.amount),
      categoryId:    body.category,
      date:          body.date,
      description:   body.description ?? '',
      person:        body.person ?? null,
      paymentMethod: body.paymentMethod ?? '',
      recurring:     body.recurring ?? false,
    }).where(eq(transactions.id, id));
    return json(toClient({ ...body, categoryId: body.category }));
  }

  if (req.method === 'DELETE' && !isCollection) {
    await db.delete(transactions).where(eq(transactions.id, id));
    return json({ ok: true });
  }

  return json({ error: 'Method not allowed' }, 405);
};

export const config = { path: '/api/transactions/:id?' };
