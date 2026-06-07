import { Badge } from "@/components/ui/badge";

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-6 max-w-4xl">
      <Badge variant="premium">{eyebrow}</Badge>
      <h1 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">{title}</h1>
      <p className="mt-3 text-base leading-7 text-muted">{description}</p>
    </div>
  );
}
