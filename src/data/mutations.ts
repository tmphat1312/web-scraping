import { db } from './db';
import {
  commonUsagePatterns,
  kanji,
  kanjiRadicalCompositions,
  levels,
  radicals,
  visuallySimilarKanji,
  vocaKanjiCompositions,
  vocabulary,
} from './schemas';

export type InsertLevel = typeof levels.$inferInsert;
export type InsertRadical = typeof radicals.$inferInsert;
export type InsertKanji = typeof kanji.$inferInsert;
export type InsertKanjiRadicalComposition =
  typeof kanjiRadicalCompositions.$inferInsert;
export type InsertVoca = typeof vocabulary.$inferInsert;
export type InsertVocaKanjiComposition =
  typeof vocaKanjiCompositions.$inferInsert;
export type InsertCommonUsagePattern = typeof commonUsagePatterns.$inferInsert;
export type InsertVisuallySimilarKanji =
  typeof visuallySimilarKanji.$inferInsert;

export async function insertLevels(data: InsertLevel[]) {
  if (data.length === 0) return;
  await db.insert(levels).values(data);
}

export async function insertRadicals(data: InsertRadical[]) {
  return db.insert(radicals).values(data).returning({
    id: radicals.id,
  });
}

export async function insertKanji(data: InsertKanji[]) {
  return db.insert(kanji).values(data).returning({
    id: vocabulary.id,
  });
}

export async function insertVocabulary(data: InsertVoca[]) {
  return db.insert(vocabulary).values(data).returning({
    id: vocabulary.id,
  });
}

export async function insertCommonUsagePatterns(
  data: InsertCommonUsagePattern[],
) {
  await db.insert(commonUsagePatterns).values(data);
}

export async function insertVocaKanjiCompositions(
  data: InsertVocaKanjiComposition[],
) {
  await db.insert(vocaKanjiCompositions).values(data);
}

export async function insertKanjiRadicalCompositions(
  data: InsertKanjiRadicalComposition[],
) {
  await db.insert(kanjiRadicalCompositions).values(data);
}

export async function insertVisuallySimilarKanji(
  data: InsertVisuallySimilarKanji[],
) {
  await db.insert(visuallySimilarKanji).values(data);
}
