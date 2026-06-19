import { StateLab } from "@/components/labs/state-lab";
import { PageHeader } from "@/components/layouts/page-header";

export default function StateManagementPage() {
  return (
    <>
      <PageHeader eyebrow="State Management Lab" title="Local, Shared, and Global State" description="Compare useState, Context API, and Zustand patterns with architecture guidance." />
      <StateLab />
    </>
  );
}
