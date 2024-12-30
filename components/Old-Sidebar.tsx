"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  ClipboardDocumentListIcon,
  InboxStackIcon,
  CalendarIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Overview", href: "/overview", icon: ClipboardDocumentListIcon },
    { name: "Orders", href: "/orders", icon: InboxStackIcon },
    { name: "Schedules", href: "/schedule", icon: CalendarIcon },
    { name: "Payments", href: "/payment", icon: BanknotesIcon },
  ];

  return (
    <div className="flex min-h-screen w-64 flex-col border-r bg-white shadow-lg">
      <div className="mx-auto mb-10 flex p-4 text-lg font-bold">
        <Image src="/images/logo.svg" width={120} height={85} alt="logo" />
      </div>
      <div className="flex-grow">
        <ul className="space-y-4 p-4 text-lg">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={clsx(
                    "flex items-center gap-3 rounded p-2 transition-colors duration-300 hover:bg-blue-300 hover:text-white",
                    {
                      "bg-blue-300 font-semibold text-white":
                        pathname === link.href,
                    },
                  )}
                >
                  <Icon
                    className={clsx("h-5 w-5", {
                      "text-white": pathname === link.href,
                      "text-black": pathname !== link.href,
                    })}
                  />
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
