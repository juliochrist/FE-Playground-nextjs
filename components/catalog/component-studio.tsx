"use client";

import { Check, Code2, Copy, Eye, Heart, Tag } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const examples = [
  {
    name: "KPI Card",
    tags: ["dashboard", "analytics", "saas"],
    code: `<StatCard title="Revenue" value="$128k" change="+18%" icon={DollarSign} />`,
  },
  {
    name: "Command Button",
    tags: ["forms", "actions", "accessibility"],
    code: `<Button variant="primary" loading={isSaving}>Save Changes</Button>`,
  },
  {
    name: "Status Badge",
    tags: ["tables", "feedback", "semantic"],
    code: `<Badge variant="success">Active</Badge>`,
  },
];

export function ComponentStudio() {
  const [copied, setCopied] = useState("");
  const [favorites, setFavorites] = useState<string[]>(["KPI Card"]);
  const [recent, setRecent] = useState<string[]>(["Command Button"]);

  function copyCode(name: string, code: string) {
    navigator.clipboard?.writeText(code);
    setCopied(name);
    setRecent((items) => [name, ...items.filter((item) => item !== name)].slice(0, 4));
  }

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Component Studio</CardTitle>
          <CardDescription>Usage examples, code preview tabs, live previews, favorites, recently viewed components, and tags.</CardDescription>
        </div>
      </CardHeader>
      <div className="mb-4 flex flex-wrap gap-2 text-sm">
        <Badge variant="premium">Favorites: {favorites.join(", ")}</Badge>
        <Badge variant="neutral">Recently viewed: {recent.join(", ")}</Badge>
      </div>
      <div className="grid gap-4 xl:grid-cols-3">
        {examples.map((example) => {
          const favorite = favorites.includes(example.name);
          return (
            <div key={example.name} className="rounded-2xl border bg-background p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold">{example.name}</h3>
                <Button size="icon" variant="ghost" aria-label={favorite ? "Remove favorite" : "Add favorite"} onClick={() => setFavorites((items) => favorite ? items.filter((item) => item !== example.name) : [...items, example.name])}>
                  <Heart className={`size-4 ${favorite ? "fill-accent text-accent" : ""}`} />
                </Button>
              </div>
              <div className="mb-3 flex flex-wrap gap-2">{example.tags.map((tag) => <Badge key={tag} variant="neutral"><Tag className="mr-1 size-3" />{tag}</Badge>)}</div>
              <Tabs defaultValue="preview">
                <TabsList><TabsTrigger value="preview"><Eye className="mr-1 size-3" />Preview</TabsTrigger><TabsTrigger value="code"><Code2 className="mr-1 size-3" />Code</TabsTrigger></TabsList>
                <TabsContent value="preview" className="mt-3">
                  <div className="rounded-xl border bg-card p-4">
                    {example.name === "KPI Card" ? <><p className="text-sm text-muted">Revenue</p><p className="text-3xl font-bold">$128k</p><Badge className="mt-2" variant="success">+18%</Badge></> : null}
                    {example.name === "Command Button" ? <Button>Save Changes</Button> : null}
                    {example.name === "Status Badge" ? <Badge variant="success">Active</Badge> : null}
                  </div>
                </TabsContent>
                <TabsContent value="code" className="mt-3">
                  <pre className="overflow-x-auto rounded-xl border bg-card p-3 text-xs text-muted">{example.code}</pre>
                </TabsContent>
              </Tabs>
              <Button className="mt-3 w-full" variant="secondary" onClick={() => copyCode(example.name, example.code)}>
                {copied === example.name ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copied === example.name ? "Copied" : "Copy Component"}
              </Button>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
