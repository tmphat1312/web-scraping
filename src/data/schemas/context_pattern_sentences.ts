import {
  integer,
  primaryKey,
  sqliteTable,
  text,
} from 'drizzle-orm/sqlite-core';

import { context_patterns } from './context_patterns';
import { vocabulary } from './vocabulary';

export const context_pattern_sentences = sqliteTable(
  'context_pattern_sentences',
  {
    vocabulary_id: integer('vocabulary_id').references(() => vocabulary.id),
    pattern_number: integer('pattern_number').references(
      () => context_patterns.pattern_number,
    ),
    pattern_sentence_number: integer('pattern_sentence_number').notNull(),
    jp_sentence: text('jp_sentence').notNull(),
    en_sentence: text('en_sentence').notNull(),
  },
  (table) => ({
    pk: primaryKey({
      columns: [
        table.vocabulary_id,
        table.pattern_number,
        table.pattern_sentence_number,
      ],
    }),
  }),
);
