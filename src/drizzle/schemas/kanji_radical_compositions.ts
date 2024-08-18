import { integer, primaryKey, sqliteTable } from 'drizzle-orm/sqlite-core';

import { kanji } from './kanji';
import { radicals } from './radicals';

export const kanji_radical_compositions = sqliteTable(
  'kanji_radical_compositions',
  {
    kanji_id: integer('kanji_id').references(() => kanji.id),
    radical_id: integer('radical_id').references(() => radicals.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.kanji_id, table.radical_id] }),
  }),
);
