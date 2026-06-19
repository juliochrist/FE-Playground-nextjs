"use client";

import { GripVertical } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const initial = {
  Todo: ["Design table filters", "Draft auth reset flow", "Create marketing FAQ"],
  "In Progress": ["Build AI suggestion cards", "Refine chart palette"],
  Review: ["Command palette keyboard QA"],
  Done: ["Dashboard KPI widgets", "Empty state variants"],
};

type Column = keyof typeof initial;

export function KanbanBoard() {
  const [board, setBoard] = useState<Record<Column, string[]>>(initial);
  const [dragged, setDragged] = useState<{ column: Column; task: string } | null>(null);

  function moveTask(target: Column) {
    if (!dragged) return;
    setBoard((current) => {
      const next = { ...current } as Record<Column, string[]>;
      next[dragged.column] = next[dragged.column].filter((task) => task !== dragged.task);
      next[target] = [...next[target], dragged.task];
      return next;
    });
    setDragged(null);
  }

  return (
    <div className="grid gap-4 xl:grid-cols-4">
      {(Object.keys(board) as Column[]).map((column) => (
        <Card key={column} className="min-h-80" onDragOver={(event) => event.preventDefault()} onDrop={() => moveTask(column)}>
          <div className="mb-4 flex items-center justify-between"><h3 className="font-semibold">{column}</h3><Badge variant="neutral">{board[column].length}</Badge></div>
          <div className="grid gap-3">
            {board[column].map((task) => (
              <div key={task} draggable onDragStart={() => setDragged({ column, task })} className="cursor-grab rounded-xl border bg-background p-3 shadow-sm">
                <div className="flex items-start gap-2"><GripVertical className="mt-0.5 size-4 text-muted" /><p className="text-sm font-medium">{task}</p></div>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
