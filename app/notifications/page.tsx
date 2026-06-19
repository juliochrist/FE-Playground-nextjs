import { ToastPlayground } from "@/components/notifications/toast-playground";
import { PageHeader } from "@/components/layouts/page-header";

export default function NotificationsPage() {
  return (
    <>
      <PageHeader eyebrow="Notification System" title="Toast Playground" description="Reusable success, error, warning, and info feedback patterns for every product." />
      <ToastPlayground />
    </>
  );
}
