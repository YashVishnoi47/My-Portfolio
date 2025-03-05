"use client";

import { useState, useEffect } from "react";
import { BatteryCharging, BatteryFull, BatteryLow, BatteryMedium } from "lucide-react";

const Battery = () => {
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [charging, setCharging] = useState(false);

  useEffect(() => {
    const fetchBattery = async () => {
      if ("getBattery" in navigator) {
        const battery = await (navigator).getBattery();

        setBatteryLevel(Math.round(battery.level * 100));
        setCharging(battery.charging);
      }
    };

    fetchBattery(); // Initial Fetch
    const interval = setInterval(fetchBattery, 30000); // Update every 30 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Get Battery Icon
  const getBatteryIcon = () => {
    if (charging) return <BatteryCharging className="text-green-400 animate-pulse" size={20} />;
    if (batteryLevel > 80) return <BatteryFull className="text-green-400" size={20} />;
    if (batteryLevel > 40) return <BatteryMedium className="text-yellow-400" size={20} />;
    return <BatteryLow className="text-red-400 animate-bounce" size={20} />;
  };

  return (
    <div className="flex items-center gap-2 bg-black/10 px-3 py-1 rounded-lg">
      {getBatteryIcon()}
      <span className="text-sm font-medium text-white">{batteryLevel}%</span>
    </div>
  );
};

export default Battery;
