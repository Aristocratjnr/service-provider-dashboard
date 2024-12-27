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
    <div className="h-[180px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
            tickFormatter={(value) => value}
            dy={10}
          />
          <Bar 
            dataKey="value1" 
            fill="#3366FF" 
            radius={[2, 2, 0, 0]} 
            barSize={6}
          />
          <Bar 
            dataKey="value2" 
            fill="#FFB800" 
            radius={[2, 2, 0, 0]} 
            barSize={6}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

