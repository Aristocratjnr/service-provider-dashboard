import OrderSubNavbar from "@/components/orders/OrderNavbar";
import OrderToolbar from "@/components/orders/OrderToolbar";

import { ReactNode } from "react";

export default function OrderLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <OrderSubNavbar />
      <OrderToolbar />
      <main className="flex-1 overflow-y-auto p-4">
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
}
