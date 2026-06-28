"use client";

import { Check, Copy, DollarSign, Eye, Settings2 } from "lucide-react";
import { useMemo, useState } from "react";
import { StatCard } from "@/components/cards/stat-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle, GlassCard } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type SandboxComponent = "Button" | "Badge" | "StatCard" | "GlassCard";
type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "success" | "danger";
type ButtonSize = "sm" | "md" | "lg";
type BadgeVariant = "success" | "warning" | "danger" | "neutral" | "premium";

export function ComponentSandbox() {
  const [component, setComponent] = useState<SandboxComponent>("Button");
  const [label, setLabel] = useState("Launch Component");
  const [variant, setVariant] = useState<ButtonVariant>("primary");
  const [size, setSize] = useState<ButtonSize>("md");
  const [badgeVariant, setBadgeVariant] = useState<BadgeVariant>("premium");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [copied, setCopied] = useState(false);

  const code = useMemo(() => {
    if (component === "Button") {
      return `import { Button } from "@/components/ui/button";

<Button variant="${variant}" size="${size}" loading={${loading}} disabled={${disabled}}>
  ${label}
</Button>`;
    }
    if (component === "Badge") {
      return `import { Badge } from "@/components/ui/badge";

<Badge variant="${badgeVariant}">${label}</Badge>`;
    }
    if (component === "StatCard") {
      return `import { DollarSign } from "lucide-react";
import { StatCard } from "@/components/cards/stat-card";

<StatCard title="${label}" value="$128k" change="+18%" icon={DollarSign} />`;
    }
    return `import { GlassCard, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

<GlassCard>
  <CardHeader>
    <div>
      <CardTitle>${label}</CardTitle>
      <CardDescription>Premium reusable glass surface.</CardDescription>
    </div>
  </CardHeader>
</GlassCard>`;
  }, [badgeVariant, component, disabled, label, loading, size, variant]);

  function copyCode() {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[20rem_1fr]">
      <Card>
        <CardHeader>
          <div>
            <CardTitle className="flex items-center gap-2"><Settings2 className="size-5 text-primary" />Props Panel</CardTitle>
            <CardDescription>Adjust props and generate reusable JSX for product teams.</CardDescription>
          </div>
        </CardHeader>
        <div className="grid gap-4">
          <label className="grid gap-2 text-sm font-medium">Component<Select value={component} onValueChange={(value) => setComponent(value as SandboxComponent)} items={["Button", "Badge", "StatCard", "GlassCard"]} /></label>
          <label className="grid gap-2 text-sm font-medium">Label<Input value={label} onChange={(event) => setLabel(event.target.value)} /></label>
          {component === "Button" ? (
            <>
              <label className="grid gap-2 text-sm font-medium">Variant<Select value={variant} onValueChange={(value) => setVariant(value as ButtonVariant)} items={["primary", "secondary", "outline", "ghost", "success", "danger"]} /></label>
              <label className="grid gap-2 text-sm font-medium">Size<Select value={size} onValueChange={(value) => setSize(value as ButtonSize)} items={["sm", "md", "lg"]} /></label>
              <Toggle label="Loading" checked={loading} onChange={setLoading} />
              <Toggle label="Disabled" checked={disabled} onChange={setDisabled} />
            </>
          ) : null}
          {component === "Badge" ? <label className="grid gap-2 text-sm font-medium">Badge Variant<Select value={badgeVariant} onValueChange={(value) => setBadgeVariant(value as BadgeVariant)} items={["success", "warning", "danger", "neutral", "premium"]} /></label> : null}
        </div>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Live Sandbox</CardTitle>
            <CardDescription>Storybook-style live preview with generated code and copy support.</CardDescription>
          </div>
        </CardHeader>
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview"><Eye className="mr-1 size-3" />Preview</TabsTrigger>
            <TabsTrigger value="code"><Copy className="mr-1 size-3" />Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-5">
            <div className="grid min-h-80 place-items-center rounded-2xl border bg-background p-6">
              <Preview component={component} label={label} variant={variant} size={size} loading={loading} disabled={disabled} badgeVariant={badgeVariant} />
            </div>
          </TabsContent>
          <TabsContent value="code" className="mt-5">
            <pre className="min-h-80 overflow-x-auto rounded-2xl border bg-background p-5 text-sm text-muted">{code}</pre>
          </TabsContent>
        </Tabs>
        <Button className="mt-5" variant="secondary" onClick={copyCode}>
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          {copied ? "Copied JSX" : "Copy Generated Code"}
        </Button>
      </Card>
    </div>
  );
}

function Preview({
  component,
  label,
  variant,
  size,
  loading,
  disabled,
  badgeVariant,
}: {
  component: SandboxComponent;
  label: string;
  variant: ButtonVariant;
  size: ButtonSize;
  loading: boolean;
  disabled: boolean;
  badgeVariant: BadgeVariant;
}) {
  if (component === "Button") return <Button variant={variant} size={size} loading={loading} disabled={disabled}>{label}</Button>;
  if (component === "Badge") return <Badge variant={badgeVariant}>{label}</Badge>;
  if (component === "StatCard") return <div className="w-full max-w-sm"><StatCard title={label} value="$128k" change="+18%" icon={DollarSign} /></div>;
  return (
    <GlassCard className="w-full max-w-md">
      <CardHeader>
        <div>
          <CardTitle>{label}</CardTitle>
          <CardDescription>Premium reusable glass surface.</CardDescription>
        </div>
      </CardHeader>
      <p className="text-sm text-muted">Use this for AI panels, command surfaces, and modal previews.</p>
    </GlassCard>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (value: boolean) => void }) {
  return (
    <button type="button" onClick={() => onChange(!checked)} className="flex items-center justify-between rounded-xl border bg-background p-3 text-sm font-medium">
      {label}
      <span className={`flex h-6 w-11 items-center rounded-full p-1 transition ${checked ? "bg-primary" : "bg-muted/30"}`}>
        <span className={`size-4 rounded-full bg-white transition ${checked ? "translate-x-5" : ""}`} />
      </span>
    </button>
  );
}
