import { ThemeBuilder } from "@/components/labs/theme-builder";
import { PageHeader } from "@/components/layouts/page-header";

export default function ThemeBuilderPage() {
  return (
    <>
      <PageHeader eyebrow="Advanced Theming" title="Theme Builder" description="Switch between blue, purple, emerald, rose, and orange themes using CSS variables." />
      <ThemeBuilder />
    </>
  );
}
