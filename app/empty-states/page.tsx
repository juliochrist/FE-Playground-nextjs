import { AlertTriangle, Database, Loader2, SearchX, WifiOff } from "lucide-react";
import { EmptyState } from "@/components/feedback/empty-state";
import { SkeletonLoader } from "@/components/feedback/loading-patterns";
import { PageHeader } from "@/components/layouts/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function EmptyStatesPage() {
  return (
    <>
      <PageHeader eyebrow="Product Polish" title="Empty States" description="Reusable no-data, no-results, error, offline, and loading states for real production workflows." />
      <div className="grid gap-6 xl:grid-cols-2">
        <EmptyState icon={Database} title="No Data" description="Use when a product area has not collected any records yet." action="Create First Record" />
        <EmptyState icon={SearchX} title="No Results" description="Use when search or filters return nothing useful." action="Clear Filters" />
        <EmptyState icon={AlertTriangle} title="Error" description="Use when a component cannot load its expected data." action="Try Again" />
        <EmptyState icon={WifiOff} title="Offline" description="Use when network state blocks a workflow." action="Reconnect" />
        <Card>
          <CardHeader><div><CardTitle>Loading</CardTitle><CardDescription>Skeleton and spinner patterns for async surfaces.</CardDescription></div></CardHeader>
          <SkeletonLoader />
          <div className="mt-4 flex items-center gap-2 text-sm text-muted"><Loader2 className="size-4 animate-spin text-primary" />Loading records</div>
        </Card>
      </div>
    </>
  );
}
