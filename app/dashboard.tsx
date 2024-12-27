'use client'

import { Layout } from "../components/layout"
import { MetricsCard } from "../components/metrics-card"
import { SalesChart } from "../components/sales-chart"
import { OrdersStatus } from "../components/order-status"
import { HistoricalPackages } from "../components/historical-package"
import { AreaChartSmall } from "../components/charts/area-chart"
import { TopServices } from "../components/top-services"

const serviceData = [
  { name: "Laundry", value: 2589, percentage: 50, color: "#3b82f6" },
  { name: "Event cleaning", value: 1449, percentage: 32, color: "#8b5cf6" },
  { name: "Home textile clean", value: 1350, percentage: 28, color: "#6366f1" },
]

const orderStatusData = [
  { status: "Delivered", count: 510, percentage: 50, color: "#22c55e" },
  { status: "In Transit", count: 80, percentage: 25, color: "#3b82f6" },
  { status: "In Process", count: 78, percentage: 25, color: "#eab308" },
]

const topServicesData = [
  { name: "Dry cleaning", orders: 12, status: "Running" },
  { name: "Laundry", orders: 8, status: "Running" },
  { name: "Ironing", orders: 3, status: "Running" },
  { name: "Folding", orders: 2, status: "Running" },
]

const generateChartData = (points: number) => {
  return Array.from({ length: points }, (_, i) => ({
    name: `${i + 1}`,
    value: Math.floor(Math.random() * 100) + 50,
  }))
}

const historicalPackagesData = generateChartData(7)

export default function Dashboard() {
  return (
    <Layout>
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
         {/* <SalesChart data={salesData} total={5388} /> */}
          <OrdersStatus data={orderStatusData} total={192} />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <HistoricalPackages data={historicalPackagesData} />
          <TopServices data={topServicesData} />
        </div>
      </div>
    </Layout>
  )
}

