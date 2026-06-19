import { CheckCircle2, Circle, GitBranch, Layers, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/layouts/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReverseEngineeringPage() {
  return (
    <>
      <PageHeader eyebrow="Premium UI Inspiration" title="Original Interaction Pattern Studies" description="High-quality SaaS patterns inspired by premium products without copying branding or proprietary UI." />
      <div className="grid gap-6 xl:grid-cols-2">
        <Card><CardHeader><div><CardTitle>Pricing Pattern</CardTitle><CardDescription>Premium pricing comparison with clear hierarchy.</CardDescription></div></CardHeader><div className="grid gap-4 md:grid-cols-3">{["Build", "Scale", "Platform"].map((plan, index) => <div key={plan} className={`rounded-2xl border bg-background p-4 ${index === 1 ? "ring-2 ring-primary" : ""}`}><Badge variant={index === 1 ? "premium" : "neutral"}>{plan}</Badge><p className="mt-4 text-3xl font-bold">${[29, 79, 149][index]}</p><Button className="mt-4 w-full" variant={index === 1 ? "primary" : "outline"}>Select</Button></div>)}</div></Card>
        <Card><CardHeader><div><CardTitle>Issue Cards</CardTitle><CardDescription>Linear-style density, status, keyboard-friendly rows.</CardDescription></div></CardHeader><div className="grid gap-3">{["Add API retry state", "Refine chart contrast", "Audit keyboard focus"].map((issue, index) => <div key={issue} className="flex items-center gap-3 rounded-xl border bg-background p-3"><Circle className="size-4 text-muted" /><span className="text-sm font-medium">{issue}</span><Badge className="ml-auto" variant={index === 0 ? "warning" : "neutral"}>ENG-{index + 12}</Badge></div>)}</div></Card>
        <Card><CardHeader><div><CardTitle>Workspace Sidebar</CardTitle><CardDescription>Notion-style nested information architecture.</CardDescription></div></CardHeader><div className="grid gap-2 rounded-2xl border bg-background p-3">{["Julio UI Kit", "Design Tokens", "Components", "Engineering Labs"].map((item, index) => <div key={item} className="flex items-center gap-3 rounded-xl p-2 hover:bg-card"><Layers className="size-4 text-primary" /><span className="text-sm">{item}</span>{index === 0 ? <Badge className="ml-auto" variant="premium">root</Badge> : null}</div>)}</div></Card>
        <Card><CardHeader><div><CardTitle>Deployment Dashboard</CardTitle><CardDescription>Vercel-style deployment status and activity flow.</CardDescription></div></CardHeader><div className="grid gap-3"><div className="flex items-center gap-3 rounded-xl border bg-success/10 p-3 text-success"><CheckCircle2 className="size-4" /><span className="font-medium">Production deployed</span></div><div className="flex items-center gap-3 rounded-xl border bg-background p-3"><GitBranch className="size-4 text-primary" /><span className="text-sm">main · 23 static routes · build passed</span></div><Button><Sparkles className="size-4" />Promote Preview</Button></div></Card>
      </div>
    </>
  );
}
