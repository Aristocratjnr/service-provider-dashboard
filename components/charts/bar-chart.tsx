'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { colors } from "@/lib/utils";

interface BarChartProps {
  data: Array<{
    name: string;
    value1: number;
    value2: number;
  }>;
}

export function BarChartComponent({ data }: BarChartProps) {
  return (
    <div className="h-[460px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 10 }} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
            tickFormatter={(value) => value}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
            tickFormatter={(value) => value.toLocaleString()}
            width={30}
          />
          <Tooltip
            cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
            contentStyle={{ borderRadius: '8px', fontSize: '12px', color: '#374151' }}
          />
          <Bar 
            dataKey="value1" 
            fill={colors.primary} 
            radius={[4, 4, 0, 0]} 
            barSize={8} 
          />
          <Bar 
            dataKey="value2" 
            fill="#FFB800"
            radius={[4, 4, 0, 0]} 
            barSize={8} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
