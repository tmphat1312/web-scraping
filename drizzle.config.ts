import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  dbCredentials: {
    url: './bin/db.sqlite',
  },
  schema: './src/drizzle/schemas/*.ts',
  out: './migrations',
  verbose: true,
  strict: true,
});
