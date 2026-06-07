export type Density = "compact" | "comfortable" | "spacious";
export type Radius = "small" | "medium" | "large";
export type MotionLevel = "reduced" | "normal" | "premium";

export type ComponentStatus = "stable" | "beta" | "experimental";

export type NavItem = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};
