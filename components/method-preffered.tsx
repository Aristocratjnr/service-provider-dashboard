'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from 'lucide-react'

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
    <Card className="shadow-sm bg-white">
      <div className="px-6 pt-5 pb-0">
        <div className="space-y-1">
          <h3 className="text-[15px] font-medium text-gray-500">Method Preferred</h3>
          <div className="flex items-center justify-between">
            <p className="text-sm font-sans text-gray-500 border border-b border-gray-300 rounded-md">
              {startDate} - {endDate}
            </p>
            <button 
              className="text-sm text-[#444CE7] hover:text-[#3538CD] font-medium flex items-center"
            >
              View detail report
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {methods.map((method) => (
            <div key={method.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div 
                    className={`w-[3px] h-4 rounded-full ${
                      method.name === 'Pick-Up' ? 'bg-[#444CE7]' : 'bg-[#F97066]'
                    }`} 
                  />
                  <span className="text-gray-600">{method.name}</span>
                </div>
                <span className="text-gray-900 tabular-nums">{method.count}</span>
              </div>
              <div className="h-2.5 w-full bg-gray-50 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    method.name === 'Pick-Up' ? 'bg-[#444CE7]' : 'bg-[#F97066]'
                  }`}
                  style={{ width: `${(method.count / total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

