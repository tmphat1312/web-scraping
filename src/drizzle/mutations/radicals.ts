import { InferInsertModel } from 'drizzle-orm';

import { db } from '../client';
import { radicals } from '../schemas/radicals';

export type Radical = InferInsertModel<typeof radicals>;

export async function insertRadicals(data: Radical[]) {
  return db
    .insert(radicals)
    .values(data)
    .returning({
      id: radicals.id,
    })
    .onConflictDoNothing();
}

export async function truncateRadicals() {
  return db.delete(radicals);
}
