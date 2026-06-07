import {
  BarChart3,
  Blocks,
  Bot,
  Component,
  LayoutDashboard,
  PanelsTopLeft,
  Play,
  Settings,
  Sparkles,
  Table2,
  Wand2,
} from "lucide-react";
import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Components", href: "/components", icon: Component },
  { title: "Charts", href: "/charts", icon: BarChart3 },
  { title: "Forms", href: "/forms", icon: Blocks },
  { title: "Tables", href: "/tables", icon: Table2 },
  { title: "Layouts", href: "/layouts", icon: PanelsTopLeft },
  { title: "Animations", href: "/animations", icon: Sparkles },
  { title: "Theme Showcase", href: "/theme-showcase", icon: Bot },
  { title: "Playground", href: "/playground", icon: Play },
  { title: "Settings", href: "/settings", icon: Settings },
];

export const productPillars = [
  "Reusable UI components",
  "SaaS patterns",
  "Dashboard prototypes",
  "Design tokens",
  "Theme governance",
  "Julio UI Kit foundation",
];

export const componentStats = {
  components: 42,
  charts: 12,
  forms: 8,
  tables: 6,
  layouts: 10,
};

export const recentComponents = [
  { name: "AI Insight Card", area: "Cards", status: "stable" },
  { name: "Trading Performance Chart", area: "Charts", status: "beta" },
  { name: "Command Top Nav", area: "Navigation", status: "stable" },
  { name: "Multi-Step Form", area: "Forms", status: "experimental" },
];

export const usageMetrics = [
  { name: "TradeIntel", components: 18 },
  { name: "SmartPOS AI", components: 21 },
  { name: "ClientPulse CRM", components: 24 },
  { name: "Life OS", components: 16 },
];

export const reusableProducts = ["TradeIntel", "SmartPOS AI", "ClientPulse CRM", "Life OS"];

export const WandIcon = Wand2;
