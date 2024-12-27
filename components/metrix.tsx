'use client'

import { Card } from "@/components/ui/card"
import { AreaChartSmall } from "@/components/charts/area-chart"
import { colors } from "@/lib/utils"
import { formatLargeNumber, formatCurrency } from "@/lib/utils"

export function Metrics() {
  const metrics = [
    {
      label: "Packages Used",
      value: "53",
      subLabel: "Last 7 days",
      color: colors.primary,
      data: Array.from({ length: 20 }, () => ({ value: Math.random() * 100 }))
    },
    {
      label: "Total Orders",
      value: "123",
      subLabel: "Last 7 days",
      color: colors.primary,
      data: Array.from({ length: 20 }, () => ({ value: Math.random() * 100 }))
    },
    {
      label: "Average Order Value",
      value: "37",
      subLabel: "Last 7 days",
      color: colors.primary,
      data: Array.from({ length: 20 }, () => ({ value: Math.random() * 100 }))
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="p-4 shadow-sm">
          <div className="text-sm text-gray-500">{metric.label}</div>
          <div className="text-xl font-semibold mt-1 text-gray-900">{metric.value}</div>
          <div className="text-xs text-gray-400 mt-1">{metric.subLabel}</div>
          <AreaChartSmall data={metric.data} color={metric.color} />
        </Card>
      ))}
    </div>
  )
}

