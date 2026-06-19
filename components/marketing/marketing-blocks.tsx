import { Check, Quote, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function MarketingBlocks() {
  return (
    <div className="grid gap-6">
      <section className="overflow-hidden rounded-2xl border bg-card p-8">
        <Badge variant="premium">Landing Hero</Badge>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-normal">Build reusable SaaS interfaces with Julio UI Kit.</h2>
        <p className="mt-4 max-w-2xl text-muted">Hero, CTA, pricing, testimonials, FAQ, and features grid patterns for future product launches.</p>
        <div className="mt-6 flex flex-wrap gap-3"><Button><Rocket className="size-4" />Start Building</Button><Button variant="outline">View Components</Button></div>
      </section>
      <div className="grid gap-6 xl:grid-cols-3">
        {["Design tokens", "Reusable dashboards", "AI-ready components"].map((feature) => <Card key={feature}><CardHeader><div><CardTitle>{feature}</CardTitle><CardDescription>Feature grid block for marketing pages.</CardDescription></div></CardHeader></Card>)}
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        {["Starter", "Pro", "Platform"].map((plan, index) => <Card key={plan}><CardHeader><div><CardTitle>{plan}</CardTitle><CardDescription>Pricing card component.</CardDescription></div></CardHeader><p className="text-3xl font-bold">${[19, 49, 99][index]}</p><Button className="mt-4" variant={index === 1 ? "primary" : "outline"}>Choose Plan</Button></Card>)}
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <Card><CardHeader><div><CardTitle>Testimonials</CardTitle><CardDescription>Social proof pattern.</CardDescription></div></CardHeader><div className="flex gap-3"><Quote className="size-5 text-accent" /><p className="text-sm leading-6 text-muted">This component lab makes every product feel consistent from day one.</p></div></Card>
        <Card><CardHeader><div><CardTitle>FAQ</CardTitle><CardDescription>Reusable disclosure-ready layout.</CardDescription></div></CardHeader><div className="grid gap-3">{["Can I use this in TradeIntel?", "Does it support dark mode?", "Can I export patterns?"].map((q) => <div key={q} className="flex gap-3 rounded-xl border bg-background p-3"><Check className="size-4 text-success" /><span className="text-sm">{q}</span></div>)}</div></Card>
      </div>
      <section className="rounded-2xl border bg-primary p-8 text-white">
        <h2 className="text-3xl font-bold">CTA Section</h2>
        <p className="mt-3 opacity-80">A reusable conversion band for product landing pages.</p>
        <Button className="mt-5 bg-white text-primary hover:bg-white/90">Ship the Page</Button>
      </section>
    </div>
  );
}
