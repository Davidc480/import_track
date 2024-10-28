"use client";
import DashboardLogin from "@/Components/dashboard/DashboardLogin/DashboardLogin";
import DashboardHeader from "@/Components/dashboard/DashboardHeader/DashboardHeader";
import { useRouter } from "next/navigation";

export default function dashboard() {
  const router = useRouter();
  return (
    <main className="lex min-h-screen flex-col items-center mb-10">
      <DashboardHeader />
      <DashboardLogin router={router} />
    </main>
  );
}
