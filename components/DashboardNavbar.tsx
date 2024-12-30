"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Search, Bell, Settings } from "lucide-react";
import Image from "next/legacy/image";

const Navbar = () => {
  const pathname = usePathname();

  const pageName =
    pathname === "/pricing"
      ? "Pricing"
      : pathname === "/quick-actions"
        ? "Quick Actions"
        : pathname === "/orders"
          ? "Orders"
          : pathname === "/payment"
            ? "Payment"
            : pathname === "/schedule"
              ? "Schedule"
              : "Overview";

  return (
    <header className="flex items-center justify-between bg-white px-6 py-3 shadow-md">
      {/* Left section with logo and title */}
      <div className="flex items-center">
        <div className="flex h-9 w-10 items-center justify-center rounded bg-[#023E8A]">
          <div className="relative h-5 w-5">
            <Image
              src="/images/overview-icon.png"
              alt="Overview"
              layout="fill"
              className="object-contain brightness-0 invert"
            />
          </div>
        </div>
        <h1 className="ml-3 text-base font-semibold text-gray-700">
          {pageName}
        </h1>
      </div>

      {/* Right section with icons and profile */}
      <div className="flex items-center space-x-6">
        {/* Action icons */}
        <div className="flex items-center space-x-6">
          <button className="rounded-full p-1 hover:bg-gray-100">
            <Search size={20} className="text-[#023E8A]" />
          </button>
          <button className="rounded-full p-1 hover:bg-gray-100">
            <Bell size={20} className="text-[#023E8A]" />
          </button>
          <button className="rounded-full p-1 hover:bg-gray-100">
            <Settings size={20} className="text-[#023E8A]" />
          </button>
        </div>

        {/* Profile section */}
        <div className="ml-8 flex items-center rounded-lg bg-[#023E8A] px-3 py-1.5">
          <div className="relative h-7 w-7 overflow-hidden rounded-full">
            <Image
              src="/images/avatar.png"
              alt="User Avatar"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="ml-2 flex flex-col">
            <span className="text-sm font-semibold text-white">Admin084</span>
            <span className="text-xs text-white/75">77884466</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
