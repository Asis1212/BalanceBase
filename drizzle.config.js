import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './netlify/functions/db/schema.js',
  out: 'netlify/database/migrations',
});
