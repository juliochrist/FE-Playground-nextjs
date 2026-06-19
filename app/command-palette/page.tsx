import { CommandPaletteDemo } from "@/components/command/command-palette";
import { PageHeader } from "@/components/layouts/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CommandPalettePage() {
  return (
    <>
      <PageHeader eyebrow="Professional Navigation" title="Command Palette" description="Notion, Linear, and Vercel-style CMD+K search panel for fast product navigation." />
      <CommandPaletteDemo />
      <Card className="mt-6 max-w-xl">
        <CardHeader><div><CardTitle>Usage Notes</CardTitle><CardDescription>Press CMD+K or CTRL+K to open. Results are sourced from the shared navigation registry.</CardDescription></div></CardHeader>
      </Card>
    </>
  );
}
