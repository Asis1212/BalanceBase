import { db } from '../../db/index.js';
import { categories } from '../../db/schema.js';
import { eq } from 'drizzle-orm';
import { json } from './_shared/helpers.js';

export default async (req) => {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();
  const isCollection = url.pathname === '/api/categories';

  if (req.method === 'GET') {
    const rows = await db.select().from(categories).orderBy(categories.sortOrder);
    return json(rows);
  }

  if (req.method === 'POST') {
    const body = await req.json();
    await db.insert(categories).values(body);
    return json(body, 201);
  }

  if (req.method === 'PUT' && !isCollection) {
    const body = await req.json();
    const { id: _id, ...rest } = body;
    await db.update(categories).set(rest).where(eq(categories.id, id));
    return json({ ...rest, id });
  }

  if (req.method === 'DELETE' && !isCollection) {
    await db.delete(categories).where(eq(categories.id, id));
    return json({ ok: true });
  }

  return json({ error: 'Method not allowed' }, 405);
};

export const config = { path: '/api/categories/:id?' };
