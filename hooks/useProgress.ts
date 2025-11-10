"use client"; // 👈 Importante: los hooks deben ejecutarse en el cliente

import { useEffect, useState } from "react";

export function useProgress(targetDate?: string, startDate?: string) {
  if (!targetDate) return 0;

  const end = new Date(targetDate).getTime();
  const start = startDate
    ? new Date(startDate).getTime()
    : new Date().setHours(0, 0, 0, 0); // Por defecto: inicio del día

  const total = Math.max(end - start, 1); // evita división por 0

  const [progress, setProgress] = useState(() => {
    const now = Date.now();
    const elapsed = Math.max(now - start, 0);
    return Math.min((elapsed / total) * 100, 100);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = Math.max(now - start, 0);
      const pct = Math.min((elapsed / total) * 100, 100);
      setProgress(pct);
    }, 1000);

    return () => clearInterval(interval);
  }, [start, end, total]);

  return progress;
}
