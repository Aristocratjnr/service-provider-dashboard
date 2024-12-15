"use client";

import { usePathname } from "next/navigation";
import {
  Bell,
  Calendar,
  CreditCard,
  LayoutDashboard,
  Search,
  Settings,
  Shirt,
  Zap,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const routes = {
  "/dashboard": {
    name: "Overview",
    icon: LayoutDashboard,
  },
  "/dashboard/orders": {
    name: "Orders",
    icon: Shirt,
  },
  "/dashboard/schedule": {
    name: "Schedule",
    icon: Calendar,
  },
  "/dashboard/payment": {
    name: "Payment",
    icon: CreditCard,
  },
  "/dashboard/quick-actions": {
    name: "Quick Actions",
    icon: Zap,
  },
};

export function DashboardNavbar() {
  const pathname = usePathname();
  const route = routes[pathname as keyof typeof routes];

  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div className="flex items-center gap-2">
        {route && (
          <>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <route.icon className="h-5 w-5" />
            </div>
            <h1 className="text-xl font-semibold">{route.name}</h1>
          </>
        )}
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
        <div className="flex items-center gap-2 rounded-lg bg-primary p-1 pr-3 text-primary-foreground">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="Admin" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-sm">
            <span className="font-medium">Admin084</span>
            <span className="text-xs opacity-80">77884466</span>
          </div>
        </div>
      </div>
    </header>
  );
}
