import { InferInsertModel } from 'drizzle-orm';

import { db } from '../client';
import { kanji } from '../schemas/kanji';

export type Kanji = InferInsertModel<typeof kanji>;

export async function insertKanji(data: Kanji[]) {
  return db
    .insert(kanji)
    .values(data)
    .returning({
      id: kanji.id,
    })
    .onConflictDoNothing();
}

export async function truncateKanji() {
  return db.delete(kanji);
}
