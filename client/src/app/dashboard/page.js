import DashboardLogin from "@/Components/dashboard/DashboardLogin.js/DashboardLogin";
import DashboardHeader from "@/Components/dashboard/DashboardHeader/DashboardHeader";

export default function dashboard() {
  return (
    <main className="lex min-h-screen flex-col items-center mb-10">
      <DashboardHeader />
      <DashboardLogin />
    </main>
  );
}
