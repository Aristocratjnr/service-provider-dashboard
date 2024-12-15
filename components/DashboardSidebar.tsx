import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="text-white w-64 min-h-screen flex flex-col bg-white border-r shadow-lg">
      <div className="p-4 text-lg font-bold">
        <Image src="/images/logo.svg" width={120} height={85} alt="logo" />
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          <li>
            <Link
              href="/overview"
              className="block p-2 rounded hover:bg-gray-700 transition-colors duration-300"
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              href="/orders"
              className="block p-2 rounded hover:bg-gray-700 transition-colors duration-300"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              href="/schedule"
              className="block p-2 rounded hover:bg-gray-700 transition-colors duration-300"
            >
              Schedules
            </Link>
          </li>
          <li>
            <Link
              href="/payment"
              className="block p-2 rounded hover:bg-gray-700 transition-colors duration-300"
            >
              Payments
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
