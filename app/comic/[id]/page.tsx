import { fetchEvents } from "@/services/fetchEvents";
import Image from "next/image";
import { CountdownTimer } from "@/components/countDownTimer";
import type { Metadata } from "next";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const dynamicParams = true;
// ⭐ SEO DINÁMICO PARA CADA CÓMIC
export async function generateMetadata(
  props: { params: Promise<{ id: string }> }
): Promise<Metadata> {

  const { id } = await props.params; // ✅ CORRECTO

  const comics = await fetchEvents();
  const comic = comics.find((c) => c.id === Number(id));

  if (!comic) {
    return {
      title: "Comic Not Found – Absolute Timer",
      description: "The comic you are looking for does not exist."
    };
  }

  const latestIssue = comic.issues[comic.issues.length - 1];

  const SITE_URL = "https://absolutetimer.dev";

  return {
    title: `${comic.title} #${latestIssue.number} – Release Countdown`,
    description: `${comic.title} #${latestIssue.number} releases on ${new Date(
      latestIssue.releaseDate
    ).toDateString()}. Live countdown, cover and details.`,

    openGraph: {
      title: `${comic.title} #${latestIssue.number} – Absolute Countdown`,
      description: `Live countdown for ${comic.title} #${latestIssue.number}.`,
      url: `${SITE_URL}/comic/${comic.id}`,
      images: [
        {
          url: comic.coverImage,
          width: 800,
          height: 1200,
          alt: `${comic.title} cover art`
        }
      ]
    }
  };
}

export default async function ComicPage(
  props: { params: Promise<{ id: string }> }
) {
  const { id } = await props.params; 

  const comics = await fetchEvents();
  const comic = comics.find((c) => c.id === Number(id));


  if (!comic) {
    return <div className="text-center text-white p-10">Comic not found</div>;
  }

  const latestIssue = comic.issues[comic.issues.length - 1];
  const authors = latestIssue?.authors ?? [];

  return (
   <div className="w-full max-w-5xl mx-auto mt-10 mb-20 px-4">
  <div className="
    bg-gray-900/40 
    backdrop-blur-2xl 
    border border-gray-700/60 
    rounded-3xl 
    shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)]
    p-8 
    md:p-12
  ">

    {/* GRID PRINCIPAL */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

      {/* PORTADA */}
      <div className="flex justify-center md:justify-start">
        <Image
          src={comic.coverImage}
          alt={comic.title}
          width={500}
          height={750}
          priority
          className="
            rounded-2xl 
            shadow-2xl 
            border border-gray-700
            transition-transform 
            duration-300 
            hover:scale-105
          "
        />
      </div>

      {/* INFORMACIÓN */}
      <div className="flex flex-col gap-6">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          {comic.title}{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            #{latestIssue.number}
          </span>
        </h1>

        {/* ISSUE NAME */}
        <p className="text-xl italic text-gray-300">
          {latestIssue.name}
        </p>

        {/* RELEASE DATE */}
        <div className="text-lg text-gray-200">
          <span className="font-semibold text-purple-300">Release date:</span>
          <br />
          {new Date(latestIssue.releaseDate).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        {/* COUNTDOWN */}
        <div className="mt-2">
          <CountdownTimer targetDate={latestIssue.releaseDate} />
        </div>

        {/* AUTHORS */}
        {authors.length > 0 && (
          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-white mb-1">Authors</h3>
            <p className="text-gray-300">{authors.join(", ")}</p>
          </div>
        )}

        {/* SYNOPSIS */}
        {latestIssue.synopsis && (
          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-white mb-2">Synopsis</h3>
            <p className="text-gray-300 leading-relaxed text-justify">
              {latestIssue.synopsis}
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
</div>

  );
}
