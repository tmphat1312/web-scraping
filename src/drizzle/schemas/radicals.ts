import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const radicals = sqliteTable('radicals', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  level: integer('level').notNull(),
  character: text('character').notNull().unique(),
  primary_meaning: text('primary_meaning').notNull().unique(),
  alternative_meanings: text('alternative_meanings'),
  mnemonic: text('mnemonic').notNull(),
});
