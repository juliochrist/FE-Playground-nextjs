import { AccessibilityLab } from "@/components/labs/accessibility-lab";
import { PageHeader } from "@/components/layouts/page-header";

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader eyebrow="Accessibility Lab" title="Accessible UI Patterns" description="Keyboard navigation, focus states, labels, ARIA, dialogs, dropdowns, contrast, and form validation patterns." />
      <AccessibilityLab />
    </>
  );
}
