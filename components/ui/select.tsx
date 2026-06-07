"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Select({ value, onValueChange, items, placeholder }: { value?: string; onValueChange?: (value: string) => void; items: string[]; placeholder?: string }) {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger className="flex h-10 w-full items-center justify-between rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary/25">
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon><ChevronDown className="size-4 text-muted" /></SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className="z-50 min-w-40 overflow-hidden rounded-xl border bg-card p-1 shadow-xl">
          <SelectPrimitive.Viewport>
            {items.map((item) => (
              <SelectPrimitive.Item key={item} value={item} className={cn("cursor-pointer rounded-lg px-3 py-2 text-sm outline-none hover:bg-background focus:bg-background")}>
                <SelectPrimitive.ItemText>{item}</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
