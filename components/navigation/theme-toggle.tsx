"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const modes = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Monitor, label: "System" },
  ];

  return (
    <div className="flex rounded-xl border bg-card p-1">
      {modes.map(({ value, icon: Icon, label }) => (
        <Button
          key={value}
          aria-label={label}
          title={label}
          variant={theme === value ? "primary" : "ghost"}
          size="icon"
          className="size-8 rounded-lg"
          onClick={() => setTheme(value)}
        >
          <Icon className="size-4" />
        </Button>
      ))}
    </div>
  );
}
