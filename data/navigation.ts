import {
  BarChart3,
  Bell,
  Blocks,
  Bot,
  Braces,
  Component,
  FlaskConical,
  FileText,
  GalleryVerticalEnd,
  Kanban,
  LayoutDashboard,
  Megaphone,
  MonitorSmartphone,
  Network,
  PanelsTopLeft,
  Palette,
  Play,
  Settings,
  Sparkles,
  SplitSquareHorizontal,
  Table2,
  TerminalSquare,
  Wand2,
  Gauge,
  Accessibility,
} from "lucide-react";
import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { title: "Accessibility Lab", href: "/accessibility", icon: Accessibility },
  { title: "Advanced Tables", href: "/table-playground", icon: Table2 },
  { title: "AI Components", href: "/ai-components", icon: Bot },
  { title: "Animations", href: "/animations", icon: Sparkles },
  { title: "API Playground", href: "/api-playground", icon: Braces },
  { title: "Architecture", href: "/architecture", icon: FileText },
  { title: "Auth Kit", href: "/auth-kit", icon: TerminalSquare },
  { title: "Charts", href: "/charts", icon: BarChart3 },
  { title: "Command Palette", href: "/command-palette", icon: TerminalSquare },
  { title: "Components", href: "/components", icon: Component },
  { title: "Component Registry", href: "/component-registry", icon: Component },
  { title: "Component Sandbox", href: "/component-sandbox", icon: FlaskConical },
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Design System", href: "/design-system", icon: Palette },
  { title: "Empty States", href: "/empty-states", icon: GalleryVerticalEnd },
  { title: "Forms", href: "/forms", icon: Blocks },
  { title: "Kanban", href: "/kanban", icon: Kanban },
  { title: "Layouts", href: "/layouts", icon: PanelsTopLeft },
  { title: "Marketing", href: "/marketing", icon: Megaphone },
  { title: "Micro Interactions", href: "/micro-interactions", icon: Sparkles },
  { title: "Mobile UI Lab", href: "/mobile-lab", icon: MonitorSmartphone },
  { title: "Notifications", href: "/notifications", icon: Bell },
  { title: "Performance Lab", href: "/performance", icon: Gauge },
  { title: "Playground", href: "/playground", icon: Play },
  { title: "Settings", href: "/settings", icon: Settings },
  { title: "State Management", href: "/state-management", icon: Network },
  { title: "Tables", href: "/tables", icon: Table2 },
  { title: "Theme Builder", href: "/theme-builder", icon: Palette },
  { title: "Theme Showcase", href: "/theme-showcase", icon: Bot },
  { title: "UI Inspiration", href: "/reverse-engineering", icon: SplitSquareHorizontal },
  { title: "Widgets", href: "/widgets", icon: GalleryVerticalEnd },
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
