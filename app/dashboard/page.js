import { Suspense } from "react";
import { CardsSkeleton } from "@/app/ui/skeletons";
import Test from "@/app/dashboard/test";
import { fetchData } from "@/app/lib/data";
import AdminDashboard from "./admin";
import CustomerDashboard from "./customer";
export default async function Page(props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  const revenue = await fetchData();
  return (
    <div>
      <Suspense fallback={<CardsSkeleton />}>
        <div>Page dashboard</div>;
        <div>
          Page Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </div>
        {query === "cus" ? <CustomerDashboard /> : <AdminDashboard />};
      </Suspense>
    </div>
  );
}
