import { db } from '@/data/db';
import { radicals } from '@/data/schemas';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { eq } from 'drizzle-orm';
import { parser, string } from 'valibot';

import { publicProcedure, router } from './trpc';

const appRouter = router({
  radicals: publicProcedure.query(async () => {
    return db.select().from(radicals).limit(10);
  }),
  radical: publicProcedure.input(parser(string())).query(async ({ input }) => {
    let result = await db
      .select()
      .from(radicals)
      .where(eq(radicals.name, input));
    return result.at(0);
  }),
});
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});
