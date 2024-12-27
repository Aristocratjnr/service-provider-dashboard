import DashboardNavbar from "@/components/DashboardNavbar";
import DashboardSiderbar from "@/components/DashboardSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <DashboardSiderbar children={undefined} />
      <div className="flex-1 flex flex-col min-h-screen">
        <DashboardNavbar />
        <main className="p-6 bg-gray-100 flex-grow">{children}</main>
      </div>
    </div>
  );
}
