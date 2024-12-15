"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calendar,
  CreditCard,
  LayoutDashboard,
  Shirt,
  Zap,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

const menuItems = [
  {
    title: "Overview",
    href: "/overview",
    icon: LayoutDashboard,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: Shirt,
  },
  {
    title: "Schedule",
    href: "/schedule",
    icon: Calendar,
  },
  {
    title: "Payment",
    href: "/payment",
    icon: CreditCard,
  },
  {
    title: "Quick Actions",
    href: "/quick-actions",
    icon: Zap,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="border-none flex mx-auto mb-10">
        <Image src="/images/logo.svg" width={120} height={85} alt="logo" />
      </SidebarHeader>
      <SidebarContent className="flex mx-auto">
        <SidebarMenu>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  className="gap-6 text-lg mb-5"
                >
                  <Link href={item.href}>
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
