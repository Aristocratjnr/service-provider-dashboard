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
      { name: "Laundry", value: 2589, percentage: 50, color: colors.gray },
      { name: "Event cleaning", value: 1449, percentage: 32, color: colors.primary },
      { name: "home textile clean", value: 1350, percentage: 28, color: colors.darkGray },
    ]
  }

  return (
    <Card className="p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-gray-900">Sales by services</h3>
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="w-[140px] h-9 text-sm bg-white">
            <SelectValue placeholder="This month" />
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
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{service.name}</span>
                <span className="font-medium text-gray-900">
                  {formatCurrency(service.value)} / {service.percentage}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{ width: `${service.percentage}%`, backgroundColor: service.color }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <DonutChart data={salesData.services} total={salesData.total} />
      </div>
    </Card>
  )
}

