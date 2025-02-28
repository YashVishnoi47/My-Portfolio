"use client";
import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // Update every second
    }, 60000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="text-white text-sm select-none">
      {/* Date: Format - Tue, 20 Feb 2025 */}
      {time.toLocaleDateString("en-US", {
        // weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
      })}{"  |  "}
      {/* Time: Format - 10:35 AM */}
      {time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
        hour12: true, // 12-hour format with AM/PM
      })}
    </div>
  );
}
