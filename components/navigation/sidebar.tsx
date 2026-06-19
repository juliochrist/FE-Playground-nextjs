"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, Menu, Sparkles, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { navItems } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function NavLinks({ collapsed = false, onNavigate }: { collapsed?: boolean; onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="grid gap-1">
      {navItems.map((item) => {
        const active = pathname === item.href || (pathname === "/" && item.href === "/dashboard");
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium text-muted hover:bg-background hover:text-foreground",
              active && "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary hover:text-white",
              collapsed && "justify-center px-0",
            )}
            title={collapsed ? item.title : undefined}
          >
            <Icon className="size-4 shrink-0" />
            {!collapsed ? <span>{item.title}</span> : null}
          </Link>
        );
      })}
    </nav>
  );
}

export function DesktopSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={cn("sticky top-0 hidden h-screen shrink-0 overflow-y-auto border-r bg-card/70 p-4 backdrop-blur-xl lg:block", collapsed ? "w-20" : "w-72")}>
      <div className={cn("mb-8 flex items-center gap-3", collapsed && "justify-center")}>
        <div className="grid size-10 place-items-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/25">
          <Sparkles className="size-5" />
        </div>
        {!collapsed ? (
          <div>
            <p className="text-sm font-bold">Frontend Playground</p>
            <p className="text-xs text-muted">Julio UI Kit Lab</p>
          </div>
        ) : null}
      </div>
      <NavLinks collapsed={collapsed} />
      <Button className="absolute bottom-4 right-4 rounded-full" size="icon" variant="secondary" onClick={() => setCollapsed((value) => !value)}>
        <ChevronLeft className={cn("size-4", collapsed && "rotate-180")} />
      </Button>
    </aside>
  );
}

export function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="lg:hidden" variant="secondary" size="icon" aria-label="Open navigation">
          <Menu className="size-5" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-background/50 backdrop-blur-md" />
        <Dialog.Content className="fixed inset-y-0 left-0 z-50 w-80 max-w-[86vw] overflow-y-auto border-r bg-card p-4 shadow-2xl">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-2xl bg-primary text-white">
                <Sparkles className="size-5" />
              </div>
              <div>
                <Dialog.Title className="text-sm font-bold">Frontend Playground</Dialog.Title>
                <Dialog.Description className="text-xs text-muted">Build Once. Reuse Everywhere.</Dialog.Description>
              </div>
            </div>
            <Dialog.Close asChild>
              <Button size="icon" variant="ghost" aria-label="Close navigation">
                <X className="size-5" />
              </Button>
            </Dialog.Close>
          </div>
          <NavLinks onNavigate={() => setOpen(false)} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
