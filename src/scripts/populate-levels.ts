import { insertLevels } from '@/data/mutations';
import { scrapeLevels } from '@/scraping/levels';
import ora from 'ora';

let spinner = ora().start(`Populating levels...`);
scrapeLevels().then(insertLevels);
spinner.succeed(`Populated levels`);
