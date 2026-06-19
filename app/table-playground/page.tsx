import { AdvancedTable } from "@/components/tables/advanced-table";
import { PageHeader } from "@/components/layouts/page-header";

export default function TablePlaygroundPage() {
  return (
    <>
      <PageHeader eyebrow="Data Table Playground" title="Advanced Table Demo" description="Sorting, search, filters, pagination, row selection, bulk actions, and CSV export for serious SaaS data workflows." />
      <AdvancedTable />
    </>
  );
}
