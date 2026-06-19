"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Command, Search, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { navItems } from "@/data/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const tags = ["chart", "table", "theme", "mobile", "api", "accessibility", "performance", "state"];

export function GlobalCommand() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState<string[]>(["Dashboard", "Animations"]);
  const [favorites, setFavorites] = useState<string[]>(["Components", "Charts"]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const results = useMemo(() => {
    const normalized = query.toLowerCase();
    return navItems.filter((item) => item.title.toLowerCase().includes(normalized) || item.href.includes(normalized)).slice(0, 10);
  }, [query]);

  function remember(title: string) {
    setRecent((items) => [title, ...items.filter((item) => item !== title)].slice(0, 5));
    setOpen(false);
  }

  return (
    <>
      <button
        className="hidden h-10 min-w-0 max-w-sm flex-1 items-center gap-2 rounded-xl border bg-card px-3 text-left text-sm text-muted hover:border-primary md:flex"
        onClick={() => setOpen(true)}
      >
        <Search className="size-4" />
        <span className="truncate">Search components, patterns, dashboards</span>
        <Badge className="ml-auto" variant="neutral">CMD K</Badge>
      </button>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[var(--z-overlay)] bg-background/60 backdrop-blur-md" />
          <Dialog.Content className="fixed left-1/2 top-20 z-[var(--z-modal)] w-[92vw] max-w-3xl -translate-x-1/2 rounded-2xl border bg-card p-4 shadow-2xl">
            <div className="mb-3 flex items-center gap-3">
              <Dialog.Title className="flex items-center gap-2 font-semibold"><Command className="size-4 text-primary" />Global Search</Dialog.Title>
              <Dialog.Close asChild><Button className="ml-auto" size="icon" variant="ghost" aria-label="Close command palette"><X className="size-4" /></Button></Dialog.Close>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-3 size-4 text-muted" />
              <Input autoFocus className="pl-9" placeholder="Search pages, components, architecture notes" value={query} onChange={(event) => setQuery(event.target.value)} />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">{tags.map((tag) => <Badge key={tag} variant="neutral">{tag}</Badge>)}</div>
            <div className="mt-4 grid gap-2">
              {results.map((item) => {
                const Icon = item.icon;
                const favorite = favorites.includes(item.title);
                return (
                  <Link key={item.href} href={item.href} onClick={() => remember(item.title)} className="flex items-center gap-3 rounded-xl border bg-background p-3 hover:border-primary">
                    <Icon className="size-4 text-primary" />
                    <div><p className="font-medium">{item.title}</p><p className="text-xs text-muted">{item.href}</p></div>
                    <button
                      className="ml-auto rounded-full p-2 text-muted hover:text-accent"
                      onClick={(event) => {
                        event.preventDefault();
                        setFavorites((items) => favorite ? items.filter((value) => value !== item.title) : [...items, item.title]);
                      }}
                      aria-label={favorite ? "Remove favorite" : "Add favorite"}
                    >
                      <Sparkles className="size-4" />
                    </button>
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 grid gap-3 border-t pt-4 text-sm text-muted md:grid-cols-2">
              <p>Recently viewed: {recent.join(", ")}</p>
              <p>Favorites: {favorites.join(", ")}</p>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
