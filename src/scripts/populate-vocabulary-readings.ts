import {
  VocabularyReading,
  insertVocabularyReadings,
} from '@/data/mutations/vocabulary-readings';
import { getVocabularyByCharacter } from '@/data/queries/vocabulary';
import { getVoiceActors } from '@/data/queries/voice-actors';
import { scrapeSlugs } from '@/scraping/slugs';
import { scrapeVocabularyReadings } from '@/scraping/vocabulary';
import { wait } from '@/utils/wait';
import ora from 'ora';

(async function populate() {
  const fromLevel = 1;
  const toLevel = 60;

  let voiceActors = await getVoiceActors();
  let voiceActorsMap = new Map(
    voiceActors.map((actor) => [actor.name, actor.id]),
  );

  for (let level = fromLevel; level <= toLevel; level++) {
    console.log(`== Level ${level} ==`);

    let spinner = ora();
    let slugs = await scrapeSlugs(level, 'vocabulary');
    let data: VocabularyReading[] = [];

    for (let slug of slugs) {
      let decodedSlug = decodeURIComponent(slug);
      spinner.start(`Populating ${decodedSlug} readings...`);
      let vocabularyReadings = await scrapeVocabularyReadings(slug);

      if (!vocabularyReadings.character) {
        console.log(`No readings found for ${decodedSlug}`);
        continue;
      }
      if (vocabularyReadings.character.length == 0) continue;

      let [vocabulary] = await getVocabularyByCharacter(
        vocabularyReadings.character,
      );
      let flattenedReadings: VocabularyReading[] =
        vocabularyReadings.reading_with_audios
          .map((reading) => {
            return reading.audios.map((audio, index) => ({
              reading: reading.reading!,
              reading_number: index + 1,
              source_url: audio.source!,
              vocabulary_id: vocabulary.id,
              actor_id: voiceActorsMap.get(audio.actor_name!)!,
            }));
          })
          .flat();

      data = data.concat(flattenedReadings);
      spinner.succeed(`Populated ${decodedSlug} readings`);
      await wait(220);
    }

    if (data.length > 0) {
      await insertVocabularyReadings(data);
      data = [];
    }
  }
})();
