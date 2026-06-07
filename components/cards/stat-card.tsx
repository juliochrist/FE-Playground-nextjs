import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function StatCard({ title, value, change, icon: Icon }: { title: string; value: string; change: string; icon: LucideIcon }) {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-primary/10" />
      <div className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="size-5" />
      </div>
      <p className="mt-4 text-sm text-muted">{title}</p>
      <div className="mt-2 flex items-end justify-between gap-4">
        <p className="text-3xl font-bold">{value}</p>
        <Badge variant="success">{change}</Badge>
      </div>
    </Card>
  );
}
