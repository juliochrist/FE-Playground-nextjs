import { ComponentSandbox } from "@/components/sandbox/component-sandbox";
import { PageHeader } from "@/components/layouts/page-header";

export default function ComponentSandboxPage() {
  return (
    <>
      <PageHeader eyebrow="Storybook-Style Sandbox" title="Live Component Playground" description="Select reusable components, tweak props, compare preview and generated code, then copy production-ready snippets." />
      <ComponentSandbox />
    </>
  );
}
