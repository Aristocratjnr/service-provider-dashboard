'use client'

import React from 'react'
import { 
  AreaChart, 
  Area, 
  ResponsiveContainer, 
  CartesianGrid, 
  Tooltip,
  YAxis
} from 'recharts'

interface AreaChartProps {
  data: Array<{ value: number }>
  color: string
  label: string
}

export function AreaChartSmall({ data, color, label }: AreaChartProps) {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-100">
          <p className="text-sm font-medium text-gray-900">
            {label}: {payload[0].value.toLocaleString()}
          </p>
        </div>
      )
    }
    return null
  }

  const CustomDot = ({ cx, cy, payload, value }: any) => (
    <circle
      cx={cx}
      cy={cy}
      r={4}
      stroke={color}
      strokeWidth={2}
      fill="white"
      className="transition-all duration-300 hover:r-6 cursor-pointer"
    />
  )

  return (
    <div className="h-[100px] mt-4 relative group" aria-label={`Area chart for ${label}`}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart 
          data={data} 
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient 
              id={`gradient-${color}`} 
              x1="0" 
              y1="0" 
              x2="0" 
              y2="1"
            >
              <stop 
                offset="0%" 
                stopColor={color} 
                stopOpacity={0.4} 
              />
              <stop 
                offset="100%" 
                stopColor={color} 
                stopOpacity={0.05} 
              />
            </linearGradient>
          </defs>

          <CartesianGrid 
            strokeDasharray="3 3" 
            vertical={false} 
            stroke="#f0f0f0" 
            opacity={0.5}
          />

          <YAxis 
            hide 
            domain={['dataMin - 5', 'dataMax + 5']} 
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2.5}
            fill={`url(#gradient-${color})`}
            dot={CustomDot}
            activeDot={{
              r: 6,
              stroke: color,
              strokeWidth: 3,
              fill: 'white',
              className: "transition-all duration-300 animate-pulse"
            }}
          />

          <Tooltip 
            content={CustomTooltip}
            cursor={{ 
              stroke: color, 
              strokeWidth: 2,
              strokeDasharray: '5 5', 
              strokeOpacity: 0.7 
            }}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}

