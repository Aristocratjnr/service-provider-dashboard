"use client";

import { LayoutDashboard, ClipboardList, Calendar, DollarSign, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/legacy/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface LayoutProps {
  children: React.ReactNode;
}

const links = [
  { name: "Overview", href: "/overview", icon: LayoutDashboard },
  { name: "Orders", href: "/orders", icon: ClipboardList },
  { name: "Schedule", href: "/schedule", icon: Calendar },
  { name: "Pricing", href: "/payment", icon: DollarSign },
  { name: "Quick Actions", href: "/quick-actions", icon: Zap },
];

export default function DashboardSidebar({ children }: LayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex ">
      {/* Sidebar */}
      <div className="w-[240px] border-r border-gray-300 shadow-lg">
      <div className="w-64 border-r border-gray-300 px-4 py-6 dark:bg-gray-800 dark:border-gray-700 flex flex-col">
        {/* Logo */}
      <div>
        <Link href="/" className="flex items-center space-x-4">
          <Image src="/images/logo.svg" alt="Logo" width={100} height={60} />
        </Link>
      </div><br/><br/>

          {/* Navigation */}
          <nav className="space-y-10">
            {links.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                className={clsx(
                  "flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors duration-200",
                  {
                    "bg-[#023E8A] text-white": pathname === href,
                    "text-gray-600 hover:bg-gray-50": pathname !== href,
                  }
                )}
              >
                <Icon
                  className={clsx("w-5 h-5", {
                    "text-white": pathname === href,
                    "text-gray-600": pathname !== href,
                  })}
                />
                <span className="font-medium">{name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
