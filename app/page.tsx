// app/page.tsx
import { ComicCard } from "@/components/comicCard";
import { fetchEvents } from "@/services/fetchEvents";
import { EventData } from "@/types";

// 🧱 Esta función se ejecuta en build time (SSG)
export default async function Page() {
  // En SSG, esto se ejecuta al hacer `next build`, no en cada request
  let comics: EventData[] = [];

  try {
    comics = await fetchEvents();
  } catch (error) {
    console.error("Error al cargar eventos:", error);
  }

  if (!comics.length) {
    return (
      <div className="text-white text-center text-lg mt-20 animate-pulse">
        There are no releases available at this time.
      </div>
    );
  }

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {comics.map((comic) => (
        <ComicCard key={comic.id} comic={comic} />
      ))}
    </div>
  );
}

// 🚀 SSG: Genera la página una vez en build time
export const revalidate = false;
