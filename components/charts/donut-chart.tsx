'use client'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { formatCurrency } from "@/lib/utils"

interface DonutChartProps {
  data: Array<{
    name: string
    value: number
    color: string
  }>
  total: number
}

export function DonutChart({ data, total }: DonutChartProps) {
  return (
    <div className="relative w-[180px] h-[180px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-sm text-gray-500">Total</div>
          <div className="text-2xl font-bold text-gray-900">{formatCurrency(total)}</div>
        </div>
      </div>
    </div>
  )
}

