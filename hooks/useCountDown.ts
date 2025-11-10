"use client"; // 👈 Requerido: los hooks se ejecutan solo en el cliente

import { useEffect, useState } from "react";

export function useCountdown(targetDate: string) {
  const countDownDate = new Date(targetDate).getTime();

  const [countdown, setCountdown] = useState(() => {
    const diff = countDownDate - Date.now();
    return diff > 0 ? diff : 0; // 👈 evita valores negativos iniciales
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = countDownDate - Date.now();
      setCountdown(diff > 0 ? diff : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}
