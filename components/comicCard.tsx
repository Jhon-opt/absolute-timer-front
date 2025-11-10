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


  return (
    <div className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg flex flex-col items-center p-4 w-72 hover:scale-105 transition-transform duration-300">
      {/* 🖼️ Portada optimizada */}
      <div className="relative w-full h-96">
        <Image
          src={comic.coverImage}
          alt={comic.title}
          fill
          className="object-cover rounded-xl"
          priority={true}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <h2 className="text-xl font-bold mt-4 text-center ">
        {comic.title} #{latestIssue?.number}
      </h2>

      <p className="text-sm text-gray-400 italic text-center">
        {latestIssue?.name}
      </p>

      {/* 🔵 Barra de progreso con número */}
      <div className="w-full flex items-center gap-2 mt-4">
        <div className="flex-1 bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className={`${randomColor} h-3 transition-all duration-500`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-300 w-10 text-right">
          {Math.floor(progress)}%
        </span>
      </div>

      {/* ⏰ Temporizador */}
      <div className="mt-3">
        {latestIssue && <CountdownTimer targetDate={latestIssue.releaseDate} />}
      </div>
    </div>
  );
};
