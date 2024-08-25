import { InferInsertModel } from 'drizzle-orm';

import { db } from '../client';
import { levels } from '../schemas/levels';

export type Level = InferInsertModel<typeof levels>;

export async function insertLevels(data: Level[]) {
  return db
    .insert(levels)
    .values(data)
    .returning({
      id: levels.id,
    })
    .onConflictDoNothing();
}

export async function truncateLevels() {
  return db.delete(levels);
}
