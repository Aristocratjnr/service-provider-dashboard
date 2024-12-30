'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, AlertTriangle, TrendingUp, ArrowUpRight } from 'lucide-react'

interface TopIssue {
  type: string
  count: number
  status: string
  trend: {
    value: number
    direction: 'up' | 'down'
  }
}

interface TopServicesProps {
  data: TopIssue[]
}

export function TopServices({ data }: TopServicesProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300 bg-white overflow-hidden">
      <CardHeader className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <h3 className="text-xl font-semibold text-gray-900">Top Issues</h3>
            </div>
            <p className="text-sm text-gray-500">Critical issues requiring attention</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full">
              <TrendingUp className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-600">+12% this week</span>
            </div>
            
            <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg 
              bg-amber-500/10 hover:bg-amber-500/15 text-amber-600 
              transition-all duration-200 font-medium text-sm">
              View all
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-none">
              <TableHead className="text-sm font-semibold text-gray-600 pl-6 bg-gray-50/80">
                Type of Issues
              </TableHead>
              <TableHead className="text-sm font-semibold text-gray-600 bg-gray-50/80">
                Number of Issues
              </TableHead>
              <TableHead className="text-sm font-semibold text-gray-600 pr-6 bg-gray-50/80">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          
          <TableBody>
            {data.map((issue, index) => (
              <TableRow 
                key={issue.type} 
                className="hover:bg-amber-50/40 transition-colors duration-200"
              >
                <TableCell className="pl-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-1 rounded-full bg-amber-500/60" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{issue.type}</p>
                      <p className="text-xs text-gray-500">Issue #{index + 1}</p>
                    </div>
                  </div>
                </TableCell>
                
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900">
                      {issue.count.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500">
                      {issue.trend.direction === 'up' ? '↑' : '↓'} {issue.trend.value}% vs last week
                    </span>
                  </div>
                </TableCell>
                
                <TableCell className="pr-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full max-w-fit"
                    style={{
                      backgroundColor: issue.status === 'Critical' ? 'rgb(254 242 242)' : 'rgb(255 247 237)',
                      color: issue.status === 'Critical' ? 'rgb(220 38 38)' : 'rgb(234 88 12)'
                    }}>
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">{issue.status}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

