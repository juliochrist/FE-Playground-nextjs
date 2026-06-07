import { LoginForm, MultiStepFormPreview } from "@/components/forms/auth-forms";
import { PageHeader } from "@/components/layouts/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function FormsPage() {
  return (
    <>
      <PageHeader eyebrow="Validated Workflows" title="Reusable Forms" description="React Hook Form and Zod patterns for auth, profile, settings, and multi-step SaaS workflows." />
      <div className="grid gap-6 xl:grid-cols-2">
        <LoginForm />
        <MultiStepFormPreview />
        <Card><CardHeader><div><CardTitle>Profile Form</CardTitle><CardDescription>Account and identity fields.</CardDescription></div></CardHeader><div className="grid gap-3"><Input placeholder="Full name" /><Input placeholder="Role" /><Input placeholder="Avatar URL" /></div></Card>
        <Card><CardHeader><div><CardTitle>Settings Form</CardTitle><CardDescription>Preference editing surface.</CardDescription></div></CardHeader><div className="grid gap-3"><Input placeholder="Timezone" /><Input placeholder="Notification email" /><Input placeholder="Default product" /></div></Card>
      </div>
    </>
  );
}
