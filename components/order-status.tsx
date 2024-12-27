import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface OrderStatus {
  status: string;
  count: number;
  percentage: number;
  color: string;
  patternId: string;
}

interface OrdersStatusProps {
  data?: OrderStatus[];
  total?: number;
}

export  function OrdersStatus({ 
  total = 192,
  data = [
    {
      status: "Delivered",
      count: 510,
      percentage: 50,
      color: "#86efac",
      patternId: "delivered-pattern"
    },
    {
      status: "In Transit",
      count: 80,
      percentage: 25,
      color: "#93c5fd",
      patternId: "transit-pattern"
    },
    {
      status: "In Process",
      count: 78,
      percentage: 25,
      color: "#fcd34d",
      patternId: "process-pattern"
    }
  ]
}: OrdersStatusProps) {
  return (
    <Card className="bg-white p-6">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-6">
        <div>
          <h3 className="text-xl font-normal text-gray-900">
            Total Orders <span className="ml-1 text-gray-900">{total}</span>
          </h3>
        </div>
        <Select defaultValue="this-month">
          <SelectTrigger className="h-9 w-[130px] border-gray-200 bg-white text-sm font-normal">
            <SelectValue placeholder="This month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-month">This month</SelectItem>
            <SelectItem value="last-month">Last month</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex justify-between">
          <div className="space-y-6">
            {data.map((status) => (
              <div key={status.status} className="flex items-center gap-4">
                <div className="relative">
                  <div
                    className="h-3 w-8"
                    style={{ 
                      background: `repeating-linear-gradient(
                        -45deg,
                        ${status.color},
                        ${status.color} 2px,
                        transparent 2px,
                        transparent 6px
                      )`
                    }}
                  />
                  <div className="absolute bottom-0 h-[1px] w-full bg-gray-300" />
                </div>
                <div className="min-w-[140px]">
                  <p className="text-sm font-normal text-gray-900">
                    {status.status} ({status.percentage}%)
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{status.count}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative flex h-[160px] w-[160px] items-center justify-center">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
              <defs>
                {data.map((status) => (
                  <pattern
                    key={status.patternId}
                    id={status.patternId}
                    patternUnits="userSpaceOnUse"
                    width="4"
                    height="4"
                  >
                    <path
                      d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2"
                      stroke={status.color}
                      strokeWidth="1"
                    />
                  </pattern>
                ))}
              </defs>
              {data.map((status, index) => {
                const offset = data
                  .slice(0, index)
                  .reduce((acc, curr) => acc + curr.percentage, 0);
                return (
                  <circle
                    key={status.status}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={`url(#${status.patternId})`}
                    strokeWidth="20"
                    strokeDasharray={`${status.percentage} 100`}
                    strokeDashoffset={-offset}
                  />
                );
              })}
            </svg>
            <div className="absolute text-center">
              <div className="text-2xl font-semibold text-gray-900">100%</div>
              <div className="text-sm text-gray-500">Data</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}