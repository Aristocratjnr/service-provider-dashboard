"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "All", path: "/orders" },
  { name: "Pending", path: "/orders/pending" },
  { name: "Received", path: "/orders/received" },
  { name: "In Process", path: "/orders/in-process" },
  { name: "In Transit", path: "/orders/in-transit" },
  { name: "Delivered", path: "/orders/delivered" },
];

interface OrdersNavProps {
  totalOrders?: number;
}

export default function OrderNavbar({ totalOrders = 1500 }: OrdersNavProps) {
  const pathname = usePathname();
  return (
    <nav className="border-b">
      <div className="flex items-center justify-between px-4">
        <div className="flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`border-b-2 px-6 py-4 text-sm font-medium text-gray-600 transition-colors ${
                pathname === item.path
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent hover:border-gray-300 hover:text-gray-900"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 rounded-lg border px-4 py-2 shadow-md">
          <span className="text-md font-semibold text-blue-800">
            {totalOrders.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500">Orders</span>
        </div>
      </div>
    </nav>
  );
}
