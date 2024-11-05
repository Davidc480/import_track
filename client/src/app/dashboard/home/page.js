"use client";
import DashboardHeaderLogin from "@/Components/dashboard/DashboardHeaderLogin/DashboardHeaderLogin";
import TableProducts from "@/Components/dashboard/TableProducts/TableProducts";
import DollarPrice from "@/Components/dashboard/DollarPrice/DollarPrice";

const dashboardHome = () => {
  return (
    <main className="flex min-h-screen flex-col items-center mb-10">
      <div>
        <DashboardHeaderLogin />
      </div>
      <div>
        <TableProducts />
        <DollarPrice />
      </div>
    </main>
  );
};

export default dashboardHome;
