export type ComponentMaturity = "Draft" | "Beta" | "Stable" | "Deprecated";

export type RegistryComponent = {
  name: string;
  category: string;
  owner: string;
  maturity: ComponentMaturity;
  usage: number;
  updated: string;
  importPath: string;
  tags: string[];
  description: string;
};

export const registryComponents: RegistryComponent[] = [
  {
    name: "Button",
    category: "UI Primitive",
    owner: "Design System",
    maturity: "Stable",
    usage: 94,
    updated: "2026-06-28",
    importPath: "@/components/ui/button",
    tags: ["action", "form", "accessible"],
    description: "Primary command primitive with variants, loading, disabled, and icon support.",
  },
  {
    name: "StatCard",
    category: "Dashboard",
    owner: "Analytics",
    maturity: "Stable",
    usage: 72,
    updated: "2026-06-28",
    importPath: "@/components/cards/stat-card",
    tags: ["kpi", "dashboard", "analytics"],
    description: "Reusable metric card for SaaS dashboards and executive overview screens.",
  },
  {
    name: "AdvancedTable",
    category: "Data Display",
    owner: "Platform",
    maturity: "Beta",
    usage: 41,
    updated: "2026-06-28",
    importPath: "@/components/tables/advanced-table",
    tags: ["table", "search", "export"],
    description: "Searchable table playground with sorting, filters, selection, pagination, and CSV export.",
  },
  {
    name: "ChartCard",
    category: "Data Visualization",
    owner: "Data UI",
    maturity: "Stable",
    usage: 63,
    updated: "2026-06-28",
    importPath: "@/components/charts/chart-card",
    tags: ["chart", "recharts", "analytics"],
    description: "Reusable chart shell for line, area, bar, pie, and donut visualizations.",
  },
  {
    name: "AuthKit",
    category: "Authentication",
    owner: "Product Platform",
    maturity: "Beta",
    usage: 24,
    updated: "2026-06-28",
    importPath: "@/components/auth/auth-kit",
    tags: ["auth", "forms", "validation"],
    description: "Reusable authentication flows including login, register, reset, and OTP verification.",
  },
  {
    name: "CommandPalette",
    category: "Navigation",
    owner: "Platform",
    maturity: "Stable",
    usage: 36,
    updated: "2026-06-28",
    importPath: "@/components/command/global-command",
    tags: ["search", "navigation", "keyboard"],
    description: "Global CMD+K navigation layer with recent views, favorites, and component tags.",
  },
  {
    name: "KanbanBoard",
    category: "Workflow",
    owner: "Productivity",
    maturity: "Beta",
    usage: 18,
    updated: "2026-06-28",
    importPath: "@/components/kanban/kanban-board",
    tags: ["drag-drop", "workflow", "state"],
    description: "Drag-and-drop board pattern for task workflows and product pipelines.",
  },
  {
    name: "MicroInteractionsLab",
    category: "Motion",
    owner: "UX",
    maturity: "Draft",
    usage: 12,
    updated: "2026-06-28",
    importPath: "@/components/labs/micro-interactions-lab",
    tags: ["motion", "feedback", "framer"],
    description: "Interaction details for buttons, counters, toggles, progress, hover toolbars, and transitions.",
  },
  {
    name: "LegacyToast",
    category: "Feedback",
    owner: "Platform",
    maturity: "Deprecated",
    usage: 4,
    updated: "2026-05-12",
    importPath: "@/components/legacy/toast",
    tags: ["feedback", "legacy", "replace"],
    description: "Older toast surface kept in the registry to demonstrate deprecation governance.",
  },
];

export const registryStatusNotes = {
  Draft: "Exploratory component. Use only in playground demos.",
  Beta: "Usable in product prototypes with design review.",
  Stable: "Approved for production Julio products.",
  Deprecated: "Do not use in new work. Replace with stable equivalent.",
};
