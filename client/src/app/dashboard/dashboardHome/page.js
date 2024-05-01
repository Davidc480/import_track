"use client";
import WithAuth from "@/Components/WitAuth/withAuth";

const dashboardHome = () => {
  return (
    <WithAuth>
      <main className="flex min-h-screen flex-col items-center mb-10">
        <div>
          <h1>dashboardHome</h1>
        </div>
      </main>
    </WithAuth>
  );
};

export default dashboardHome;
