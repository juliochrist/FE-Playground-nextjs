import { ComponentRegistry } from "@/components/registry/component-registry";
import { PageHeader } from "@/components/layouts/page-header";

export default function ComponentRegistryPage() {
  return (
    <>
      <PageHeader eyebrow="Component Registry" title="Reusable Component Governance" description="Track component status, owner, maturity, tags, usage, import paths, and adoption readiness across Julio products." />
      <ComponentRegistry />
    </>
  );
}
