"use client";
import WithAuth from "@/Components/WitAuth/withAuth";
import DashboardHeaderLogin from "@/Components/dashboard/DashboardHeaderLogin/DashboardHeaderLogin";

const dashboardHome = () => {
  return (
    <WithAuth>
      <main className="flex min-h-screen flex-col items-center mb-10">
        <div>
          <DashboardHeaderLogin />
        </div>
      </main>
    </WithAuth>
  );
};

export default dashboardHome;
