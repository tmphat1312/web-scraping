import { InferInsertModel } from 'drizzle-orm';

import { db } from '../client';
import { visually_similar_kanji } from '../schemas/visually_similar_kanji';

export type VisuallySimilarKanji = InferInsertModel<
  typeof visually_similar_kanji
>;

export async function insertVisuallySimilarKanji(data: VisuallySimilarKanji[]) {
  await db.insert(visually_similar_kanji).values(data);
}
