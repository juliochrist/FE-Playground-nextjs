import { Bot, Lightbulb, Loader2, Send, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function AiComponents() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <Card>
        <CardHeader><div><CardTitle>AI Chat</CardTitle><CardDescription>Mock assistant surface for product copilots.</CardDescription></div></CardHeader>
        <div className="grid gap-4">
          <Message side="left" text="What should I improve in my dashboard portfolio?" />
          <Message side="right" text="Prioritize advanced tables, chart variety, and real empty states." />
          <div className="rounded-2xl border bg-primary/10 p-4 text-primary">
            <div className="flex items-center gap-2 font-semibold"><Loader2 className="size-4 animate-spin" />AI Loading State</div>
            <p className="mt-2 text-sm opacity-80">Generating recruiter-friendly suggestions...</p>
          </div>
          <div className="flex gap-2"><Input placeholder="Ask the AI playground" /><Button size="icon" aria-label="Send prompt"><Send className="size-4" /></Button></div>
        </div>
      </Card>
      <div className="grid gap-6">
        <Card><CardHeader><div><CardTitle>Prompt Input</CardTitle><CardDescription>Reusable prompt composer with action affordance.</CardDescription></div></CardHeader><div className="flex gap-2"><Input placeholder="Generate a CRM dashboard" /><Button><Sparkles className="size-4" />Generate</Button></div></Card>
        <Card><CardHeader><div><CardTitle>Response Card</CardTitle><CardDescription>Structured AI answer display.</CardDescription></div></CardHeader><p className="text-sm leading-6 text-muted">Suggested layout: KPI strip, conversion funnel, advanced table, and AI insight panel.</p></Card>
        <Card><CardHeader><div><CardTitle>AI Suggestion Cards</CardTitle><CardDescription>Small recommendation blocks.</CardDescription></div></CardHeader><div className="grid gap-3">{["Add heatmap to analytics", "Use command palette for navigation", "Add export CSV to data tables"].map((item) => <div key={item} className="flex gap-3 rounded-xl border bg-background p-3"><Lightbulb className="size-4 text-accent" /><span className="text-sm">{item}</span></div>)}</div></Card>
      </div>
    </div>
  );
}

function Message({ side, text }: { side: "left" | "right"; text: string }) {
  return (
    <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-md rounded-2xl border p-4 ${side === "right" ? "bg-primary text-white" : "bg-background"}`}>
        <div className="mb-2 flex items-center gap-2 text-sm font-semibold"><Bot className="size-4" />AI Playground <Badge variant={side === "right" ? "neutral" : "premium"}>mock</Badge></div>
        <p className="text-sm leading-6">{text}</p>
      </div>
    </div>
  );
}
