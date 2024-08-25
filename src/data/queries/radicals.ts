import { InferSelectModel, eq } from 'drizzle-orm';

import { db } from '../client';
import { radicals } from '../schemas/radicals';

export type Radical = InferSelectModel<typeof radicals>;

export async function getEmptyRadical() {
  return db
    .select({
      id: radicals.id,
      name: radicals.primary_meaning,
    })
    .from(radicals)
    .where(eq(radicals.character, ''));
}
