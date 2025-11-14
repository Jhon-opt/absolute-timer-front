"use client"; // 👈 Importante: esta parte sí usa hooks, por eso debe ser un Client Component

import React, { useMemo } from "react";
import Image from "next/image"; // ✅ usamos el componente optimizado de Next

import type { EventData, Issue } from "@/types";
import { useProgress } from "@/hooks/useProgress";
import { CountdownTimer } from "./countDownTimer";

interface ComicCardProps {
  comic: EventData;
}

export const ComicCard: React.FC<ComicCardProps> = ({ comic }) => {
  const latestIssue: Issue | undefined = comic.issues[comic.issues.length - 1];
  const progress = useProgress(
    latestIssue?.releaseDate,
    latestIssue?.lastReleaseDate
  );

  // 🎨 Color aleatorio (se genera una vez por cómic)
  const randomColor = useMemo(() => {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-white",
  ];

  // 👇 Genera un número pseudoaleatorio a partir del id
  const index = comic.id % colors.length;
  return colors[index];
}, [comic.id]);

const formatReleaseDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return `${months[month]} ${day}, ${year}`;
};



  return (
  <div className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg flex flex-col items-center p-4 w-72 hover:scale-105 transition-transform duration-300">
    {/* PORTADA */}
    <div className="relative w-full h-96">
      <Image
        src={comic.coverImage}
        alt={`${comic.title} #${latestIssue?.number} cover`}
        fill
        className="object-cover rounded-xl"
        priority={true}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>

    {/* TÍTULO */}
    <h2 className="text-xl font-bold mt-4 text-center">
      {comic.title} #{latestIssue?.number}
    </h2>

    {/* SUBTÍTULO */}
    <p className="text-sm text-gray-400 italic text-center">
      {latestIssue?.name}
    </p>

    {/* FECHA → PRIMERO */}
    {latestIssue && (
      <p className="text-sm font-bold mt-2">
        <strong>Release Date:</strong> {formatReleaseDate(latestIssue.releaseDate)}
      </p>
    )}

    {/* BARRA DE PROGRESO */}
    <div className="w-full flex items-center gap-2 mt-3">
      <div className="flex-1 bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className={`${randomColor} h-3 transition-all duration-500`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-sm text-gray-300 w-10 text-right">
        {Math.floor(progress)}%
      </span>
    </div>

    
    <div className="mt-3">
      {latestIssue && <CountdownTimer targetDate={latestIssue.releaseDate} />}
    </div>
  </div>
);
};
