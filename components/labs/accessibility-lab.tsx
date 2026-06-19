"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AlertCircle, CheckCircle2, ChevronDown, Keyboard, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function AccessibilityLab() {
  const [email, setEmail] = useState("");
  const invalid = email.length > 0 && !email.includes("@");

  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <Card><CardHeader><div><CardTitle>Keyboard Navigation</CardTitle><CardDescription>Tab through controls and verify visible focus states.</CardDescription></div></CardHeader><div className="flex flex-wrap gap-3"><Button><Keyboard className="size-4" />Primary Action</Button><Button variant="secondary">Secondary Action</Button><Button variant="outline">Outline Action</Button></div></Card>
      <Card><CardHeader><div><CardTitle>Accessible Form Validation</CardTitle><CardDescription>Labels, aria-invalid, described-by, and readable error text.</CardDescription></div></CardHeader><label className="grid gap-2 text-sm font-medium" htmlFor="a11y-email">Email<Input id="a11y-email" aria-invalid={invalid} aria-describedby="a11y-email-error" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" /></label>{invalid ? <p id="a11y-email-error" className="mt-2 flex items-center gap-2 text-sm text-danger"><AlertCircle className="size-4" />Enter a valid email address.</p> : <p className="mt-2 flex items-center gap-2 text-sm text-success"><CheckCircle2 className="size-4" />Validation message area is reserved.</p>}</Card>
      <AccessibleDialog />
      <Card><CardHeader><div><CardTitle>Accessible Dropdown Menu</CardTitle><CardDescription>Use clear trigger text, menu roles, and keyboard-friendly items.</CardDescription></div></CardHeader><button className="flex h-11 w-full items-center justify-between rounded-xl border bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><span>Choose component type</span><ChevronDown className="size-4" /></button><div className="mt-3 grid gap-2 rounded-xl border bg-background p-2 text-sm"><button className="rounded-lg p-2 text-left hover:bg-card focus-visible:ring-2 focus-visible:ring-primary">Chart</button><button className="rounded-lg p-2 text-left hover:bg-card focus-visible:ring-2 focus-visible:ring-primary">Form</button><button className="rounded-lg p-2 text-left hover:bg-card focus-visible:ring-2 focus-visible:ring-primary">Table</button></div></Card>
      <Card><CardHeader><div><CardTitle>Color Contrast</CardTitle><CardDescription>Semantic states stay readable in light and dark modes.</CardDescription></div></CardHeader><div className="grid gap-3"><div className="rounded-xl bg-primary p-4 font-semibold text-white">Primary on white text</div><div className="rounded-xl bg-success p-4 font-semibold text-white">Success on white text</div><div className="rounded-xl border bg-background p-4 text-foreground">Foreground on background</div></div></Card>
      <Card><CardHeader><div><CardTitle>Screen Reader Labels</CardTitle><CardDescription>Icon-only controls include aria-label and descriptive context.</CardDescription></div></CardHeader><div className="flex gap-3"><Button size="icon" aria-label="Approve request"><CheckCircle2 className="size-4" /></Button><Button size="icon" variant="danger" aria-label="Reject request"><X className="size-4" /></Button></div></Card>
    </div>
  );
}

function AccessibleDialog() {
  return (
    <Card>
      <CardHeader><div><CardTitle>Accessible Dialog</CardTitle><CardDescription>Radix Dialog handles focus trap, aria labels, and escape behavior.</CardDescription></div></CardHeader>
      <Dialog.Root>
        <Dialog.Trigger asChild><Button>Open Dialog</Button></Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-40 bg-background/60 backdrop-blur-md" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border bg-card p-5 shadow-2xl">
            <Dialog.Title className="font-semibold">Accessible Dialog Example</Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-muted">Focus is moved into the dialog, escape closes it, and the title/description are announced.</Dialog.Description>
            <Dialog.Close asChild><Button className="mt-5">Close</Button></Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Card>
  );
}
