import { KanbanBoard } from "@/components/kanban/kanban-board";
import { PageHeader } from "@/components/layouts/page-header";

export default function KanbanPage() {
  return (
    <>
      <PageHeader eyebrow="Complex UI Pattern" title="Kanban Board" description="Drag-and-drop stateful board with Todo, In Progress, Review, and Done columns." />
      <KanbanBoard />
    </>
  );
}
