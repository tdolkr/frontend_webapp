import SideBar from "@/components/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white flex">
      <SideBar role="visa-officer" />
      <section className="flex-1 px-6 py-8">{children}</section>
    </main>
  );
}
