import { InferInsertModel } from 'drizzle-orm';

import { db } from '../client';
import { vocabulary_readings } from '../schemas/vocabulary_readings';

export type VocabularyReading = InferInsertModel<typeof vocabulary_readings>;

export async function insertVocabularyReadings(data: VocabularyReading[]) {
  return db.insert(vocabulary_readings).values(data).onConflictDoNothing();
}
