"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { soundEngine } from "@/lib/audio";

export function AudioToggle() {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsMuted(soundEngine.getIsMuted());
  }, []);

  const handleToggle = () => {
    const nextState = soundEngine.toggleMute();
    setIsMuted(nextState);
  };

  return (
    <button
      onClick={handleToggle}
      type="button"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#6F4E37] bg-white/70 hover:bg-white/95 border border-[#E6CCB2]/50 shadow-sm backdrop-blur-md transition-all active:scale-95 cursor-pointer"
      title={isMuted ? "Turn sound effects ON" : "Turn sound effects OFF"}
      aria-label={isMuted ? "Sound is off. Click to enable sound effects" : "Sound is on. Click to mute"}
    >
      {isMuted ? (
        <>
          <VolumeX className="w-3.5 h-3.5 text-[#B08968]" />
          <span>Sound: Off</span>
        </>
      ) : (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#D64045]" />
          <span className="text-[#2C1810]">Sound: On</span>
        </>
      )}
    </button>
  );
}
