import { getCollection, getEntry } from "astro:content";

const wiki = await getCollection("wiki");

// TODO: sort by name?
export const homepages = wiki.filter(entry => entry.data.home);

export async function byId(id: string) {
  const entry = await getEntry('wiki', id);
  if (!entry) {
    throw new Error(`No blog entry with ID ${id}`)
  }
  return entry;
}

export default wiki;