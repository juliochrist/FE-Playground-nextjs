import { PerformanceLab } from "@/components/labs/performance-lab";
import { PageHeader } from "@/components/layouts/page-header";

export default function PerformancePage() {
  return (
    <>
      <PageHeader eyebrow="Performance Lab" title="Frontend Performance Playground" description="Lazy loading, dynamic imports, skeletons, virtualized tables, infinite scrolling, debounced search, memoization, and performance metrics." />
      <PerformanceLab />
    </>
  );
}
