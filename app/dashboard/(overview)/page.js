import { Suspense } from "react";
import { CardsSkeleton } from "@/app/ui/skeletons";
import Test from "@/app/dashboard/test";
import CardWrapper from "@/app/ui/dashboard/cards";
import { fetchData } from "@/app/lib/data";
import AdminDashboard from "../admin";
import CustomerDashboard from "../customer";
export default async function Page(props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  const revenue = await fetchData();
  return (
    <div>
      {/* {query === "cus" ? <CustomerDashboard /> : <AdminDashboard />}; */}
      <h1 className={`mb-4 text-xl md:text-2xl`}>Admin Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
    </div>
  );
}
