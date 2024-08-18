import { integer, primaryKey, sqliteTable } from 'drizzle-orm/sqlite-core';

import { kanji } from './kanji';

export const visually_similar_kanji = sqliteTable(
  'visually_similar_kanji',
  {
    kanji_src_id: integer('kanji_src_id').references(() => kanji.id),
    kanji_dst_id: integer('kanji_dst_id').references(() => kanji.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.kanji_src_id, table.kanji_dst_id] }),
  }),
);
