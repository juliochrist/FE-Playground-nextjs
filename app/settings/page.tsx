import { SettingsPanel } from "@/components/settings/settings-panel";
import { PageHeader } from "@/components/layouts/page-header";

export default function SettingsPage() {
  return (
    <>
      <PageHeader eyebrow="System Preferences" title="Settings" description="Tune appearance, density, radius, and animation behavior for the whole design system." />
      <SettingsPanel />
    </>
  );
}
