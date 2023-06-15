import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardTeacherHeader from "@/components/DashboardTeacherHeader";
import DashboardTeacherSidebar from "@/components/DashboardTeacherSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="dashboard-layout h-screen w-full">
      <DashboardTeacherHeader nome="Hamilton Foguetão" funcao="Docente" />
      <DashboardTeacherSidebar />
      {children}
    </main>
  );
}
