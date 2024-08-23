import { InferInsertModel, inArray } from 'drizzle-orm';

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

export async function getMultipleKanjiByCharacter(characters: string[]) {
  return db
    .select({ id: kanji.id })
    .from(kanji)
    .where(inArray(kanji.character, characters));
}
