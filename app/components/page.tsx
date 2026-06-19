import { Bell, CreditCard, Search, User } from "lucide-react";
import { ComponentStudio } from "@/components/catalog/component-studio";
import { EmptyState } from "@/components/feedback/empty-state";
import { LoadingSpinner, SkeletonLoader } from "@/components/feedback/loading-patterns";
import { PageHeader } from "@/components/layouts/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle, GlassCard } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const code = `<Button variant="primary" size="md" loading={isSaving}>
  Save Component
</Button>`;

export default function ComponentsPage() {
  return (
    <>
      <PageHeader eyebrow="Component Laboratory" title="Reusable UI Components" description="Preview, variants, code examples, and usage notes for the primitives that power every Julio product." />
      <div className="grid gap-6">
        <ComponentStudio />
        <Card>
          <CardHeader><div><CardTitle>Buttons</CardTitle><CardDescription>Primary, secondary, outline, ghost, success, danger, loading, disabled, and three sizes.</CardDescription></div></CardHeader>
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button><Button variant="success">Success</Button><Button variant="danger">Danger</Button><Button loading>Loading</Button><Button disabled>Disabled</Button><Button size="sm">Small</Button><Button size="lg">Large</Button>
          </div>
          <pre className="mt-5 overflow-x-auto rounded-xl border bg-background p-4 text-sm text-muted">{code}</pre>
          <p className="mt-3 text-sm text-muted">Usage: use command buttons for clear actions across dashboard, CRM, POS, and AI interfaces.</p>
        </Card>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card><CardHeader><div><CardTitle>Stat Card</CardTitle><CardDescription>Metric display with trend state.</CardDescription></div></CardHeader><p className="text-4xl font-bold">$128k</p><Badge variant="success" className="mt-3">+18.4%</Badge></Card>
          <GlassCard><CardHeader><div><CardTitle>Glass Card</CardTitle><CardDescription>Premium SaaS surface.</CardDescription></div></CardHeader><p className="text-sm text-muted">Reusable for AI panels, command centers, and modal previews.</p></GlassCard>
          <Card><CardHeader><div><CardTitle>AI Insight Card</CardTitle><CardDescription>Pattern for product intelligence.</CardDescription></div></CardHeader><p className="text-sm leading-6 text-muted">Revenue retention is trending up while onboarding friction decreased 12%.</p></Card>
          <Card><CardHeader><div><CardTitle>Profile Card</CardTitle><CardDescription>User or account summary.</CardDescription></div></CardHeader><div className="flex items-center gap-3"><div className="grid size-12 place-items-center rounded-2xl bg-accent text-white"><User className="size-5" /></div><div><p className="font-semibold">Julio Product Lab</p><p className="text-sm text-muted">Design System Owner</p></div></div></Card>
          <Card><CardHeader><div><CardTitle>Pricing Card</CardTitle><CardDescription>Reusable plan display.</CardDescription></div></CardHeader><p className="text-3xl font-bold">$49<span className="text-sm text-muted">/mo</span></p><Button className="mt-4" variant="outline">Select</Button></Card>
          <Card><CardHeader><div><CardTitle>KPI Card</CardTitle><CardDescription>Operational status.</CardDescription></div></CardHeader><p className="text-3xl font-bold">98.7%</p><Badge variant="premium" className="mt-3">Premium</Badge></Card>
        </div>
        <Card>
          <CardHeader><div><CardTitle>Badges and Inputs</CardTitle><CardDescription>Semantic states and form-ready controls.</CardDescription></div></CardHeader>
          <div className="mb-5 flex flex-wrap gap-2"><Badge variant="success">Success</Badge><Badge variant="warning">Warning</Badge><Badge variant="danger">Danger</Badge><Badge variant="neutral">Neutral</Badge><Badge variant="premium">Premium</Badge></div>
          <div className="grid gap-3 md:grid-cols-3"><Input placeholder="Text input" /><Input placeholder="Search input" /><Input type="password" placeholder="Password" /><Select items={["TradeIntel", "SmartPOS AI", "ClientPulse CRM"]} placeholder="Select product" /><Input placeholder="Multi select tokens" /><Input type="date" /></div>
        </Card>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card><CardHeader><div><CardTitle>Toast</CardTitle><CardDescription>Feedback event pattern.</CardDescription></div></CardHeader><div className="rounded-xl border bg-background p-3 text-sm">Component saved to registry.</div></Card>
          <Card><CardHeader><div><CardTitle>Alert</CardTitle><CardDescription>Inline risk and status.</CardDescription></div></CardHeader><div className="rounded-xl border border-danger/20 bg-danger/10 p-3 text-sm text-danger">Missing dark-mode QA.</div></Card>
          <EmptyState icon={Bell} title="Empty State" description="Reusable blank state with action support." action="Create Component" />
        </div>
        <div className="grid gap-6 lg:grid-cols-2"><SkeletonLoader /><Card><CardHeader><div><CardTitle>Loading Spinner</CardTitle><CardDescription>Compact async state.</CardDescription></div></CardHeader><LoadingSpinner /></Card></div>
        <Card><CardHeader><div><CardTitle>Navigation Components</CardTitle><CardDescription>Sidebar, drawer, top navigation, bottom navigation, and breadcrumbs are implemented in the app shell.</CardDescription></div></CardHeader><div className="flex flex-wrap gap-3"><Button variant="secondary"><Search className="size-4" />Top Nav</Button><Button variant="secondary"><CreditCard className="size-4" />Bottom Nav</Button></div></Card>
      </div>
    </>
  );
}
