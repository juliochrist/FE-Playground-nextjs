"use client";

import { MoreHorizontal, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Row = { name: string; product: string; status: "Active" | "Pending" | "At Risk"; value: string };

const rows: Row[] = [
  { name: "Acme Retail", product: "SmartPOS AI", status: "Active", value: "$18.4k" },
  { name: "Northstar Capital", product: "TradeIntel", status: "Active", value: "$42.1k" },
  { name: "Luma Health", product: "ClientPulse CRM", status: "Pending", value: "$9.8k" },
  { name: "Personal OS", product: "Life OS", status: "At Risk", value: "$3.2k" },
  { name: "Nova Analytics", product: "Analytics Dashboard", status: "Active", value: "$25.6k" },
];

const statusVariant = {
  Active: "success",
  Pending: "warning",
  "At Risk": "danger",
} as const;

export function DataTable() {
  const [query, setQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const filtered = useMemo(() => {
    return rows
      .filter((row) => Object.values(row).join(" ").toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
  }, [query, sortAsc]);

  return (
    <Card className="overflow-hidden p-0">
      <div className="flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-3 size-4 text-muted" />
          <Input className="pl-9" placeholder="Search rows" value={query} onChange={(event) => setQuery(event.target.value)} />
        </div>
        <Button variant="secondary" onClick={() => setSortAsc((value) => !value)}>Sort {sortAsc ? "A-Z" : "Z-A"}</Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="bg-background text-xs uppercase text-muted">
            <tr>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Value</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.name} className="border-t">
                <td className="px-4 py-4 font-medium">{row.name}</td>
                <td className="px-4 py-4 text-muted">{row.product}</td>
                <td className="px-4 py-4"><Badge variant={statusVariant[row.status]}>{row.status}</Badge></td>
                <td className="px-4 py-4">{row.value}</td>
                <td className="px-4 py-4 text-right"><Button size="icon" variant="ghost" aria-label="Row actions"><MoreHorizontal className="size-4" /></Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t p-4 text-sm text-muted">
        <span>Page 1 of 3</span>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm">Previous</Button>
          <Button variant="secondary" size="sm">Next</Button>
        </div>
      </div>
    </Card>
  );
}
