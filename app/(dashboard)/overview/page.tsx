'use client';
import { MetricsCard } from "@/components/metrics-card";
import { OrdersStatus } from "@/components/order-status";
import { SalesChart } from "@/components/sales-chart";
import { AreaChartSmall } from "@/components/charts/area-chart";
import { TopServices } from "@/components/top-services";
import { Orders } from "@/components/orders";
import { MethodPreferred } from "@/components/method-preffered";
import { FilterIcon } from "lucide-react";

const orderStatusData = [
  { status: "Delivered", count: 510, percentage: 50, color: "#22c55e", patternId: "pattern1" },
  { status: "In Transit", count: 80, percentage: 25, color: "#3b82f6", patternId: "pattern2" },
  { status: "In Process", count: 78, percentage: 25, color: "#eab308", patternId: "pattern3" },
];

const topIssuesData = [
  { name: "Dry cleaning", orders: 12, status: "warning", type: "Late delivery", count: 10, trend: { value: 5, direction: 'up' as 'up' } },
  { name: "Laundry", orders: 8, status: "warning", type: "High pricing", count: 15, trend: { value: 3, direction: 'down' as 'down' } },
  { name: "Ironing", orders: 3, status: "warning", type: "Missing Item", count:  2, trend: { value: 1, direction: 'up' as 'up' } },
];

const generateChartData = (points: number) => {
  return Array.from({ length: points }, (_, i) => ({
    name: `${i + 1}`,
    value: Math.floor(Math.random() * 100) + 50,
  }));
};

const methodPreferredData = {
  startDate: "Aug 30, 2025",
  endDate: "Aug 31, 2025",
  methods: [
    {
      name: "Pick-Up",
      count: 20,
      percentage: 17.4,
      color: "blue-500",
    },
    {
      name: "Delivery",
      count: 95,
      percentage: 82.6,
      color: "red-400",
    },
  ],
};

export default function Dashboard() {
  return (
    <div className="space-y-6" style={{ background: 'rgba(161, 222, 247, 0.10)' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semi-bold tracking-tight">
            Welcome <span className="text-[#023E8A]">Back!</span>
          </h1>
          <p className="text-sm text-gray-800">Track your sales and performance</p>
        </div>
       
        <div className="relative">
          <select className="appearance-none w-full rounded-md text-gray-500 border border-cyan-300 pl-8 pr-3 py-2 text-sm">
            <option className="text-gray-400">Filters</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
          <FilterIcon className="absolute top-1/2 left-2 h-5 w-5 transform -translate-y-1/2 text-gray-600 pointer-events-none" />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <MetricsCard
          title="Basic Clean"
          value="53"
          chart={<AreaChartSmall data={generateChartData(12)} color="#22c55e" label={""} />}
        />
        <MetricsCard
          title="Event Ready"
          value="123"
          chart={<AreaChartSmall data={generateChartData(12)} color="#3b82f6" label={""} />}
        />
        <MetricsCard
          title="Semester Essential"
          value="37"
          chart={<AreaChartSmall data={generateChartData(12)} color="#f59e0b" label={""} />}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <SalesChart />
        <OrdersStatus data={orderStatusData} total={192} />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Orders />
        <div className="space-y-6">
          <TopServices data={topIssuesData} />
          <MethodPreferred
            startDate={methodPreferredData.startDate}
            endDate={methodPreferredData.endDate}
            methods={methodPreferredData.methods}
          />
        </div>
      </div>
    </div>
  );
}
