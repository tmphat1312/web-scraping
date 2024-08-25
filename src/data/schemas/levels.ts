import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const levels = sqliteTable('levels', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  jp_name: text('jp_name').notNull().unique(),
  en_name: text('en_name').notNull().unique(),
  min_value: integer('min_value').notNull().unique(),
  max_value: integer('max_value').notNull().unique(),
});
