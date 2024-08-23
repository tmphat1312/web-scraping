import { InferInsertModel } from 'drizzle-orm';

import { db } from '../client';
import { kanji_radical_compositions } from '../schemas/kanji_radical_compositions';

export type KanjiRadicalComposition = InferInsertModel<
  typeof kanji_radical_compositions
>;

export async function insertKanjiRadicalCompositions(
  data: KanjiRadicalComposition[],
) {
  return db
    .insert(kanji_radical_compositions)
    .values(data)
    .onConflictDoNothing();
}
