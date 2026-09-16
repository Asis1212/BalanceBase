import { db } from '../../db/index.js';
import { transactions } from '../../db/schema.js';
import { eq } from 'drizzle-orm';

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function toClient(row) {
  return {
    id:               row.id,
    type:             row.type,
    amount:           parseFloat(row.amount),
    category:         row.categoryId,
    date:             row.date,
    description:      row.description,
    person:           row.person,
    paymentMethod:    row.paymentMethod,
    recurring:        row.recurring,
    installmentId:    row.installmentId    ?? null,
    installmentIndex: row.installmentIndex ?? null,
    installmentTotal: row.installmentTotal ?? null,
  };
}

export default async (req, context) => {
  if (req.method === 'GET') {
    const rows = await db.select().from(transactions).orderBy(transactions.date);
    return json(rows.map(toClient));
  }

  if (req.method === 'POST') {
    const body = await req.json();
    await db.insert(transactions).values({
      id:               body.id,
      type:             body.type,
      amount:           String(body.amount),
      categoryId:       body.category,
      date:             body.date,
      description:      body.description ?? '',
      person:           body.person ?? null,
      paymentMethod:    body.paymentMethod ?? '',
      recurring:        body.recurring ?? false,
      installmentId:    body.installmentId    ?? null,
      installmentIndex: body.installmentIndex ?? null,
      installmentTotal: body.installmentTotal ?? null,
      createdAt:        new Date(),
    }).onConflictDoUpdate({
      target: transactions.id,
      set: {
        type:             body.type,
        amount:           String(body.amount),
        categoryId:       body.category,
        date:             body.date,
        description:      body.description ?? '',
        person:           body.person ?? null,
        paymentMethod:    body.paymentMethod ?? '',
        recurring:        body.recurring ?? false,
        installmentId:    body.installmentId    ?? null,
        installmentIndex: body.installmentIndex ?? null,
        installmentTotal: body.installmentTotal ?? null,
      },
    });
    return json(toClient({ ...body, categoryId: body.category }), 201);
  }

  const id = context?.params?.id ?? new URL(req.url).pathname.split('/').pop();

  if (req.method === 'PUT') {
    const body = await req.json();
    await db.update(transactions).set({
      type:             body.type,
      amount:           String(body.amount),
      categoryId:       body.category,
      date:             body.date,
      description:      body.description ?? '',
      person:           body.person ?? null,
      paymentMethod:    body.paymentMethod ?? '',
      recurring:        body.recurring ?? false,
      installmentId:    body.installmentId    ?? null,
      installmentIndex: body.installmentIndex ?? null,
      installmentTotal: body.installmentTotal ?? null,
    }).where(eq(transactions.id, id));
    return json(toClient({ ...body, categoryId: body.category }));
  }

  if (req.method === 'DELETE') {
    await db.delete(transactions).where(eq(transactions.id, id));
    return json({ ok: true });
  }

  return json({ error: 'Method not allowed' }, 405);
};

export const config = { path: '/api/transactions/:id?' };
