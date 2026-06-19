import { ApiPlayground } from "@/components/labs/api-playground";
import { PageHeader } from "@/components/layouts/page-header";

export default function ApiPlaygroundPage() {
  return (
    <>
      <PageHeader eyebrow="API Playground" title="Mocked API State Machine" description="Users, products, orders, and analytics APIs with loading, error, empty, retry, pagination, and search states." />
      <ApiPlayground />
    </>
  );
}
