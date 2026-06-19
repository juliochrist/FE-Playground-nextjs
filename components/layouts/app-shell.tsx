import { ShieldCheck } from "lucide-react";
import { GlobalCommand } from "@/components/command/global-command";
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
            <GlobalCommand />
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
