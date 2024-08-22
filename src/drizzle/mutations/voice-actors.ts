import { InferInsertModel } from 'drizzle-orm';

import { db } from '../client';
import { voice_actors } from '../schemas/voice_actors';

export type VoiceActor = InferInsertModel<typeof voice_actors>;

export async function insertVoiceActors(data: VoiceActor[]) {
  return db
    .insert(voice_actors)
    .values(data)
    .returning({
      id: voice_actors.id,
    })
    .onConflictDoNothing();
}

export async function truncateVoiceActors() {
  return db.delete(voice_actors);
}
