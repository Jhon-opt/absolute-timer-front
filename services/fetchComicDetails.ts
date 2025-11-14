const GITHUB_JSON_URL =
  "https://raw.githubusercontent.com/Jhon-opt/absolute-timer/main/comic-details.json";

export async function fetchComicDetails() {
  const response = await fetch(GITHUB_JSON_URL, {
    cache: "force-cache",
    next: { revalidate: 3600 }, // ISR: cada hora
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return response.json();
}