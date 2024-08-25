import { insertVoiceActors } from '@/drizzle/mutations/voice-actors';
import { scrapeVoiceActors } from '@/scraping/voice-actors';
import ora from 'ora';

(async function populate() {
  let spinner = ora();

  spinner.start(`Populating voice actors...`);
  let data = await scrapeVoiceActors();
  await insertVoiceActors(data);
  spinner.succeed(`Populated voice actors`);
})();
