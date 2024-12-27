'use client'

import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { BarChartComponent } from "@/components/charts/bar-chart"

export function Orders() {
  const [timeframe, setTimeframe] = useState("this-month")
  
  const orderData = {
    total: 192,
    statuses: [
      { name: "Delivered (50%)", count: 510, percentage: 50, color: "#10B981" },
      { name: "In Transit (25%)", count: 80, percentage: 25, color: "#3366FF" },
      { name: "In Process (25%)", count: 78, percentage: 25, color: "#FFB800" },
    ],
    chartData: [
      { name: "Jan", value1: 35, value2: 25 },
      { name: "Feb", value1: 45, value2: 30 },
      { name: "Mar", value1: 40, value2: 35 },
      { name: "Apr", value1: 50, value2: 40 },
      { name: "May", value1: 45, value2: 35 },
      { name: "Jun", value1: 55, value2: 45 },
      { name: "Jul", value1: 50, value2: 40 },
      { name: "Aug", value1: 60, value2: 50 },
      { name: "Sep", value1: 55, value2: 45 },
      { name: "Oct", value1: 65, value2: 55 },
      { name: "Nov", value1: 60, value2: 50 },
      { name: "Dec", value1: 70, value2: 60 },
    ]
  }

  return (
    <Card className="p-6 shadow-sm bg-white">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Total Orders</h3>
          <div className="text-3xl font-bold mt-1 text-gray-900">{orderData.total}</div>
        </div>
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="w-[140px] h-9 text-sm bg-white border-gray-200">
            <SelectValue placeholder="This month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-month">This month</SelectItem>
            <SelectItem value="last-month">Last month</SelectItem>
            <SelectItem value="this-year">This year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-3 mb-6">
        {orderData.statuses.map((status) => (
          <div key={status.name} className="flex items-center space-x-3">
            <div 
              className="w-2.5 h-2.5 rounded-full" 
              style={{ backgroundColor: status.color }}
            />
            <div className="flex-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">
                  {status.name}
                </span>
                <span className="font-medium text-gray-900">{status.count}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-sm font-medium text-gray-900">Other Providers</h4>
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <div className="flex items-center space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#3366FF]" />
              <span>This Period</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFB800]" />
              <span>Last Period</span>
            </div>
          </div>
        </div>
        <BarChartComponent data={orderData.chartData} />
      </div>
    </Card>
  )
}

