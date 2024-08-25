import { scrapeVoiceActors } from '../populating/scripts/voice-actors';

describe('scrape voiceActors', () => {
  it('should be the same voiceActors', async () => {
    let voiceActors = await scrapeVoiceActors();
    expect(voiceActors).toMatchSnapshot();
  });
});
