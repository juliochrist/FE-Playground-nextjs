import { ArrowRight, Database, FolderTree, Gauge, GitBranch, Layers, Palette, Server, Share2 } from "lucide-react";
import { PageHeader } from "@/components/layouts/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const strategies = [
  { title: "Folder Structure", icon: FolderTree, body: "App routes own page composition. components/* holds reusable primitives, labs, charts, tables, forms, navigation, and layouts." },
  { title: "Component Strategy", icon: Layers, body: "Build prop-driven components first, then compose route demos from reusable primitives and product-ready patterns." },
  { title: "Design System Strategy", icon: Palette, body: "Semantic CSS variables power light mode, dark mode, theme presets, density, motion, and radius controls." },
  { title: "State Management", icon: Share2, body: "Use local state for isolated UI, Context for scoped workflows, and Zustand for persistent global settings." },
  { title: "Data Fetching", icon: Database, body: "Server Components by default, client state machines for demos, mocked API boundaries until real endpoints exist." },
  { title: "Performance", icon: Gauge, body: "Dynamic imports for heavy modules, skeleton loading, memoized data transforms, and virtualized large lists." },
  { title: "Deployment", icon: GitBranch, body: "Static routes where possible, production build verification, environment-aware API and theme configuration." },
  { title: "Server Boundaries", icon: Server, body: "Client components only where interaction, browser APIs, or Framer Motion are required." },
];

export default function ArchitecturePage() {
  return (
    <>
      <PageHeader eyebrow="Frontend Architecture" title="Engineering Strategy" description="Documentation for how this playground is structured as an internal frontend platform." />
      <div className="grid gap-6 xl:grid-cols-2">
        {strategies.map((item) => {
          const Icon = item.icon;
          return <Card key={item.title}><CardHeader><div><div className="mb-3 grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon className="size-5" /></div><CardTitle>{item.title}</CardTitle><CardDescription>{item.body}</CardDescription></div></CardHeader></Card>;
        })}
      </div>
      <Card className="mt-6">
        <CardHeader><div><CardTitle>Architecture Flow</CardTitle><CardDescription>How reusable UI travels from lab to product.</CardDescription></div></CardHeader>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          {["Token", "Primitive", "Pattern", "Route Demo", "Product"].map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <Badge variant="premium">{item}</Badge>
              {index < 4 ? <ArrowRight className="hidden size-4 text-muted md:block" /> : null}
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
