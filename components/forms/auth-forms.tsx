"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [saved, setSaved] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "julio@frontend.play", password: "" },
  });

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Login Form</CardTitle>
          <CardDescription>Reusable auth pattern with validation, loading, and success states.</CardDescription>
        </div>
      </CardHeader>
      <form className="grid gap-4" onSubmit={handleSubmit(async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setSaved(true);
      })}>
        <label className="grid gap-2 text-sm font-medium">
          Email
          <Input {...register("email")} />
          {errors.email ? <span className="text-xs text-danger">{errors.email.message}</span> : null}
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Password
          <Input type="password" placeholder="Minimum 8 characters" {...register("password")} />
          {errors.password ? <span className="text-xs text-danger">{errors.password.message}</span> : null}
        </label>
        <Button type="submit" loading={isSubmitting}>Validate Form</Button>
        {saved ? <p className="rounded-xl border border-success/20 bg-success/10 p-3 text-sm text-success">Validation passed. Ready to reuse.</p> : null}
      </form>
    </Card>
  );
}

export function MultiStepFormPreview() {
  const [step, setStep] = useState(1);
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Multi-Step Form</CardTitle>
          <CardDescription>Profile, preferences, and confirmation flow for SaaS onboarding.</CardDescription>
        </div>
      </CardHeader>
      <div className="mb-5 grid grid-cols-3 gap-2">
        {[1, 2, 3].map((item) => <div key={item} className={`h-2 rounded-full ${item <= step ? "bg-primary" : "bg-muted/20"}`} />)}
      </div>
      <div className="grid gap-3">
        <Input placeholder={step === 1 ? "Workspace name" : step === 2 ? "Preferred dashboard density" : "Confirmation email"} />
        <Input placeholder={step === 1 ? "Product category" : step === 2 ? "Default theme" : "Owner role"} />
      </div>
      <div className="mt-5 flex gap-3">
        <Button variant="secondary" disabled={step === 1} onClick={() => setStep((value) => value - 1)}>Back</Button>
        <Button onClick={() => setStep((value) => (value === 3 ? 1 : value + 1))}>{step === 3 ? "Reset" : "Next"}</Button>
      </div>
    </Card>
  );
}
