import { PageHeader } from "@/components/layouts/page-header";
import { PlaygroundCanvas } from "@/components/playground/playground-canvas";
import { Badge } from "@/components/ui/badge";

export default function PlaygroundPage() {
  return (
    <>
      <PageHeader eyebrow="Figma + Storybook + React" title="Rapid Dashboard Prototyping" description="Combine reusable sidebar, KPI cards, charts, tables, forms, and modal-ready surfaces into product prototypes." />
      <div className="mb-6 flex flex-wrap gap-3">
        {["Trading Dashboard Prototype", "CRM Dashboard Prototype", "POS Dashboard Prototype", "Analytics Dashboard Prototype"].map((item) => <Badge key={item} variant="premium">{item}</Badge>)}
      </div>
      <PlaygroundCanvas />
    </>
  );
}
