"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface OrdersNavProps {
  totalOrders?: number;
}

export default function OrdersNav({ totalOrders = 1135 }: OrdersNavProps) {
  const tabs = [
    { value: "all", label: "All" },
    { value: "pending", label: "Pending" },
    { value: "received", label: "Received" },
    { value: "in-process", label: "In Process" },
    { value: "in-transit", label: "In Transit" },
    { value: "delivered", label: "Delivered" },
  ];

  return (
    <div className="flex items-center justify-between border-b">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="h-auto bg-transparent p-0">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={cn(
                "relative h-10 rounded-none bg-transparent px-4 font-normal text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none",
                "after:absolute after:bottom-0 after:left-0 after:right-0 after:-mb-px after:hidden after:h-0.5 after:bg-blue-800 after:content-[''] data-[state=active]:after:block",
              )}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="flex items-baseline gap-1 px-4 py-2">
        <div className="rounded-md px-3 py-2 text-blue-800 shadow-md">
          <span className="mr-1 text-lg font-semibold">
            {totalOrders.toLocaleString()}
          </span>
          <span className="text-sm text-muted-foreground">Orders</span>
        </div>
      </div>
    </div>
  );
}
