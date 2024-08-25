import { InferSelectModel, eq } from 'drizzle-orm';

import { db } from '../client';
import { kanji } from '../schemas/kanji';

export type Kanji = InferSelectModel<typeof kanji>;

export async function getKanjiByCharacter(character: string) {
  return db
    .select({ id: kanji.id })
    .from(kanji)
    .where(eq(kanji.character, character));
}
