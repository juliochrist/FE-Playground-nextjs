import { MotionShowcase } from "@/components/animations/motion-showcase";
import { PageHeader } from "@/components/layouts/page-header";
import { ArrowRight, PanelLeftOpen } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnimationsPage() {
  return (
    <>
      <PageHeader eyebrow="Motion System" title="Reusable Animation Patterns" description="Framer Motion presets for page transitions, cards, drawers, modals, and premium hover feedback." />
      <MotionShowcase />
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card className="hover:-translate-y-1 hover:shadow-xl"><CardHeader><div><CardTitle>Hover Lift</CardTitle><CardDescription>Reusable card hover interaction for dashboards and marketing blocks.</CardDescription></div></CardHeader></Card>
        <Card className="group overflow-hidden">
          <CardHeader><div><CardTitle>Drawer and Modal Animation</CardTitle><CardDescription>Hover this card to preview drawer slide and backdrop behavior.</CardDescription></div></CardHeader>
          <div className="relative h-32 overflow-hidden rounded-2xl border bg-background">
            <div className="absolute inset-0 bg-background transition group-hover:bg-background/50 group-hover:backdrop-blur-sm" />
            <div className="absolute bottom-0 left-0 top-0 flex w-24 -translate-x-20 items-center justify-center rounded-r-2xl border-r bg-card transition-transform duration-300 group-hover:translate-x-0">
              <PanelLeftOpen className="size-5 text-primary" />
            </div>
            <div className="absolute left-12 top-1/2 flex -translate-y-1/2 items-center gap-2 text-sm text-muted transition-transform duration-300 group-hover:translate-x-16">
              Drawer slides in <ArrowRight className="size-4" />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
