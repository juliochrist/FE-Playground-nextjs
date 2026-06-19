import { MarketingBlocks } from "@/components/marketing/marketing-blocks";
import { PageHeader } from "@/components/layouts/page-header";

export default function MarketingPage() {
  return (
    <>
      <PageHeader eyebrow="Landing Page Components" title="Marketing Components" description="Hero, pricing, testimonials, FAQ, CTA, and features grid blocks for future product launches." />
      <MarketingBlocks />
    </>
  );
}
