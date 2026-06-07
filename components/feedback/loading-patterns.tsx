import { Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export function SkeletonLoader() {
  return (
    <Card className="space-y-4">
      <div className="h-4 w-1/3 animate-pulse rounded bg-muted/20" />
      <div className="h-20 animate-pulse rounded-xl bg-muted/15" />
      <div className="grid grid-cols-3 gap-3">
        <div className="h-10 animate-pulse rounded-xl bg-muted/15" />
        <div className="h-10 animate-pulse rounded-xl bg-muted/15" />
        <div className="h-10 animate-pulse rounded-xl bg-muted/15" />
      </div>
    </Card>
  );
}

export function LoadingSpinner() {
  return (
    <div className="flex items-center gap-2 text-sm text-muted">
      <Loader2 className="size-4 animate-spin text-primary" />
      Syncing component registry
    </div>
  );
}
