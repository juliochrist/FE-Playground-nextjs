"use client";

import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const variants = {
  success: { icon: CheckCircle2, className: "border-success/20 bg-success/10 text-success" },
  error: { icon: XCircle, className: "border-danger/20 bg-danger/10 text-danger" },
  warning: { icon: AlertTriangle, className: "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-300" },
  info: { icon: Info, className: "border-primary/20 bg-primary/10 text-primary" },
} as const;

type ToastKind = keyof typeof variants;

export function ToastPlayground() {
  const [toasts, setToasts] = useState<ToastKind[]>(["success"]);
  return (
    <div className="grid gap-5">
      <div className="flex flex-wrap gap-3">
        {(Object.keys(variants) as ToastKind[]).map((kind) => <Button key={kind} variant={kind === "error" ? "danger" : kind === "success" ? "success" : "secondary"} onClick={() => setToasts((items) => [...items, kind])}>{kind}</Button>)}
      </div>
      <div className="grid max-w-xl gap-3">
        {toasts.map((kind, index) => {
          const { icon: Icon, className } = variants[kind];
          return (
            <div key={`${kind}-${index}`} className={`flex items-center gap-3 rounded-2xl border p-4 shadow-sm ${className}`}>
              <Icon className="size-5" />
              <div><p className="font-semibold capitalize">{kind} toast</p><p className="text-sm opacity-80">Reusable notification event for product feedback.</p></div>
              <button className="ml-auto" onClick={() => setToasts((items) => items.filter((_, itemIndex) => itemIndex !== index))} aria-label="Dismiss toast"><X className="size-4" /></button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
