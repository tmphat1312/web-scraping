import { InferInsertModel } from 'drizzle-orm';

import { db } from '../client';
import { vocabulary } from '../schemas/vocabulary';

export type Vocabulary = InferInsertModel<typeof vocabulary>;

export async function insertVocabulary(data: Vocabulary[]) {
  return db
    .insert(vocabulary)
    .values(data)
    .returning({
      id: vocabulary.id,
    })
    .onConflictDoNothing();
}
