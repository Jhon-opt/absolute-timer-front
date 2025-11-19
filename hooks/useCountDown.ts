"use client";

import { useEffect, useState } from "react";

export function useCountdown(targetDate: string) {
  const targetUTC = Date.parse(targetDate); // ya está en UTC por el "Z"

  const getNowUTC = () => {
    const now = new Date();
    return Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds(),
      now.getUTCMilliseconds()
    );
  };

  const [countdown, setCountdown] = useState(() => {
    const diff = targetUTC - getNowUTC();
    return diff > 0 ? diff : 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = targetUTC - getNowUTC();
      setCountdown(diff > 0 ? diff : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetUTC]);

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}
