'use client'

import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, Box, Clock, Check } from 'lucide-react';

interface OrderStatus {
  status: string;
  count: number;
  percentage: number;
  color: string;
  patternId: string;
  trend?: {
    value: number;
    direction: 'up' | 'down';
  };
}

interface OrdersStatusProps {
  data?: OrderStatus[];
  total?: number;
}

export function OrdersStatus({ 
  total = 192,
  data = [
    {
      status: "Delivered",
      count: 510,
      percentage: 50,
      color: "#16A34A",
      patternId: "delivered-pattern",
      trend: { value: 3, direction: 'up' }
    },
    {
      status: "In Transit",
      count: 80,
      percentage: 25,
      color: "#2563EB",
      patternId: "transit-pattern",
      trend: { value: 2, direction: 'down' }
    },
    {
      status: "In Process",
      count: 78,
      percentage: 25,
      color: "#EAB308",
      patternId: "process-pattern",
      trend: { value: 4, direction: 'up' }
    }
  ]
}: OrdersStatusProps) {
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Delivered': return <Check className="h-4 w-4" />;
      case 'In Transit': return <TrendingUp className="h-4 w-4" />;
      case 'In Process': return <Clock className="h-4 w-4" />;
      default: return <Box className="h-4 w-4" />;
    }
  };

  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 border-b border-gray-100">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Box className="h-5 w-5 text-blue-600" />
            Orders Overview
          </h3>
          <p className="text-xs text-gray-500">
            Total Orders: <span className="font-medium text-gray-900">{total.toLocaleString()}</span>
          </p>
        </div>
        
        <Select defaultValue="this-month">
          <SelectTrigger className="h-8 w-[120px] border-gray-200 bg-white text-xs font-medium hover:border-gray-300 transition-colors">
            <SelectValue placeholder="This month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-month">This month</SelectItem>
            <SelectItem value="last-month">Last month</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="space-y-2 flex-1 w-full lg:w-auto">
            {data.map((status) => (
              <div key={status.status} 
                className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-6 h-6 rounded-lg"
                      style={{ backgroundColor: `${status.color}15` }}>
                      <div className="text-xs" style={{ color: status.color }}>
                        {getStatusIcon(status.status)}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">
                        {status.status}
                      </p>
                      <p className="text-[10px] text-gray-500">
                        {status.percentage}% of total
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">
                      {status.count.toLocaleString()}
                    </p>
                    {status.trend && (
                      <p className="text-[10px] font-medium" style={{ color: status.color }}>
                        {status.trend.direction === 'up' ? '↑' : '↓'} {status.trend.value}% vs last month
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="mt-1 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-500 rounded-full"
                    style={{ 
                      width: `${status.percentage}%`,
                      backgroundColor: status.color,
                      boxShadow: `0 0 4px ${status.color}40`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex h-[120px] w-[120px] lg:h-[150px] lg:w-[150px] items-center justify-center">
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
                      strokeWidth="1.5"
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
                    className="transition-all duration-500"
                  />
                );
              })}
            </svg>
            <div className="absolute text-center bg-white p-2 rounded-full shadow-sm">
              <div className="text-lg font-bold text-gray-900">100%</div>
              <div className="text-xs font-medium text-gray-500">Complete</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

