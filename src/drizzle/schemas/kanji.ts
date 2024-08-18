import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const kanji = sqliteTable('kanji', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  level: integer('level').notNull(),
  character: text('character').notNull().unique(),
  primary_meaning: text('primary_meaning').notNull(),
  alternative_meanings: text('alternative_meanings'),
  meaning_mnemonic: text('meaning_mnemonic').notNull(),
  meaning_hints: text('meaning_hints'),
  kunyomi_reading: text('kunyomi_reading'),
  onyomi_reading: text('onyomi_reading'),
  nanori_reading: text('nanori_reading'),
  reading_mnemonic: text('reading_mnemonic').notNull(),
  reading_hints: text('reading_hints'),
});
