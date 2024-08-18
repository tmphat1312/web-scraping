import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const voice_actors = sqliteTable('voice_actors', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull().unique(),
  description: text('description').notNull(),
});
