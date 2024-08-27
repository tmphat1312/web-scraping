import { db } from '@/data/db';
import { radicals } from '@/data/schemas';
import { slugify } from '@/utils/slugify';
import { eq } from 'drizzle-orm';

const getNoCharacterRadicals = db
  .select({
    id: radicals.id,
    name: radicals.name,
  })
  .from(radicals)
  .where(eq(radicals.character, ''))
  .prepare();

getNoCharacterRadicals.execute().then((rows) => {
  Promise.all(
    rows.map((row) =>
      db
        .update(radicals)
        .set({ character: `/radicals/${slugify(row.name)}.svg` })
        .where(eq(radicals.id, row.id)),
    ),
  );
});
