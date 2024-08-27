import { kanji, vocabulary } from '@/data/schemas';
import { inArray } from 'drizzle-orm';

import { db } from './db';

export type SelectVoca = typeof vocabulary.$inferSelect;
export type SelectKanji = typeof kanji.$inferSelect;

export async function getVocabularyByCharacters(
  characters: Array<SelectVoca['character']>,
) {
  return db
    .select({
      id: vocabulary.id,
    })
    .from(vocabulary)
    .where(inArray(vocabulary.character, characters));
}

export async function getKanjiByCharacters(
  characters: Array<SelectKanji['character']>,
) {
  return db
    .select({
      id: kanji.id,
    })
    .from(kanji)
    .where(inArray(kanji.character, characters));
}
