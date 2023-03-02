"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  Legend,
} from "recharts";
import DashboardCard from "./dashboardCard";

const FAKE_DATA = Array.from({ length: 7 }, (_, index) => ({
  date: `${(index + 1).toString().padStart(2, "0")}/02`,
  reading: 1580 + index * 2,
}));

function CustomTooltip({
  active,
  label,
  payload,
}: TooltipProps<number, string>) {
  if (active && payload && payload.length) {
    return (
      <div className="r bg-white-100 p-2 text-sm dark:bg-black-200">
        <p>Date: {label}</p>
        <p>Reading: {payload[0].value} </p>
      </div>
    );
  }

  return null;
}

export default function DashboardMeterReadings() {
  return (
    <DashboardCard title="meter readings" className="row-span-2">
      <ResponsiveContainer width="90%" height={350}>
        <LineChart
          data={FAKE_DATA}
          margin={{ top: 50, bottom: 50, left: 10, right: 10 }}
        >
          <Line
            type="monotone"
            dataKey="reading"
            stroke="#fcbf49"
            strokeWidth={3}
          />
          <XAxis
            dataKey="date"
            padding={{
              left: 20,
              right: 20,
            }}
          />
          <YAxis
            type={"number"}
            domain={["dataMin", "dataMax"]}
            padding={{
              top: 20,
              bottom: 20,
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            content={() => (
              <div className="py-4 text-center text-black-300 dark:text-white-300">
                Last 7 days
              </div>
            )}
            height={10}
          />
        </LineChart>
      </ResponsiveContainer>
    </DashboardCard>
  );
}
