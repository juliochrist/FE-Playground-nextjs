"use client";

import { Bell, Check, ChevronRight, Command, Layers, MousePointer2, PanelTop, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const patterns = [
  { name: "Fade In", props: { initial: { opacity: 0 }, animate: { opacity: 1 } } },
  { name: "Slide Up", props: { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } } },
  { name: "Slide Down", props: { initial: { opacity: 0, y: -24 }, animate: { opacity: 1, y: 0 } } },
  { name: "Scale In", props: { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 } } },
];

export function MotionShowcase() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {patterns.map((pattern, index) => (
          <motion.div key={pattern.name} {...pattern.props} transition={{ delay: index * 0.08, duration: 0.45 }}>
            <Card className="hover:-translate-y-1 hover:shadow-xl">
              <CardHeader><div><CardTitle>{pattern.name}</CardTitle><CardDescription>Reusable Framer Motion preset.</CardDescription></div></CardHeader>
              <div className="h-24 rounded-xl bg-primary/10" />
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <SpringCard />
        <StaggeredList />
        <FloatingAction />
        <ShimmerLoader />
        <TimelineReveal />
        <FlipCard />
        <ModalPreview />
        <NotificationStack />
        <CommandPreview />
      </div>
    </div>
  );
}

function SpringCard() {
  return (
    <Card>
      <CardHeader><div><CardTitle>Spring Card</CardTitle><CardDescription>Tap-ready micro interaction for dashboards.</CardDescription></div></CardHeader>
      <motion.div
        whileHover={{ y: -8, rotate: -1, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
        className="rounded-2xl border bg-background p-5"
      >
        <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary"><Zap className="size-5" /></div>
        <p className="font-semibold">Hover or tap this card</p>
        <p className="mt-2 text-sm text-muted">Good for KPI cards, product tiles, and feature cards.</p>
      </motion.div>
    </Card>
  );
}

function StaggeredList() {
  const items = ["Load component registry", "Validate design tokens", "Publish reusable pattern"];
  const [active, setActive] = useState(false);

  return (
    <Card>
      <CardHeader><div><CardTitle>Staggered List</CardTitle><CardDescription>Sequential reveal for feeds and tables.</CardDescription></div></CardHeader>
      <motion.div
        initial="rest"
        animate={active ? "active" : "rest"}
        onHoverStart={() => setActive(true)}
        onHoverEnd={() => setActive(false)}
        onTap={() => setActive((value) => !value)}
        variants={{ rest: {}, active: { transition: { staggerChildren: 0.12 } } }}
        className="grid cursor-pointer gap-3"
      >
        {items.map((item) => (
          <motion.div
            key={item}
            variants={{ rest: { x: 0, scale: 1 }, active: { x: 12, scale: 1.02 } }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex items-center gap-3 rounded-xl border bg-background p-3"
          >
            <Check className="size-4 text-success" />
            <span className="text-sm font-medium">{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
}

function FloatingAction() {
  return (
    <Card>
      <CardHeader><div><CardTitle>Floating Action</CardTitle><CardDescription>Premium CTA movement without visual noise.</CardDescription></div></CardHeader>
      <div className="grid h-44 place-items-center rounded-2xl border bg-background">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}>
          <Button className="rounded-full shadow-xl shadow-primary/25"><Sparkles className="size-4" />Generate UI</Button>
        </motion.div>
      </div>
    </Card>
  );
}

function ShimmerLoader() {
  return (
    <Card>
      <CardHeader><div><CardTitle>Shimmer Loader</CardTitle><CardDescription>Reusable loading state for async panels.</CardDescription></div></CardHeader>
      <div className="grid gap-3">
        {[48, 80, 64].map((width, index) => (
          <div key={width} className="relative h-10 overflow-hidden rounded-xl bg-muted/10">
            <motion.div
              className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent dark:via-white/10"
              animate={{ x: ["-100%", "420%"] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.12 }}
            />
            <div className="h-full rounded-xl bg-muted/10" style={{ width: `${width}%` }} />
          </div>
        ))}
      </div>
    </Card>
  );
}

function TimelineReveal() {
  const [run, setRun] = useState(1);

  return (
    <Card>
      <CardHeader>
        <div><CardTitle>Timeline Reveal</CardTitle><CardDescription>Activity feed and onboarding timeline motion.</CardDescription></div>
        <Button size="sm" variant="secondary" onClick={() => setRun((value) => value + 1)}>Replay</Button>
      </CardHeader>
      <motion.div key={run} className="relative grid gap-4 pl-5" whileHover={{ x: 4 }}>
        <div className="absolute bottom-2 left-2 top-2 w-px bg-border" />
        {["Prototype", "Review", "Ship"].map((item, index) => (
          <motion.div key={item} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.18 }} className="relative">
            <motion.span className="absolute -left-[1.15rem] top-1 grid size-4 place-items-center rounded-full bg-primary" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: index * 0.18, type: "spring" }} />
            <p className="font-medium">{item}</p>
            <p className="text-sm text-muted">Motion step {index + 1}</p>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
}

function FlipCard() {
  return (
    <Card>
      <CardHeader><div><CardTitle>Flip Card</CardTitle><CardDescription>Hover reveal for compact metadata.</CardDescription></div></CardHeader>
      <div className="h-44 [perspective:900px]">
        <motion.div className="relative h-full rounded-2xl [transform-style:preserve-3d]" whileHover={{ rotateY: 180 }} transition={{ duration: 0.55 }}>
          <div className="absolute inset-0 grid place-items-center rounded-2xl border bg-background [backface-visibility:hidden]">
            <Layers className="size-8 text-primary" />
          </div>
          <div className="absolute inset-0 grid place-items-center rounded-2xl border bg-primary p-5 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <p className="text-sm font-semibold">Use for profile cards, pricing details, or feature reveals.</p>
          </div>
        </motion.div>
      </div>
    </Card>
  );
}

function ModalPreview() {
  const [open, setOpen] = useState(true);

  return (
    <Card>
      <CardHeader>
        <div><CardTitle>Modal Motion</CardTitle><CardDescription>Backdrop and panel entrance pattern.</CardDescription></div>
        <Button size="sm" variant="secondary" onClick={() => setOpen((value) => !value)}>{open ? "Close" : "Open"}</Button>
      </CardHeader>
      <div className="relative h-44 overflow-hidden rounded-2xl border bg-background" onMouseEnter={() => setOpen(true)}>
        {open ? (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 260, damping: 22 }} className="absolute left-6 right-6 top-8 rounded-2xl border bg-card p-4 shadow-xl">
              <div className="mb-3 grid size-9 place-items-center rounded-xl bg-accent/10 text-accent"><PanelTop className="size-4" /></div>
              <p className="font-semibold">Modal Preview</p>
              <p className="text-sm text-muted">Toggle or hover to replay.</p>
            </motion.div>
          </>
        ) : (
          <div className="grid h-full place-items-center text-sm text-muted">Click Open to replay modal motion</div>
        )}
      </div>
    </Card>
  );
}

function NotificationStack() {
  const [run, setRun] = useState(1);

  return (
    <Card>
      <CardHeader>
        <div><CardTitle>Notification Stack</CardTitle><CardDescription>Stack entrance for toast systems.</CardDescription></div>
        <Button size="sm" variant="secondary" onClick={() => setRun((value) => value + 1)}>Replay</Button>
      </CardHeader>
      <motion.div key={run} className="grid gap-3" whileHover={{ scale: 1.01 }}>
        {["Saved successfully", "Export completed", "New insight ready"].map((item, index) => (
          <motion.div key={item} initial={{ opacity: 0, x: 28, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} whileHover={{ x: -6 }} transition={{ delay: index * 0.12 }} className="flex items-center gap-3 rounded-xl border bg-background p-3">
            <Bell className="size-4 text-primary" />
            <span className="text-sm font-medium">{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
}

function CommandPreview() {
  return (
    <Card>
      <CardHeader><div><CardTitle>Command Highlight</CardTitle><CardDescription>Keyboard-focused search result motion.</CardDescription></div></CardHeader>
      <div className="grid gap-2 rounded-2xl border bg-background p-3">
        {["Open Charts", "Create Table", "Launch AI Playground"].map((item, index) => (
          <motion.div key={item} whileHover={{ x: 6 }} className="flex items-center gap-3 rounded-xl p-3 hover:bg-card">
            <Command className="size-4 text-muted" />
            <span className="text-sm font-medium">{item}</span>
            {index === 0 ? <Badge className="ml-auto" variant="premium">active</Badge> : <ChevronRight className="ml-auto size-4 text-muted" />}
          </motion.div>
        ))}
        <div className="flex items-center gap-2 pt-2 text-xs text-muted"><MousePointer2 className="size-3" />Hover each command row</div>
      </div>
    </Card>
  );
}
