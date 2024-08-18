import {
  integer,
  primaryKey,
  sqliteTable,
  text,
} from 'drizzle-orm/sqlite-core';

import { vocabulary } from './vocabulary';
import { voice_actors } from './voice_actors';

export const vocabulary_readings = sqliteTable(
  'vocabulary_readings',
  {
    vocabulary_id: integer('vocabulary_id').references(() => vocabulary.id),
    reading_number: integer('reading_number').notNull(),
    reading: text('reading').notNull(),
    actor_id: integer('actor_id').references(() => voice_actors.id),
    sources: text('sources').notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.vocabulary_id, table.reading_number] }),
  }),
);
