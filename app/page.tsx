import dynamic from "next/dynamic";
import DashboardBalance from "@/components/dashboard/dashboardBalanceCard";
import DashboardConsumption from "@/components/dashboard/dashboardConsumptionCard";
import DashboardPayments from "@/components/dashboard/dashboardPayments";
import DashboardAccount from "@/components/dashboard/dashboardAccount";
import DashboardCard from "@/components/dashboard/dashboardCard";

const DashboardMeterReadings = dynamic(
  () => import("@/components/dashboard/dashboardMeterReadings"),
  {
    ssr: false,
    loading: () => (
      <DashboardCard title="meter readings" className="row-span-2">
        <div className="mx-auto flex h-[350px] w-[300px] items-center justify-center text-2xl text-black-100 dark:text-white-100">
          Loading...
        </div>
      </DashboardCard>
    ),
  }
);

export const metadata = {
  title: "Firefly Energy - Dashboard",
  description:
    "Access your account to see your bills, consumption, meter readings and account details.",
};

export default function Dashboard() {
  return (
    <section className="min-h-[700px]">
      <header className="flex flex-col">
        <h1 className="py-2 text-xl font-light capitalize tracking-wider text-black-200 dark:text-white-200">
          dashboard
        </h1>
        <p className="text-2xl font-medium sm:text-3xl">
          Hello, Frankie Lam 👋🏻
        </p>
      </header>
      <div className="mt-10 grid gap-y-12 lg:grid-cols-2 lg:grid-rows-3  lg:items-start lg:gap-6">
        <DashboardBalance />
        <DashboardConsumption />
        <DashboardMeterReadings />
        <DashboardPayments />
        <DashboardAccount />
      </div>
    </section>
  );
}
