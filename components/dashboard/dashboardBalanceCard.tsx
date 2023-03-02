import DashboardCard from "./dashboardCard";

export default function DashboardBalanceCard() {
  return (
    <DashboardCard title="balance">
      <div className="relative mt-6 flex items-center gap-x-6 after:absolute after:left-1/2 after:top-1/2 after:hidden after:h-full after:w-[3px] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white-300 after:content-[''] after:dark:bg-black-100 sm:gap-x-20 lg:justify-between lg:gap-x-0 lg:after:block">
        <div className="text-center">
          <p className="text-3xl font-semibold lg:text-2xl xl:text-3xl">
            £ 289.42
          </p>
          <p className="capitalize text-black-100 dark:text-white-100">
            Amount Due
          </p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-semibold lg:text-2xl xl:text-3xl">
            2 days
          </p>
          <p className="capitalize text-black-100 dark:text-white-100">
            Payment Due
          </p>
        </div>
      </div>
    </DashboardCard>
  );
}
