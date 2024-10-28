"use client";
import DashboardHeaderLogin from "@/Components/dashboard/DashboardHeaderLogin/DashboardHeaderLogin";

const dashboardHome = () => {
  return (
    <main className="flex min-h-screen flex-col items-center mb-10">
      <div>
        <DashboardHeaderLogin />
      </div>
    </main>
  );
};

export default dashboardHome;
