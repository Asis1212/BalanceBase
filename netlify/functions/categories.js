import { db } from '../../db/index.js';
import { categories } from '../../db/schema.js';
import { eq } from 'drizzle-orm';

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function toClient(row) {
  return {
    id:        row.id,
    label:     row.label,
    emoji:     row.emoji,
    type:      row.type,
    isDefault: row.isDefault,
    sortOrder: row.sortOrder,
  };
}

export default async (req, context) => {
  if (req.method === 'GET') {
    const rows = await db.select().from(categories).orderBy(categories.sortOrder);
    return json(rows.map(toClient));
  }

  if (req.method === 'POST') {
    const body = await req.json();
    await db.insert(categories).values({
      id:        body.id,
      label:     body.label,
      emoji:     body.emoji,
      type:      body.type,
      isDefault: body.isDefault ?? false,
      sortOrder: body.sortOrder ?? 99,
    }).onConflictDoUpdate({
      target: categories.id,
      set: { label: body.label, emoji: body.emoji, type: body.type },
    });
    return json(toClient(body), 201);
  }

  const id = context?.params?.id ?? new URL(req.url).pathname.split('/').pop();

  if (req.method === 'PUT') {
    const body = await req.json();
    await db.update(categories).set({
      label: body.label,
      emoji: body.emoji,
      type:  body.type,
    }).where(eq(categories.id, id));
    return json({ ...body, id });
  }

  if (req.method === 'DELETE') {
    await db.delete(categories).where(eq(categories.id, id));
    return json({ ok: true });
  }

  return json({ error: 'Method not allowed' }, 405);
};

export const config = { path: '/api/categories/:id?' };
