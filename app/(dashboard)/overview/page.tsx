'use client'


import { MetricsCard } from "@/components/metrics-card"

import { OrdersStatus } from "@/components/order-status"
import { SalesChart } from "@/components/sales-chart"

import { AreaChartSmall } from "@/components/charts/area-chart"
import { TopServices } from "@/components/top-services"
import { Orders } from "@/components/orders"
import { MethodPreferred } from "@/components/method-preffered"



const orderStatusData = [
  { status: "Delivered", count: 510, percentage: 50, color: "#22c55e" },
  { status: "In Transit", count: 80, percentage: 25, color: "#3b82f6" },
  { status: "In Process", count: 78, percentage: 25, color: "#eab308" },
]

const topIssuesData = [
  { name: "Dry cleaning", orders: 12, status: "Running", type: "Service", count: 5 },
  { name: "Laundry", orders: 8, status: "Running", type: "Service", count: 3 },
  { name: "Ironing", orders: 3, status: "Running", type: "Service", count: 2 },
  { name: "Folding", orders: 2, status: "Running", type: "Service", count: 1 },
]

const generateChartData = (points: number) => {
  return Array.from({ length: points }, (_, i) => ({
    name: `${i + 1}`,
    value: Math.floor(Math.random() * 100) + 50,
  }))
}

const methodPreferredData = {
  startDate: "Aug 30, 2023",
  endDate: "Aug 31, 2023",
  methods: [
    {
      name: "Pick-Up",
      count: 20,
      percentage: 17.4,
      color: "blue-500"
    },
    {
      name: "Delivery",
      count: 95,
      percentage: 82.6,
      color: "red-400"
    }
  ]
}

export default function Dashboard() {
  return (

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Welcome Back!</h1>
            <p className="text-sm text-muted-foreground">Track your sales and performance</p>
          </div>
          <select className="rounded-md border px-3 py-2 text-sm">
            <option>Filters</option>
          </select>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <MetricsCard
            title="Packages Used"
            value="53"
            chart={<AreaChartSmall data={generateChartData(12)} color="#22c55e" />}
          />
          <MetricsCard
            title="Active Orders"
            value="123"
            chart={<AreaChartSmall data={generateChartData(12)} color="#3b82f6" />}
          />
          <MetricsCard
            title="Revenue Growth"
            value="37"
            chart={<AreaChartSmall data={generateChartData(12)} color="#f59e0b" />}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
         <SalesChart  />
          <OrdersStatus data={orderStatusData} total={192} />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
        <Orders/>
        <div className="space-y-6">
          <TopServices data ={topIssuesData} />
          <MethodPreferred 
            startDate={methodPreferredData.startDate}
            endDate={methodPreferredData.endDate}
            methods={methodPreferredData.methods}
          />
        </div>
        </div>
      </div>
  
  )
}

