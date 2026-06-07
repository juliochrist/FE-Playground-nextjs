"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Density, MotionLevel, Radius } from "@/types";

type SettingsState = {
  density: Density;
  radius: Radius;
  motion: MotionLevel;
  setDensity: (density: Density) => void;
  setRadius: (radius: Radius) => void;
  setMotion: (motion: MotionLevel) => void;
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      density: "comfortable",
      radius: "large",
      motion: "premium",
      setDensity: (density) => set({ density }),
      setRadius: (radius) => set({ radius }),
      setMotion: (motion) => set({ motion }),
    }),
    { name: "frontend-playground-settings" },
  ),
);
