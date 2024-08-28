import { db } from '@/data/db';
import { radicals } from '@/data/schemas';

import { publicProcedure, router } from './trpc';

export const appRouter = router({
  radicals: publicProcedure.query(async () => {
    return db.select().from(radicals).limit(10);
  }),
});
export type AppRouter = typeof appRouter;
