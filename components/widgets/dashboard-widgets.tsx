import { Activity, ArrowUpRight, CheckCircle2, DollarSign, TrendingUp, Users } from "lucide-react";
import { StatCard } from "@/components/cards/stat-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardWidgets() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Revenue Card" value="$128k" change="+18%" icon={DollarSign} />
        <StatCard title="KPI Card" value="97.4%" change="+4%" icon={CheckCircle2} />
        <StatCard title="User Growth" value="8.2k" change="+12%" icon={Users} />
        <StatCard title="Progress" value="74%" change="+9%" icon={TrendingUp} />
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        <Card>
          <CardHeader><div><CardTitle>Activity Feed</CardTitle><CardDescription>Reusable timeline widget.</CardDescription></div></CardHeader>
          <div className="grid gap-3">
            {["New TradeIntel chart added", "AI Career Navigator auth flow updated", "ClientPulse table exported"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border bg-background p-3"><Activity className="size-4 text-primary" /><span className="text-sm">{item}</span></div>
            ))}
          </div>
        </Card>
        <Card>
          <CardHeader><div><CardTitle>Recent Transactions</CardTitle><CardDescription>Finance-ready list block.</CardDescription></div></CardHeader>
          <div className="grid gap-3">
            {["$2,400 SaaS Subscription", "$980 POS Hardware", "$420 AI Credits"].map((item) => (
              <div key={item} className="flex justify-between rounded-xl border bg-background p-3 text-sm"><span>{item}</span><ArrowUpRight className="size-4 text-success" /></div>
            ))}
          </div>
        </Card>
        <Card>
          <CardHeader><div><CardTitle>Progress Tracker</CardTitle><CardDescription>Project or onboarding progress.</CardDescription></div></CardHeader>
          <div className="grid gap-3">
            {["Design", "Build", "QA", "Ship"].map((item, index) => (
              <div key={item} className="flex items-center gap-3"><div className={`size-3 rounded-full ${index < 3 ? "bg-success" : "bg-muted/30"}`} /><span className="text-sm">{item}</span>{index < 3 ? <Badge variant="success">done</Badge> : null}</div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
