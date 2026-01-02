import DashboardCard from "@/components/DashboardCard";
import {
  DashboardIcon,
  DocumentsIcon,
  StatusIcon,
  StudentsIcon,
} from "@/components/icons";

export default function VisaOfficerDashboardPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900">
        Visa Officer Dashboard
      </h1>
      <p className="mt-2 text-sm text-gray-500">Visa officer dashboard</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardCard
          icon={<DashboardIcon />}
          heading="Card1"
          subheading="Summary"
        />
        <DashboardCard
          icon={<StudentsIcon />}
          heading="Card2"
          subheading="Summary"
        />
        <DashboardCard
          icon={<DocumentsIcon />}
          heading="Card3"
          subheading="Summary"
        />
        <DashboardCard
          icon={<StatusIcon />}
          heading="Card4"
          subheading="Summary"
        />
      </div>
    </>
  );
}
