import { AuthKit } from "@/components/auth/auth-kit";
import { PageHeader } from "@/components/layouts/page-header";

export default function AuthKitPage() {
  return (
    <>
      <PageHeader eyebrow="Authentication UI Kit" title="Auth Components" description="Reusable login, register, forgot password, reset password, and OTP verification patterns." />
      <AuthKit />
    </>
  );
}
