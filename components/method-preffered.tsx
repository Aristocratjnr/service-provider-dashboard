'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h3 className="text-base font-medium leading-6 text-gray-900">Method Preferred</h3>
            <p className="text-sm text-gray-500">
              {startDate} - {endDate}
            </p>
          </div>
          <Button 
            variant="ghost" 
            className="h-8 text-sm text-blue-600 hover:text-blue-700 font-medium hover:bg-transparent px-0"
          >
            View detail report
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {methods.map((method) => (
            <div key={method.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <div 
                      className={`w-[3px] h-4 ${
                        method.name === 'Pick-Up' ? 'bg-blue-500' : 'bg-red-400'
                      }`} 
                    />
                  </div>
                  <span className="text-gray-600 font-medium">{method.name}</span>
                </div>
                <span className="text-gray-900 tabular-nums">{method.count}</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    method.name === 'Pick-Up' ? 'bg-blue-500' : 'bg-red-400'
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

