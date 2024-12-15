import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
      <div className="p-4 text-lg font-bold">Dashboard</div>
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          <li>
            <Link
              href="/overview"
              className="block p-2 rounded hover:bg-gray-700"
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              href="/orders"
              className="block p-2 rounded hover:bg-gray-700"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              href="/schedule"
              className="block p-2 rounded hover:bg-gray-700"
            >
              Schedules
            </Link>
          </li>
          <li>
            <Link
              href="/payment"
              className="block p-2 rounded hover:bg-gray-700"
            >
              Payments
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
