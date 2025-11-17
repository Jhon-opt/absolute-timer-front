import { fetchEvents } from "@/services/fetchEvents";

export async function generateStaticParams() {
  const comics = await fetchEvents();
  return comics.map((comic) => ({
    id: comic.id.toString(),
  }));
}
