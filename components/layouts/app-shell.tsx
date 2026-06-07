import { Search, ShieldCheck } from "lucide-react";
import { DesktopSidebar, MobileDrawer } from "@/components/navigation/sidebar";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { Badge } from "@/components/ui/badge";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <DesktopSidebar />
      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 border-b bg-background/75 backdrop-blur-xl">
          <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
            <MobileDrawer />
            <div className="hidden h-10 min-w-0 max-w-sm flex-1 items-center gap-2 rounded-xl border bg-card px-3 text-sm text-muted md:flex">
              <Search className="size-4" />
              <span>Search components, patterns, dashboards</span>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <Badge variant="premium" className="hidden sm:inline-flex">
                <ShieldCheck className="mr-1 size-3" />
                Julio UI Kit
              </Badge>
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
