import { ArrowDownLeft, ArrowUpRight, BarChart3, Bot, CreditCard, Home, MessageCircle, ShoppingCart, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const screens = [
  { title: "Mobile Dashboard", icon: Home, rows: ["Revenue $18.4k", "Tasks 24", "Growth +12%"] },
  { title: "Mobile POS", icon: ShoppingCart, rows: ["Cart 6 items", "Inventory 128", "Checkout Ready"] },
  { title: "Mobile Banking", icon: CreditCard, rows: ["Balance $8,240", "Income +$2,400", "Bills -$980"] },
  { title: "Mobile Chat", icon: MessageCircle, rows: ["AI assistant online", "3 unread", "Draft ready"] },
  { title: "Mobile Trading", icon: TrendingUp, rows: ["QQQ +1.8%", "Risk Low", "Signal Buy"] },
];

export function MobileScreens() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
      {screens.map((screen) => {
        const Icon = screen.icon;
        return (
          <Card key={screen.title} className="mx-auto w-full max-w-[22rem] rounded-[2rem] p-3">
            <div className="rounded-[1.6rem] border bg-background p-4">
              <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-muted/30" />
              <div className="flex items-center justify-between"><div className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon className="size-5" /></div><Badge variant="premium">Mobile</Badge></div>
              <h3 className="mt-5 text-xl font-bold">{screen.title}</h3>
              <div className="mt-5 grid gap-3">
                {screen.rows.map((row, index) => <div key={row} className="flex items-center justify-between rounded-2xl border bg-card p-3 text-sm"><span>{row}</span>{index % 2 === 0 ? <ArrowUpRight className="size-4 text-success" /> : <ArrowDownLeft className="size-4 text-danger" />}</div>)}
              </div>
              <div className="mt-5 grid h-24 place-items-center rounded-2xl bg-primary/10"><BarChart3 className="size-8 text-primary" /></div>
              <div className="mt-5 flex justify-around rounded-2xl border bg-card p-3 text-muted"><Home className="size-4" /><BarChart3 className="size-4" /><Bot className="size-4" /></div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
