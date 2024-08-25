import { integer, primaryKey, sqliteTable } from 'drizzle-orm/sqlite-core';

import { kanji } from './kanji';
import { vocabulary } from './vocabulary';

export const vocabulary_kanji_compositions = sqliteTable(
  'vocabulary_kanji_compositions',
  {
    kanji_id: integer('kanji_id').references(() => kanji.id),
    vocabulary_id: integer('vocabulary_id').references(() => vocabulary.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.kanji_id, table.vocabulary_id] }),
  }),
);
