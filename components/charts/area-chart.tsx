'use client'

import { AreaChart, Area, ResponsiveContainer } from 'recharts'

interface AreaChartProps {
  data: Array<{ value: number }>
  color: string
}

export function AreaChartSmall({ data, color }: AreaChartProps) {
  return (
    <div className="h-[60px] mt-3">
      <ResponsiveContainer width="80%" height="100%">
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.2} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            fill={`url(#gradient-${color})`}
            strokeWidth={1.5}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

