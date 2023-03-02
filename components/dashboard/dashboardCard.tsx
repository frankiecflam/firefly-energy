import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function DashboardCard({
  title,
  children,
  className,
}: DashboardCardProps) {
  return (
    <div
      className={`rounded-md bg-white-300 py-8 px-6 dark:bg-black xl:px-12 ${
        className ? className : ""
      }`}
    >
      <h2 className="text-4xl font-semibold capitalize">{title}</h2>
      {children}
    </div>
  );
}
