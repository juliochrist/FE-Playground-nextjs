"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export function AuthKit() {
  return (
    <Tabs defaultValue="login" className="grid gap-5">
      <TabsList className="flex w-full flex-wrap justify-start">
        {["login", "register", "forgot", "reset", "otp"].map((tab) => <TabsTrigger key={tab} value={tab} className="capitalize">{tab}</TabsTrigger>)}
      </TabsList>
      <TabsContent value="login"><AuthPanel title="Login" description="Reusable sign-in screen for SaaS dashboards." cta="Sign In" /></TabsContent>
      <TabsContent value="register"><AuthPanel title="Register" description="Account creation pattern with validation-ready fields." cta="Create Account" showName /></TabsContent>
      <TabsContent value="forgot"><EmailPanel title="Forgot Password" description="Collect email and send recovery instructions." cta="Send Reset Link" /></TabsContent>
      <TabsContent value="reset"><AuthPanel title="Reset Password" description="New password form with confirmation-ready layout." cta="Update Password" /></TabsContent>
      <TabsContent value="otp"><OtpPanel /></TabsContent>
    </Tabs>
  );
}

function AuthPanel({ title, description, cta, showName = false }: { title: string; description: string; cta: string; showName?: boolean }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: { email: "julio@example.com", password: "" },
  });

  return (
    <Card className="max-w-xl">
      <CardHeader><div><CardTitle>{title}</CardTitle><CardDescription>{description}</CardDescription></div></CardHeader>
      <form className="grid gap-4" onSubmit={handleSubmit(async () => new Promise((resolve) => setTimeout(resolve, 400)))}>
        {showName ? <Input placeholder="Full name" /> : null}
        <label className="grid gap-2 text-sm font-medium">Email<Input {...register("email")} />{errors.email ? <span className="text-xs text-danger">{errors.email.message}</span> : null}</label>
        <label className="grid gap-2 text-sm font-medium">Password<Input type="password" placeholder="Minimum 8 characters" {...register("password")} />{errors.password ? <span className="text-xs text-danger">Minimum 8 characters</span> : null}</label>
        <Button loading={isSubmitting}><Mail className="size-4" />{cta}</Button>
      </form>
    </Card>
  );
}

function EmailPanel({ title, description, cta }: { title: string; description: string; cta: string }) {
  return (
    <Card className="max-w-xl">
      <CardHeader><div><CardTitle>{title}</CardTitle><CardDescription>{description}</CardDescription></div></CardHeader>
      <div className="grid gap-4"><Input placeholder="email@example.com" /><Button><Mail className="size-4" />{cta}</Button></div>
    </Card>
  );
}

function OtpPanel() {
  return (
    <Card className="max-w-xl">
      <CardHeader><div><CardTitle>OTP Verification</CardTitle><CardDescription>Secure confirmation component for auth, payments, and account recovery.</CardDescription></div></CardHeader>
      <div className="grid gap-4">
        <div className="flex gap-2">
          {Array.from({ length: 6 }, (_, index) => <Input key={index} maxLength={1} className="h-12 text-center text-lg font-bold" placeholder="0" />)}
        </div>
        <Button><ShieldCheck className="size-4" />Verify Code</Button>
      </div>
    </Card>
  );
}
