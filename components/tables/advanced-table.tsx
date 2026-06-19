"use client";

import { Download, Filter, MoreHorizontal, Search, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

type Status = "Active" | "Pending" | "At Risk";
type Row = { id: string; account: string; product: string; owner: string; status: Status; value: number };

const rows: Row[] = [
  { id: "TI-1001", account: "Northstar Capital", product: "TradeIntel", owner: "Julio", status: "Active", value: 42100 },
  { id: "AI-1002", account: "AII Career Navigator", product: "AI Career Navigator", owner: "Career Team", status: "Pending", value: 18600 },
  { id: "CP-1003", account: "Luma Health", product: "ClientPulse", owner: "CRM Team", status: "Active", value: 28500 },
  { id: "SP-1004", account: "Acme Retail", product: "SmartPOS AI", owner: "POS Team", status: "At Risk", value: 12800 },
  { id: "AN-1005", account: "Nova Analytics", product: "Analytics", owner: "Data Team", status: "Active", value: 35600 },
  { id: "LO-1006", account: "Personal OS", product: "Life OS", owner: "Julio", status: "Pending", value: 8400 },
  { id: "TI-1007", account: "Vertex Trading", product: "TradeIntel", owner: "Markets", status: "Active", value: 51200 },
];

const statusVariant = { Active: "success", Pending: "warning", "At Risk": "danger" } as const;

export function AdvancedTable() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState<keyof Row>("value");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const pageSize = 5;

  const filtered = useMemo(() => {
    return rows
      .filter((row) => status === "All" || row.status === status)
      .filter((row) => Object.values(row).join(" ").toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => String(a[sort]).localeCompare(String(b[sort]), undefined, { numeric: true }));
  }, [query, sort, status]);

  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));

  function exportCsv() {
    const csv = ["id,account,product,owner,status,value", ...filtered.map((row) => `${row.id},${row.account},${row.product},${row.owner},${row.status},${row.value}`)].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "frontend-playground-table.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <Card className="overflow-hidden p-0">
      <div className="grid gap-3 border-b p-4 lg:grid-cols-[1fr_12rem_12rem_auto_auto]">
        <div className="relative">
          <Search className="absolute left-3 top-3 size-4 text-muted" />
          <Input className="pl-9" placeholder="Search accounts, products, owners" value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} />
        </div>
        <Select value={status} onValueChange={(value) => { setStatus(value); setPage(1); }} items={["All", "Active", "Pending", "At Risk"]} placeholder="Status" />
        <Select value={sort} onValueChange={(value) => setSort(value as keyof Row)} items={["account", "product", "owner", "status", "value"]} placeholder="Sort by" />
        <Button variant="secondary"><Filter className="size-4" />Filters</Button>
        <Button onClick={exportCsv}><Download className="size-4" />Export CSV</Button>
      </div>
      {selected.length > 0 ? (
        <div className="flex items-center justify-between border-b bg-primary/10 p-3 text-sm">
          <span>{selected.length} selected</span>
          <Button size="sm" variant="danger" onClick={() => setSelected([])}><Trash2 className="size-4" />Clear Selection</Button>
        </div>
      ) : null}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead className="bg-background text-xs uppercase text-muted">
            <tr>
              <th className="px-4 py-3"><input aria-label="Select all rows" type="checkbox" checked={selected.length === paged.length && paged.length > 0} onChange={(event) => setSelected(event.target.checked ? paged.map((row) => row.id) : [])} /></th>
              {["ID", "Account", "Product", "Owner", "Status", "Value", "Actions"].map((heading) => <th key={heading} className="px-4 py-3">{heading}</th>)}
            </tr>
          </thead>
          <tbody>
            {paged.map((row) => (
              <tr key={row.id} className="border-t">
                <td className="px-4 py-4"><input aria-label={`Select ${row.account}`} type="checkbox" checked={selected.includes(row.id)} onChange={(event) => setSelected((current) => event.target.checked ? [...current, row.id] : current.filter((id) => id !== row.id))} /></td>
                <td className="px-4 py-4 font-mono text-xs text-muted">{row.id}</td>
                <td className="px-4 py-4 font-medium">{row.account}</td>
                <td className="px-4 py-4">{row.product}</td>
                <td className="px-4 py-4 text-muted">{row.owner}</td>
                <td className="px-4 py-4"><Badge variant={statusVariant[row.status]}>{row.status}</Badge></td>
                <td className="px-4 py-4">${row.value.toLocaleString()}</td>
                <td className="px-4 py-4"><Button size="icon" variant="ghost" aria-label="Row actions"><MoreHorizontal className="size-4" /></Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-3 border-t p-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>Showing {paged.length} of {filtered.length} rows</span>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" disabled={page === 1} onClick={() => setPage((value) => value - 1)}>Previous</Button>
          <span>Page {page} of {pages}</span>
          <Button variant="secondary" size="sm" disabled={page === pages} onClick={() => setPage((value) => value + 1)}>Next</Button>
        </div>
      </div>
    </Card>
  );
}
