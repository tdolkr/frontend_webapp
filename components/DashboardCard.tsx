import { type ReactNode } from "react";

type DashboardCardProps = {
  icon?: ReactNode;
  heading: string;
  subheading: string;
};

export default function DashboardCard({
  icon,
  heading,
  subheading,
}: DashboardCardProps) {
  return (
    <div className="rounded-lg bg-white p-3 shadow-sm">
      <div className="flex items-center gap-2">
        {icon ? <span className="text-[#769FCD]">{icon}</span> : null}
        <h1 className="text-sm font-semibold text-gray-800">{heading}</h1>
      </div>
      <h2 className="mt-1 text-xs font-medium text-gray-500">{subheading}</h2>
    </div>
  );
}
