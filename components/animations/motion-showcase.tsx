"use client";

import { motion } from "framer-motion";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const patterns = [
  { name: "Fade In", props: { initial: { opacity: 0 }, animate: { opacity: 1 } } },
  { name: "Slide Up", props: { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } } },
  { name: "Slide Down", props: { initial: { opacity: 0, y: -24 }, animate: { opacity: 1, y: 0 } } },
  { name: "Scale In", props: { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 } } },
];

export function MotionShowcase() {
  return (
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
  );
}
