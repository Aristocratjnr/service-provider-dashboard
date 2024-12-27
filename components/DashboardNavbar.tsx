import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import { Bell, Search, Settings } from "lucide-react";
import Image from "next/image";


export default function Navbar() {
  return (
    <header className="flex items-center bg-white px-6 py-4 shadow-lg">
      <div className="flex h-10 w-12 items-center justify-center rounded-sm bg-[#023E8A]">
        <Image 
        src="/images/overview-icon.png"
        width={10} 
        height={10}
        alt="overview" 
        className="h-8 w-8 text-white" />
      </div>
      <h1 className="ml-4 text-lg font-semibold text-gray-800">Overview</h1>
      <div className="flex flex-grow items-center justify-end gap-8">
        <button>
          <Search className="text-[#023E8A]" />
        </button>
        <button>
          <Bell className="text-[#023E8A]" />
        </button>
        <button>
          <Settings className="text-[#023E8A]" />
        </button>
      </div>
      <div className="ml-16 flex items-center rounded-lg bg-[#023E8A] px-3 py-1">
        <div className="h-6 w-12">
          <Image
            src="/images/avatar.png"
            width={25} // Adjusted size for better appearance
            height={25}
            alt="User Avatar"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col text-white">
          <span className="text-sm font-semibold">Admin084</span>
          <span className="text-xs opacity-75">77884466</span>
        </div>
      </div>
    </header>
  );
}
