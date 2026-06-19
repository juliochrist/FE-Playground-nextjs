import { MobileScreens } from "@/components/labs/mobile-screens";
import { PageHeader } from "@/components/layouts/page-header";

export default function MobileLabPage() {
  return (
    <>
      <PageHeader eyebrow="Mobile UI Lab" title="Responsive Mobile Product Screens" description="Mobile dashboard, POS, banking, chat, and trading screens that reuse the same design system tokens." />
      <MobileScreens />
    </>
  );
}
