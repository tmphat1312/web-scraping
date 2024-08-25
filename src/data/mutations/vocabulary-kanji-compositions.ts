import { InferInsertModel } from 'drizzle-orm';

import { db } from '../client';
import { vocabulary_kanji_compositions } from '../schemas/vocabulary_kanji_compositions';

export type VocabularyKanjiComposition = InferInsertModel<
  typeof vocabulary_kanji_compositions
>;

export async function insertVocabularyKanjiCompositions(
  data: VocabularyKanjiComposition[],
) {
  return db
    .insert(vocabulary_kanji_compositions)
    .values(data)
    .onConflictDoNothing();
}
