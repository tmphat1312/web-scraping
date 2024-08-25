import { InferSelectModel, eq, inArray } from 'drizzle-orm';

import { db } from '../client';
import { vocabulary } from '../schemas/vocabulary';

export type Vocabulary = InferSelectModel<typeof vocabulary>;

export async function getVocabularyByCharacter(character: string) {
  return db
    .select({ id: vocabulary.id })
    .from(vocabulary)
    .where(eq(vocabulary.character, character));
}

export async function getMultipleVocabularyByCharacter(characters: string[]) {
  return db
    .select({ id: vocabulary.id })
    .from(vocabulary)
    .where(inArray(vocabulary.character, characters));
}
