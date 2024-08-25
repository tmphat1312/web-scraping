import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const vocabulary = sqliteTable('vocabulary', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  level: integer('level').notNull(),
  character: text('character').notNull(),
  primary_meaning: text('primary_meaning').notNull(),
  alternative_meanings: text('alternative_meanings'),
  word_types: text('word_types').notNull(),
  meaning_explanation: text('meaning_explanation').notNull(),
  reading_explanation: text('reading_explanation'),
});
