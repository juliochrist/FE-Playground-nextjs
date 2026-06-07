import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold", {
  variants: {
    variant: {
      success: "border-success/20 bg-success/10 text-success",
      warning: "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-300",
      danger: "border-danger/20 bg-danger/10 text-danger",
      neutral: "border-border bg-card text-muted",
      premium: "border-accent/20 bg-accent/10 text-accent",
    },
  },
  defaultVariants: { variant: "neutral" },
});

export function Badge({ className, variant, ...props }: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
