import Table from "@/app/ui/invoices/table";
import Pagination from "@/app/ui/invoices/pagination";
import { Suspense } from "react";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { fetchInvoicesPages, fetchData } from "@/app/lib/data";

export default async function Page(props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const revenue = await fetchData();

  return (
    <div>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Invoices</h1>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center invoice-page">
        <Pagination totalPages={3} />
      </div>
    </div>
  );
}
