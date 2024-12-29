'use client';

import React from 'react';
import { AreaChart, Area, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';

interface AreaChartProps {
  data: Array<{ value: number }>; 
  color: string; 
}

export function AreaChartSmall({ data, color }: AreaChartProps) {
  return (
    <div className="h-[70px] mt-4">
      <ResponsiveContainer width="100%" height="120%">
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          {/* Gradient for the area fill */}
          <defs>
            <linearGradient id={`gradient-${color}`} x1="0" y1="1" x2="0" y2="2">
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
            dot={{
              r: 4, 
              stroke: color, 
              strokeWidth: 2, 
              fill: '#03045E', 
            }}
          />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
