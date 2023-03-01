import DashboardBalance from "@/components/dashboard/dashboardBalanceCard";
import DashboardConsumption from "@/components/dashboard/dashboardConsumptionCard";
import DashboardMeterReadings from "@/components/dashboard/dashboardMeterReadings";
import DashboardPayments from "@/components/dashboard/dashboardPayments";
import DashboardAccount from "@/components/dashboard/dashboardAccount";

export const metadata = {
  title: "Firefly Energy - Dashboard",
  description:
    "Access your account to see your bills, consumption, meter readings and account details.",
};

export default function Dashboard() {
  return (
    <section className="min-h-[700px]">
      <header className="flex flex-col items-start">
        <h1 className="py-2 text-xl font-light capitalize tracking-wider text-black-200 dark:text-white-200">
          dashboard
        </h1>
        <p className="text-2xl font-medium sm:text-3xl">
          Hello, Frankie Lam 👋🏻
        </p>
      </header>
      <div className="mt-10 grid grid-rows-3 gap-y-12 lg:grid-cols-2 lg:gap-6">
        <DashboardBalance />
        <DashboardConsumption />
        <DashboardMeterReadings />
        <DashboardPayments />
        <DashboardAccount />
      </div>
    </section>
  );
}
