import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  dbCredentials: {
    url: './src/drizzle/bin/db.sqlite',
  },
  schema: './src/drizzle/schemas/*.ts',
  out: './src/migrations',
  verbose: true,
  strict: true,
});
