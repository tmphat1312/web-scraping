import { Kanji, insertKanji } from '@/drizzle/mutations/kanji';
import { Radical, insertRadicals } from '@/drizzle/mutations/radicals';
import { Command } from 'commander';
import ora from 'ora';

import { wait } from '../utils/wait';
import { scrapeKanji } from './scripts/kanji';
import { scrapeRadical } from './scripts/radical';
import { scrapeSlugs } from './scripts/slugs';

let program = new Command();

program
  .name('populate-data')
  .description('Populate data from WaniKani')
  .version('0.0.1');

program
  .command('radicals')
  .description('Populate radicals')
  .option('--level <number>', 'Level to scrape radicals from')
  .action((options) => {
    scrapeSlugs(options.level || 1, 'radicals').then(async (slugs) => {
      let spinner = ora('Scraping radicals');
      let radicals: Radical[] = [];

      for (let slug of slugs) {
        spinner.start(`Scraping ${slug}`);
        try {
          let scraped = await scrapeRadical(slug);
          radicals.push({
            level: scraped.level!,
            character: scraped.character!,
            primary_meaning: scraped.primary_meaning!,
            alternative_meanings: scraped.alternative_meanings,
            mnemonic: scraped.mnemonic.join('\n'),
          });
          spinner.succeed(`Scraped ${slug}`);
        } catch (error) {
          spinner.fail(`Failed to scrape ${slug}`);
          console.error(error);
          process.exit(1);
        } finally {
          await wait(150);
        }
      }
      await insertRadicals(radicals);
    });
  });

program
  .command('kanji')
  .description('Populate kanji')
  .option('--level <number>', 'Level to scrape kanji from')
  .action((options) => {
    scrapeSlugs(options.level || 1, 'kanji').then(async (slugs) => {
      let spinner = ora('Scraping kanji').start();
      let kanji: Kanji[] = [];

      for (let slug of slugs) {
        spinner.start(`Scraping ${decodeURI(slug)}`);
        try {
          let scraped = await scrapeKanji(slug);
          kanji.push({
            level: scraped.level!,
            character: scraped.character!,
            primary_meaning: scraped.primary_meaning!,
            alternative_meanings: scraped.alternative_meanings,
            meaning_mnemonic: scraped.meaning_mnemonic.join('\n'),
            meaning_hints: scraped.meaning_hints.join('\n'),
            reading_mnemonic: scraped.reading_mnemonic.join('\n'),
            reading_hints: scraped.reading_hints.join('\n'),
            kunyomi_reading: scraped.kunyomi_reading,
            onyomi_reading: scraped.onyomi_reading,
            nanori_reading: scraped.nanori_reading,
          });
          spinner.succeed(`Scraped ${decodeURI(slug)}`);
        } catch (error) {
          spinner.fail(`Failed to scrape ${decodeURI(slug)}`);
          console.error(error);
          process.exit(1);
        } finally {
          await wait(100);
        }
      }
      await insertKanji(kanji);
    });
  });

program.parse();
