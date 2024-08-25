import { db } from '../client';
import { voice_actors } from '../schemas/voice_actors';

export async function getVoiceActors() {
  return db
    .select({ id: voice_actors.id, name: voice_actors.name })
    .from(voice_actors);
}
