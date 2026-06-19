"use client";

import { Search, Sparkles } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useMemo, useState } from "react";
import { navItems } from "@/data/navigation";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export function CommandPaletteDemo() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const results = useMemo(() => navItems.filter((item) => item.title.toLowerCase().includes(query.toLowerCase())).slice(0, 8), [query]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="flex h-12 w-full max-w-xl items-center gap-3 rounded-2xl border bg-card px-4 text-left text-sm text-muted shadow-sm">
        <Search className="size-4" />
        Search pages, components, patterns
        <Badge className="ml-auto" variant="neutral">CMD K</Badge>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-background/60 backdrop-blur-md" />
        <Dialog.Content className="fixed left-1/2 top-24 z-50 w-[92vw] max-w-2xl -translate-x-1/2 rounded-2xl border bg-card p-4 shadow-2xl">
          <Dialog.Title className="sr-only">Command Palette</Dialog.Title>
          <div className="relative">
            <Search className="absolute left-3 top-3 size-4 text-muted" />
            <Input autoFocus className="pl-9" placeholder="Type a command or page name" value={query} onChange={(event) => setQuery(event.target.value)} />
          </div>
          <div className="mt-4 grid gap-2">
            {results.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.href} href={item.href} className="flex items-center gap-3 rounded-xl border bg-background p-3 hover:border-primary">
                  <Icon className="size-4 text-primary" />
                  <span className="font-medium">{item.title}</span>
                  <Sparkles className="ml-auto size-4 text-accent" />
                </a>
              );
            })}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
