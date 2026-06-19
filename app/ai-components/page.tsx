import { AiComponents } from "@/components/ai/ai-components";
import { PageHeader } from "@/components/layouts/page-header";

export default function AiComponentsPage() {
  return (
    <>
      <PageHeader eyebrow="AI Product UI" title="AI Components" description="Mock AI playground, chat, prompt input, response card, loading state, and suggestion cards." />
      <AiComponents />
    </>
  );
}
