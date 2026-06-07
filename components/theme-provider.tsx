"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";
import { useSettingsStore } from "@/hooks/use-settings-store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { density, radius, motion } = useSettingsStore();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("density-compact", "density-comfortable", "density-spacious", "reduced-motion", "premium-motion");
    root.classList.add(`density-${density}`);
    if (motion === "reduced") root.classList.add("reduced-motion");
    if (motion === "premium") root.classList.add("premium-motion");
    root.style.setProperty("--radius", radius === "small" ? "0.5rem" : radius === "medium" ? "0.875rem" : "1.25rem");
  }, [density, radius, motion]);

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
}
