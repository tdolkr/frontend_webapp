import SideBar from "@/components/SideBar";
import TopNav from "@/components/TopNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white flex">
      <SideBar role="visa-officer" />
      <section className="flex-1 bg-[#F7FBFC]">
        <TopNav />
        <div className="px-6 py-8">{children}</div>
      </section>
    </main>
  );
}
