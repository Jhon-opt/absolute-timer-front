import type { EventData } from "@/types";

const GITHUB_JSON_URL =
  "https://raw.githubusercontent.com/Jhon-opt/absolute-timer/main/events.json";

// ✅ Compatible con SSG (Static Site Generation)
export async function fetchEvents(): Promise<EventData[]> {
  const response = await fetch(GITHUB_JSON_URL, {
    // Usa la versión cacheada si existe (ideal para SSG)
    cache: "force-cache",

  });

  if (!response.ok) {
    throw new Error(`Error al cargar los eventos: ${response.status}`);
  }

  const data = (await response.json()) as EventData[];
  return data;
  
}
