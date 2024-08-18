import {
  integer,
  primaryKey,
  sqliteTable,
  text,
} from 'drizzle-orm/sqlite-core';

import { vocabulary } from './vocabulary';

export const context_patterns = sqliteTable(
  'context_patterns',
  {
    vocabulary_id: integer('vocabulary_id').references(() => vocabulary.id),
    pattern_number: integer('pattern_number').notNull(),
    pattern: text('pattern').notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.vocabulary_id, table.pattern_number] }),
  }),
);
