import { PageHeader } from "@/components/layouts/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const colors = [
  ["Background", "var(--background)"],
  ["Card", "var(--card)"],
  ["Border", "var(--border)"],
  ["Text", "var(--text)"],
  ["Primary", "var(--primary)"],
  ["Accent", "var(--accent)"],
  ["Success", "var(--success)"],
  ["Danger", "var(--danger)"],
  ["Muted", "var(--muted)"],
];

const spacing = ["4px", "8px", "12px", "16px", "24px", "32px", "48px"];
const radii = ["8px", "12px", "16px", "24px"];
const shadows = ["shadow-sm", "shadow-lg", "shadow-xl", "shadow-2xl"];
const breakpoints = ["sm 640px", "md 768px", "lg 1024px", "xl 1280px", "2xl 1536px"];
const zIndex = ["header 30", "overlay 40", "modal 50", "toast 60"];

export default function DesignSystemPage() {
  return (
    <>
      <PageHeader eyebrow="Design System Documentation" title="Token Reference" description="A visual reference for the core decisions that keep Julio products consistent across dashboards, mobile screens, and marketing surfaces." />
      <div className="grid gap-6">
        <Card>
          <CardHeader><div><CardTitle>Color Tokens</CardTitle><CardDescription>Semantic colors mapped to CSS variables and theme modes.</CardDescription></div></CardHeader>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {colors.map(([name, value]) => <div key={name} className="rounded-xl border bg-background p-3"><div className="mb-3 h-16 rounded-xl border" style={{ background: value }} /><p className="font-semibold">{name}</p><p className="text-xs text-muted">{value}</p></div>)}
          </div>
        </Card>
        <div className="grid gap-6 xl:grid-cols-2">
          <Card><CardHeader><div><CardTitle>Typography Scale</CardTitle><CardDescription>Readable hierarchy for product UIs.</CardDescription></div></CardHeader><div className="grid gap-4"><p className="text-4xl font-bold">Heading 1</p><p className="text-3xl font-bold">Heading 2</p><p className="text-xl font-semibold">Section Title</p><p className="text-base">Body text for application surfaces.</p><p className="text-xs text-muted">Caption and metadata text.</p></div></Card>
          <Card><CardHeader><div><CardTitle>Font Weights</CardTitle><CardDescription>Consistent emphasis without noisy typography.</CardDescription></div></CardHeader><div className="grid gap-2">{["font-normal", "font-medium", "font-semibold", "font-bold"].map((weight) => <p key={weight} className={weight}>{weight}</p>)}</div></Card>
          <Card><CardHeader><div><CardTitle>Spacing Scale</CardTitle><CardDescription>Reusable spacing rhythm.</CardDescription></div></CardHeader><div className="grid gap-3">{spacing.map((space) => <div key={space} className="flex items-center gap-3"><div className="h-4 rounded bg-primary" style={{ width: space }} /><span className="text-sm">{space}</span></div>)}</div></Card>
          <Card><CardHeader><div><CardTitle>Border Radius</CardTitle><CardDescription>Small to large component rounding.</CardDescription></div></CardHeader><div className="grid grid-cols-4 gap-3">{radii.map((radius) => <div key={radius} className="grid aspect-square place-items-center border bg-background text-xs" style={{ borderRadius: radius }}>{radius}</div>)}</div></Card>
          <Card><CardHeader><div><CardTitle>Shadows</CardTitle><CardDescription>Elevation for panels, overlays, and modals.</CardDescription></div></CardHeader><div className="grid grid-cols-2 gap-4">{shadows.map((shadow) => <div key={shadow} className={`rounded-xl border bg-background p-5 ${shadow}`}>{shadow}</div>)}</div></Card>
          <Card><CardHeader><div><CardTitle>Breakpoints</CardTitle><CardDescription>Mobile-first responsive thresholds.</CardDescription></div></CardHeader><div className="flex flex-wrap gap-2">{breakpoints.map((item) => <Badge key={item} variant="neutral">{item}</Badge>)}</div></Card>
          <Card><CardHeader><div><CardTitle>Animation Tokens</CardTitle><CardDescription>Shared timing for micro interactions.</CardDescription></div></CardHeader><div className="grid gap-2">{["180ms base", "300ms drawer", "450ms page", "spring 260/22"].map((item) => <Badge key={item} variant="premium">{item}</Badge>)}</div></Card>
          <Card><CardHeader><div><CardTitle>Z-index Scale</CardTitle><CardDescription>Layering rules for navigation and overlays.</CardDescription></div></CardHeader><div className="grid gap-2">{zIndex.map((item) => <Badge key={item} variant="neutral">{item}</Badge>)}</div></Card>
        </div>
      </div>
    </>
  );
}
