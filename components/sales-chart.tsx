'use client'

import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { DonutChart } from "@/components/charts/donut-chart"
import { formatCurrency, colors } from "@/lib/utils"

export function SalesChart() {
  const [timeframe, setTimeframe] = useState("this-month")
  
  const salesData = {
    total: 5388,
    services: [
      { 
        name: "Laundry", 
        value: 2589, 
        percentage: 50, 
        color: colors.gray,
        pattern: "rounded-boxes"
      },
      { 
        name: "Event cleaning", 
        value: 1449, 
        percentage: 32, 
        color: colors.primary,
        pattern: "solid"
      },
      { 
        name: "home textile clean", 
        value: 1350, 
        percentage: 28, 
        color: colors.darkGray,
        pattern: "solid"
      }
    ]
  }

  const RoundedBoxPattern = ({ color }: { color: string }) => (
    <svg width="100%" height="100%" className="absolute inset-0">
      <defs>
        <pattern id="rounded-box-pattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect 
            x="0.5" 
            y="0.8" 
            width="5" 
            height="5" 
            rx="1" 
            ry="1" 
            fill="none" 
            stroke="white" 
            strokeOpacity="0.3" 
            strokeWidth="0.75"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={color} />
      <rect width="100%" height="100%" fill="url(#rounded-box-pattern)" />
    </svg>
  )

  return (
    <Card className="p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-x1 font-normal text-gray-500">Sales by services</h2>
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="w-[120px] h-9 text-sm bg-white border border-b border-cyan-300">
            <SelectValue placeholder="This month"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-month">This month</SelectItem>
            <SelectItem value="last-month">Last month</SelectItem>
            <SelectItem value="this-year">This year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex space-x-8">
        <div className="flex-1 space-y-4">
          {salesData.services.map((service) => (
            <div key={service.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-2 rounded relative overflow-hidden">
                    {service.pattern === "rounded-boxes" ? (
                      <RoundedBoxPattern color={service.color} />
                    ) : (
                      <div className="w-full h-full rounded" style={{ backgroundColor: service.color }} />
                    )}
                  </div>
                  <span className="text-gray-600 font-sans">{service.name}</span>
                </div>
                <span className=" text-md font-sans font-bold text-gray-900">
                  {formatCurrency(service.value)} / {service.percentage}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-gray-100">
                <div className="h-full rounded-full relative overflow-hidden" 
                  style={{ width: `${service.percentage}%` }}>
                  {service.pattern === "rounded-boxes" ? (
                    <RoundedBoxPattern color={service.color} />
                  ) : (
                    <div className="w-full h-full" style={{ backgroundColor: service.color }} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <DonutChart data={salesData.services} total={salesData.total} />
      </div>
    </Card>
  )
}