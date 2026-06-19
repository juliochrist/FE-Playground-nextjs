"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bell, ChevronDown, Download, Loader2, Minus, Plus, Send, Star, ThumbsUp, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function MicroInteractionsLab() {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      <AnimatedButton />
      <CounterCard />
      <ExpandablePanel />
      <ToggleFeedback />
      <ReactionPicker />
      <ProgressDownload />
      <InlineValidation />
      <HoverToolbar />
      <PageTransitionPreview />
    </div>
  );
}

function AnimatedButton() {
  const [sent, setSent] = useState(false);
  return (
    <Card>
      <CardHeader><div><CardTitle>Animated Button</CardTitle><CardDescription>Click feedback for command actions.</CardDescription></div></CardHeader>
      <motion.button
        whileTap={{ scale: 0.94 }}
        whileHover={{ y: -2 }}
        onClick={() => {
          setSent(true);
          setTimeout(() => setSent(false), 1200);
        }}
        className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-white shadow-lg shadow-primary/20"
      >
        {sent ? <ThumbsUp className="size-4" /> : <Send className="size-4" />}
        {sent ? "Sent" : "Send Update"}
      </motion.button>
    </Card>
  );
}

function CounterCard() {
  const [value, setValue] = useState(128);
  return (
    <Card>
      <CardHeader><div><CardTitle>Number Counter</CardTitle><CardDescription>Metric feedback for KPI cards.</CardDescription></div></CardHeader>
      <motion.p key={value} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-bold">${value}k</motion.p>
      <div className="mt-4 flex gap-2"><Button size="sm" variant="secondary" onClick={() => setValue((item) => item - 4)}><Minus className="size-4" /></Button><Button size="sm" onClick={() => setValue((item) => item + 4)}><Plus className="size-4" /></Button></div>
    </Card>
  );
}

function ExpandablePanel() {
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <CardHeader><div><CardTitle>Expand / Collapse</CardTitle><CardDescription>Micro animation for settings and FAQs.</CardDescription></div></CardHeader>
      <button className="flex w-full items-center justify-between rounded-xl border bg-background p-3 text-sm font-medium" onClick={() => setOpen((value) => !value)}>
        Component details <motion.span animate={{ rotate: open ? 180 : 0 }}><ChevronDown className="size-4" /></motion.span>
      </button>
      <AnimatePresence>
        {open ? <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="pt-3 text-sm leading-6 text-muted">Use this for accordions, filter panels, and dense admin settings.</p></motion.div> : null}
      </AnimatePresence>
    </Card>
  );
}

function ToggleFeedback() {
  const [enabled, setEnabled] = useState(true);
  return (
    <Card>
      <CardHeader><div><CardTitle>Toggle Feedback</CardTitle><CardDescription>Animated binary setting with instant state.</CardDescription></div></CardHeader>
      <button className="flex w-full items-center justify-between rounded-xl border bg-background p-4" onClick={() => setEnabled((value) => !value)}>
        <span className="text-sm font-medium">Premium motion</span>
        <motion.span className={`flex h-7 w-12 items-center rounded-full p-1 ${enabled ? "bg-primary" : "bg-muted/30"}`}>
          <motion.span layout className="size-5 rounded-full bg-white" style={{ marginLeft: enabled ? 20 : 0 }} />
        </motion.span>
      </button>
      <Badge className="mt-3" variant={enabled ? "success" : "neutral"}>{enabled ? "Enabled" : "Disabled"}</Badge>
    </Card>
  );
}

function ReactionPicker() {
  const [selected, setSelected] = useState("Fast");
  return (
    <Card>
      <CardHeader><div><CardTitle>Reaction Picker</CardTitle><CardDescription>Small delight for feedback surfaces.</CardDescription></div></CardHeader>
      <div className="flex flex-wrap gap-2">
        {["Fast", "Useful", "Clean"].map((item) => (
          <motion.button key={item} whileTap={{ scale: 0.9 }} onClick={() => setSelected(item)} className={`rounded-full border px-3 py-2 text-sm ${selected === item ? "bg-primary text-white" : "bg-background"}`}>
            <Star className="mr-1 inline size-3" />{item}
          </motion.button>
        ))}
      </div>
    </Card>
  );
}

function ProgressDownload() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (progress === 0 || progress >= 100) return;
    const timer = setTimeout(() => setProgress((value) => Math.min(value + 20, 100)), 250);
    return () => clearTimeout(timer);
  }, [progress]);
  return (
    <Card>
      <CardHeader><div><CardTitle>Progress Action</CardTitle><CardDescription>Download/export feedback pattern.</CardDescription></div></CardHeader>
      <Button onClick={() => setProgress(20)}>{progress > 0 && progress < 100 ? <Loader2 className="size-4 animate-spin" /> : <Download className="size-4" />}{progress === 100 ? "Complete" : "Export CSV"}</Button>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted/20"><motion.div className="h-full bg-primary" animate={{ width: `${progress}%` }} /></div>
    </Card>
  );
}

function InlineValidation() {
  const [active, setActive] = useState(false);
  return (
    <Card>
      <CardHeader><div><CardTitle>Inline Validation</CardTitle><CardDescription>Subtle success/error feedback near forms.</CardDescription></div></CardHeader>
      <Button variant={active ? "success" : "secondary"} onClick={() => setActive((value) => !value)}>{active ? "Valid" : "Validate"}</Button>
      <AnimatePresence>{active ? <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-3 text-sm text-success">Field looks good.</motion.p> : null}</AnimatePresence>
    </Card>
  );
}

function HoverToolbar() {
  return (
    <Card>
      <CardHeader><div><CardTitle>Hover Toolbar</CardTitle><CardDescription>Reveal actions without crowding cards.</CardDescription></div></CardHeader>
      <div className="group rounded-xl border bg-background p-4">
        <p className="font-medium">AI Insight Card</p>
        <p className="mt-1 text-sm text-muted">Hover to show actions.</p>
        <div className="mt-4 flex translate-y-2 gap-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
          <Button size="sm" variant="secondary"><Bell className="size-4" />Watch</Button>
          <Button size="sm"><Zap className="size-4" />Run</Button>
        </div>
      </div>
    </Card>
  );
}

function PageTransitionPreview() {
  const [step, setStep] = useState(0);
  const steps = ["Overview", "Details", "Publish"];
  return (
    <Card>
      <CardHeader><div><CardTitle>Page Transition</CardTitle><CardDescription>Small route-level transition preview.</CardDescription></div></CardHeader>
      <div className="overflow-hidden rounded-xl border bg-background p-4">
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>
            <p className="text-lg font-bold">{steps[step]}</p>
            <p className="text-sm text-muted">Transition state {step + 1} of 3.</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <Button className="mt-4" variant="secondary" onClick={() => setStep((value) => (value + 1) % steps.length)}>Next State</Button>
    </Card>
  );
}
