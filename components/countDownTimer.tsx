"use client"; // 👈 Necesario: usa hooks dentro

import { useCountdown } from "@/hooks/useCountDown";
import React from "react";
 // ✅ usa alias absoluto en Next

interface CountdownProps {
  targetDate: string;
}

export const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const isReleased =
    days === 0 && hours === 0 && minutes === 0 && seconds === 0;

  if (isReleased) {
    return (
      <div className="text-green-400 font-semibold text-lg mt-2">
        ¡Ya disponible! 🎉
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-2 text-lg font-mono text-white">
      <div className="bg-gray-800 p-2 rounded-lg">{days}d</div>
      <div className="bg-gray-800 p-2 rounded-lg">{hours}h</div>
      <div className="bg-gray-800 p-2 rounded-lg">{minutes}m</div>
      <div className="bg-gray-800 p-2 rounded-lg">{seconds}s</div>
    </div>
  );
};
