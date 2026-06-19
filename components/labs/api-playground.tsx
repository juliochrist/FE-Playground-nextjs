"use client";

import { RefreshCcw, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { EmptyState } from "@/components/feedback/empty-state";
import { SkeletonLoader } from "@/components/feedback/loading-patterns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const resources = {
  Users: [
    { id: "USR-001", name: "Julio", status: "Active", meta: "Design System Owner" },
    { id: "USR-002", name: "Alya", status: "Active", meta: "Frontend Engineer" },
    { id: "USR-003", name: "Raka", status: "Pending", meta: "Data Analyst" },
  ],
  Products: [
    { id: "PRD-001", name: "TradeIntel", status: "Active", meta: "Analytics" },
    { id: "PRD-002", name: "AI Career Navigator", status: "Active", meta: "AI SaaS" },
    { id: "PRD-003", name: "SmartPOS AI", status: "Pending", meta: "Commerce" },
  ],
  Orders: [
    { id: "ORD-001", name: "$2,400 Subscription", status: "Paid", meta: "Stripe" },
    { id: "ORD-002", name: "$980 Hardware", status: "Pending", meta: "POS" },
    { id: "ORD-003", name: "$420 AI Credits", status: "Failed", meta: "Usage" },
  ],
  Analytics: [
    { id: "ANL-001", name: "Conversion Rate", status: "Healthy", meta: "12.8%" },
    { id: "ANL-002", name: "Retention", status: "Healthy", meta: "84%" },
    { id: "ANL-003", name: "Churn Risk", status: "Watch", meta: "6 accounts" },
  ],
};

type Resource = keyof typeof resources;
type Mode = "success" | "loading" | "error" | "empty";

export function ApiPlayground() {
  const [resource, setResource] = useState<Resource>("Users");
  const [mode, setMode] = useState<Mode>("success");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const data = resources[resource];
  const filtered = useMemo(() => data.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())), [data, query]);
  const pageSize = 2;
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));

  return (
    <div className="grid gap-6 xl:grid-cols-[18rem_1fr]">
      <Card>
        <CardHeader><div><CardTitle>Mock Endpoint</CardTitle><CardDescription>No backend required. Simulate API behavior.</CardDescription></div></CardHeader>
        <div className="grid gap-3">
          <Select value={resource} onValueChange={(value) => { setResource(value as Resource); setPage(1); }} items={Object.keys(resources)} placeholder="Resource" />
          <Select value={mode} onValueChange={(value) => setMode(value as Mode)} items={["success", "loading", "error", "empty"]} placeholder="State" />
          <Button variant="secondary" onClick={() => setMode("loading")}><RefreshCcw className="size-4" />Simulate Loading</Button>
          <Button onClick={() => setMode("success")}>Retry Request</Button>
        </div>
      </Card>
      <Card>
        <CardHeader><div><CardTitle>{resource} API</CardTitle><CardDescription>Loading, error, empty, search, retry, and pagination states.</CardDescription></div></CardHeader>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 size-4 text-muted" />
          <Input className="pl-9" value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder={`Search ${resource.toLowerCase()}`} />
        </div>
        {mode === "loading" ? <SkeletonLoader /> : null}
        {mode === "error" ? <EmptyState icon={RefreshCcw} title="Request Failed" description="The simulated endpoint returned an error state." action="Retry" /> : null}
        {mode === "empty" ? <EmptyState icon={Search} title="No Records" description="The simulated endpoint returned an empty collection." action="Create Record" /> : null}
        {mode === "success" ? (
          <>
            <div className="grid gap-3">
              {paged.map((item) => <div key={item.id} className="flex items-center justify-between rounded-xl border bg-background p-4"><div><p className="font-semibold">{item.name}</p><p className="text-xs text-muted">{item.id} · {item.meta}</p></div><Badge variant={item.status.includes("Active") || item.status.includes("Healthy") || item.status.includes("Paid") ? "success" : item.status.includes("Failed") ? "danger" : "warning"}>{item.status}</Badge></div>)}
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-muted"><span>Page {page} of {pages}</span><div className="flex gap-2"><Button size="sm" variant="secondary" disabled={page === 1} onClick={() => setPage((value) => value - 1)}>Previous</Button><Button size="sm" variant="secondary" disabled={page === pages} onClick={() => setPage((value) => value + 1)}>Next</Button></div></div>
          </>
        ) : null}
      </Card>
    </div>
  );
}
