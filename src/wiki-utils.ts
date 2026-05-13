import { getCollection, getEntry } from "astro:content";

const wiki = await getCollection("wiki");

export const homepages = wiki
  .filter(entry => entry.data.homepage)
  .sort((a, b) => a.data.name.localeCompare(b.data.name, 'en'));

export async function byId(id: string) {
  const entry = await getEntry('wiki', id);
  if (!entry) {
    throw new Error(`No blog entry with ID ${id}`)
  }
  return entry;
}

export default wiki;