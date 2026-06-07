import { MotionShowcase } from "@/components/animations/motion-showcase";
import { PageHeader } from "@/components/layouts/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnimationsPage() {
  return (
    <>
      <PageHeader eyebrow="Motion System" title="Reusable Animation Patterns" description="Framer Motion presets for page transitions, cards, drawers, modals, and premium hover feedback." />
      <MotionShowcase />
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card className="hover:-translate-y-1 hover:shadow-xl"><CardHeader><div><CardTitle>Hover Lift</CardTitle><CardDescription>Reusable card hover interaction.</CardDescription></div></CardHeader></Card>
        <Card><CardHeader><div><CardTitle>Drawer and Modal Animation</CardTitle><CardDescription>Navigation drawer uses Radix Dialog with blurred backdrop and smooth entry.</CardDescription></div></CardHeader></Card>
      </div>
    </>
  );
}
