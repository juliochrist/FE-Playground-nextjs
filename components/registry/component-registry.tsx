"use client";

import { Check, Copy, Search, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { registryComponents, registryStatusNotes, type ComponentMaturity } from "@/data/component-registry";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const maturityVariant: Record<ComponentMaturity, "success" | "warning" | "neutral" | "danger"> = {
  Draft: "neutral",
  Beta: "warning",
  Stable: "success",
  Deprecated: "danger",
};

export function ComponentRegistry() {
  const [query, setQuery] = useState("");
  const [maturity, setMaturity] = useState("All");
  const [copied, setCopied] = useState("");

  const filtered = useMemo(() => {
    return registryComponents.filter((component) => {
      const matchesQuery = [component.name, component.category, component.owner, component.importPath, ...component.tags]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesMaturity = maturity === "All" || component.maturity === maturity;
      return matchesQuery && matchesMaturity;
    });
  }, [maturity, query]);

  function copyImport(name: string, importPath: string) {
    navigator.clipboard?.writeText(`import { ${name} } from "${importPath}";`);
    setCopied(name);
    setTimeout(() => setCopied(""), 1400);
  }

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-4">
        {(["Stable", "Beta", "Draft", "Deprecated"] as ComponentMaturity[]).map((status) => (
          <Card key={status}>
            <Badge variant={maturityVariant[status]}>{status}</Badge>
            <p className="mt-3 text-3xl font-bold">{registryComponents.filter((component) => component.maturity === status).length}</p>
            <p className="mt-1 text-sm text-muted">{registryStatusNotes[status]}</p>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Registry Controls</CardTitle>
            <CardDescription>Search by component, owner, tag, category, or import path. Filter by maturity before adopting a component.</CardDescription>
          </div>
        </CardHeader>
        <div className="grid gap-3 md:grid-cols-[1fr_14rem]">
          <div className="relative">
            <Search className="absolute left-3 top-3 size-4 text-muted" />
            <Input className="pl-9" placeholder="Search registry" value={query} onChange={(event) => setQuery(event.target.value)} />
          </div>
          <Select value={maturity} onValueChange={setMaturity} items={["All", "Stable", "Beta", "Draft", "Deprecated"]} placeholder="Maturity" />
        </div>
      </Card>

      <div className="grid gap-4">
        {filtered.map((component) => (
          <Card key={component.name}>
            <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold">{component.name}</h3>
                  <Badge variant={maturityVariant[component.maturity]}>{component.maturity}</Badge>
                  <Badge variant="neutral">{component.category}</Badge>
                </div>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{component.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {component.tags.map((tag) => <Badge key={tag} variant="premium">{tag}</Badge>)}
                </div>
              </div>
              <div className="grid gap-2 text-sm lg:min-w-72">
                <div className="rounded-xl border bg-background p-3">
                  <p className="text-xs uppercase text-muted">Owner</p>
                  <p className="font-medium">{component.owner}</p>
                </div>
                <div className="rounded-xl border bg-background p-3">
                  <p className="text-xs uppercase text-muted">Usage</p>
                  <p className="font-medium">{component.usage} references</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-3 rounded-xl border bg-background p-3 md:flex-row md:items-center">
              <code className="min-w-0 flex-1 overflow-x-auto text-xs text-muted">{component.importPath}</code>
              <Button size="sm" variant="secondary" onClick={() => copyImport(component.name, component.importPath)}>
                {copied === component.name ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copied === component.name ? "Copied" : "Copy Import"}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div>
            <CardTitle className="flex items-center gap-2"><ShieldCheck className="size-5 text-success" />Adoption Checklist</CardTitle>
            <CardDescription>Before promoting a component to Stable, verify responsive behavior, keyboard access, light/dark mode, loading/empty/error states, and API boundaries.</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
