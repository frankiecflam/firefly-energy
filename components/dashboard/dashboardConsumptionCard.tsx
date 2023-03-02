import DashboardCard from "./dashboardCard";

export default function DashboardConsumptionCard() {
  return (
    <DashboardCard title="consumption">
      <div className="relative mt-6 flex items-center gap-x-10 after:absolute after:left-1/2 after:top-1/2 after:hidden after:h-full after:w-[3px] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white-300 after:content-[''] after:dark:bg-black-100 sm:gap-x-20 lg:justify-between lg:gap-x-0 lg:after:block">
        <div className="text-center">
          <p className="text-2xl font-semibold xl:text-3xl">167.82kWh</p>
          <p className="capitalize text-black-100 dark:text-white-100">
            This Month
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-semibold xl:text-3xl">198.37kWh</p>
          <p className="capitalize text-black-100 dark:text-white-100">
            Last Month
          </p>
        </div>
      </div>
    </DashboardCard>
  );
}
