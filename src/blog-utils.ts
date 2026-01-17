import { getCollection, getEntry } from "astro:content";

const blog = (await getCollection("blog", ({data}) => data.draft != true)).sort(function (a, b) {
  return b.data.date.getTime() - a.data.date.getTime();
});

export async function byId(id: string) {
  const entry = await getEntry('blog', id);
  if (!entry) {
    throw new Error(`No blog entry with ID ${id}`)
  }
  return entry;
}

export default blog;