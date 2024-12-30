'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, Calendar, TrendingUp } from 'lucide-react'

interface Method {
  name: string
  count: number
}

interface MethodPreferredProps {
  startDate: string
  endDate: string
  methods: Method[]
}

export function MethodPreferred({ startDate, endDate, methods }: MethodPreferredProps) {
  const total = methods.reduce((sum, method) => sum + method.count, 0)
  
  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-gray-50/40">
      {/* Header Section */}
      <div className="p-6 border-b border-gray-100">
        <div className="space-y-4">
          {/* Title and Action Button */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[#444CE7]" />
                Method Preferred
              </h3>
              <p className="text-sm text-gray-500">Delivery preference analysis</p>
            </div>
            <button
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg 
                bg-[#444CE7]/10 hover:bg-[#444CE7]/15 text-[#444CE7] 
                transition-all duration-200 font-medium text-sm"
            >
              View details
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
          
          {/* Date Range */}
          <div className="flex items-center gap-2 text-sm bg-white px-4 py-2.5 rounded-lg border border-gray-200/75 shadow-sm">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600 font-medium">{startDate}</span>
            <span className="text-gray-400">to</span>
            <span className="text-gray-600 font-medium">{endDate}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="p-6">
        <div className="space-y-6">
          {methods.map((method, index) => {
            const percentage = ((method.count / total) * 100).toFixed(1)
            const isPickup = method.name === 'Pick-Up'
            const baseColor = isPickup ? '#444CE7' : '#F97066'
            const lightColor = isPickup ? '#EEF4FF' : '#FEF3F2'
            
            return (
              <div key={method.name} 
                className="p-4 rounded-xl hover:shadow-sm transition-all duration-300"
                style={{ backgroundColor: `${baseColor}05` }}
              >
                <div className="space-y-3">
                  {/* Method Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-8 rounded-full" style={{ backgroundColor: baseColor }} />
                      <div>
                        <h4 className="font-semibold text-gray-900">{method.name}</h4>
                        <p className="text-xs text-gray-500">Method {index + 1}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-lg font-bold tabular-nums text-gray-900">
                        {method.count.toLocaleString()}
                      </span>
                      <span className="text-sm font-medium" style={{ color: baseColor }}>
                        {percentage}%
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full transition-all duration-700 ease-out rounded-full"
                      style={{
                        backgroundColor: baseColor,
                        width: `${percentage}%`,
                        boxShadow: `0 0 12px ${baseColor}40`
                      }}
                    />
                  </div>
                  
                  {/* Trend Indicator */}
                  <div className="flex items-center gap-2 text-xs font-medium" style={{ color: baseColor }}>
                    <div className="px-2 py-1 rounded-md" style={{ backgroundColor: lightColor }}>
                      {isPickup ? '↑ 2.4% vs last period' : '↓ 1.8% vs last period'}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}