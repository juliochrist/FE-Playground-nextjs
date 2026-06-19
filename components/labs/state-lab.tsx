"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { useSettingsStore } from "@/hooks/use-settings-store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProductContext = createContext<{ product: string; setProduct: (value: string) => void } | null>(null);

export function StateLab() {
  const [localCount, setLocalCount] = useState(0);
  const [product, setProduct] = useState("TradeIntel");
  const contextValue = useMemo(() => ({ product, setProduct }), [product]);
  const { density, setDensity } = useSettingsStore();

  return (
    <ProductContext.Provider value={contextValue}>
      <div className="grid gap-6 xl:grid-cols-3">
        <Card><CardHeader><div><CardTitle>Local State: useState</CardTitle><CardDescription>Best for isolated component behavior.</CardDescription></div></CardHeader><p className="text-3xl font-bold">{localCount}</p><div className="mt-4 flex gap-2"><Button onClick={() => setLocalCount((value) => value + 1)}>Increment</Button><Button variant="secondary" onClick={() => setLocalCount(0)}>Reset</Button></div></Card>
        <ContextCard />
        <Card><CardHeader><div><CardTitle>Global State: Zustand</CardTitle><CardDescription>Persistent settings shared across the app.</CardDescription></div></CardHeader><Badge variant="premium">Density: {density}</Badge><div className="mt-4 flex flex-wrap gap-2">{(["compact", "comfortable", "spacious"] as const).map((item) => <Button key={item} variant={density === item ? "primary" : "secondary"} onClick={() => setDensity(item)}>{item}</Button>)}</div></Card>
        <Card className="xl:col-span-3"><CardHeader><div><CardTitle>Architecture Decision Guide</CardTitle><CardDescription>Use the smallest state scope that satisfies the workflow.</CardDescription></div></CardHeader><div className="grid gap-3 md:grid-cols-3"><Decision title="Local" body="Transient UI like tabs, counters, and input drafts." /><Decision title="Context" body="Scoped shared state like current workspace or product." /><Decision title="Zustand" body="Global persisted app preferences and cross-route state." /></div></Card>
      </div>
    </ProductContext.Provider>
  );
}

function ContextCard() {
  const context = useContext(ProductContext);
  if (!context) return null;
  return <Card><CardHeader><div><CardTitle>Shared State: Context API</CardTitle><CardDescription>Scoped provider shared by nested cards.</CardDescription></div></CardHeader><Badge variant="neutral">Product: {context.product}</Badge><div className="mt-4 flex flex-wrap gap-2">{["TradeIntel", "AI Career Navigator", "ClientPulse"].map((item) => <Button key={item} variant={context.product === item ? "primary" : "secondary"} onClick={() => context.setProduct(item)}>{item}</Button>)}</div></Card>;
}

function Decision({ title, body }: { title: string; body: string }) {
  return <div className="rounded-xl border bg-background p-4"><p className="font-semibold">{title}</p><p className="mt-2 text-sm leading-6 text-muted">{body}</p></div>;
}
