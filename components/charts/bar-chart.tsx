'use client'

import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts'
import { colors } from "@/lib/utils"

interface BarChartProps {
  data: Array<{
    name: string
    value1: number
    value2: number
  }>
}

export function BarChartComponent({ data }: BarChartProps) {
  return (
    <div className="h-[200px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
          />
          <Bar dataKey="value1" fill={colors.primary} radius={[2, 2, 0, 0]} />
          <Bar dataKey="value2" fill={colors.gray} radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

