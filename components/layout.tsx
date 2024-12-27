import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Search, Bell, Settings, LayoutDashboard, ClipboardList, Calendar, DollarSign, Zap } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex bg-[#F8F9FB]">
      {/* Sidebar */}
      <div className="w-[240px] border-r bg-white">
        <div className="p-5">
          <div className="flex items-center space-x-2 mb-8">
            <Image
              src="/placeholder.svg"
              alt="TuLaundry"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-xl font-semibold text-gray-900">TuLaundry</span>
          </div>
          <nav className="space-y-1">
            <Link
              href="#"
              className="flex items-center space-x-3 px-4 py-2.5 bg-[#3366FF] text-white rounded-lg"
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className="font-medium">Overview</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <ClipboardList className="w-5 h-5" />
              <span className="font-medium">Orders</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Schedule</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <DollarSign className="w-5 h-5" />
              <span className="font-medium">Pricing</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Zap className="w-5 h-5" />
              <span className="font-medium">Quick Actions</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <header className="h-16 border-b bg-white flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <LayoutDashboard className="w-5 h-5 text-[#3366FF]" />
              <span className="font-medium text-gray-900">Overview</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-600">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-600">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-600">
              <Settings className="h-5 w-5" />
            </Button>
            <Button className="bg-[#3366FF] hover:bg-[#2952CC] text-white rounded-lg px-4 py-2 text-sm font-medium">
              Admin24
            </Button>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

