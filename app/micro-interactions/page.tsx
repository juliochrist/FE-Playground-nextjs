import { MicroInteractionsLab } from "@/components/labs/micro-interactions-lab";
import { PageHeader } from "@/components/layouts/page-header";

export default function MicroInteractionsPage() {
  return (
    <>
      <PageHeader eyebrow="Micro Interactions" title="Interaction Motion System" description="Hover effects, animated buttons, card interactions, counters, loaders, page transitions, and expand/collapse patterns." />
      <MicroInteractionsLab />
    </>
  );
}
