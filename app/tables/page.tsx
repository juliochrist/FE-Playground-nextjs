import { DataTable } from "@/components/tables/data-table";
import { PageHeader } from "@/components/layouts/page-header";

export default function TablesPage() {
  return (
    <>
      <PageHeader eyebrow="SaaS Data Grids" title="Reusable Tables" description="Search, filter-ready architecture, sorting, pagination, status badges, and row actions for CRM, POS, and trading journal tables." />
      <DataTable />
    </>
  );
}
