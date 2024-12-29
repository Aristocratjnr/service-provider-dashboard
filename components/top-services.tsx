'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle } from 'lucide-react'

interface TopIssue {
  type: string
  count: number
  status: string
}

interface TopServicesProps {
  data: TopIssue[]
}

export function TopServices({ data }: TopServicesProps) {
  return (
    <Card className="shadow-sm bg-white">
      <CardHeader className="pb-3">
        <h3 className="text-lg font-bold text-gray-500">Top Issues</h3>
        <hr className ="border-bottom: 8px solid black; margin: 0; w-96"/>

      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-sm font-medium text-gray-500 pl-6 bg-gray-100 rounded-lg">Type of issues</TableHead>
              <TableHead className="text-sm font-medium text-gray-500  bg-gray-100 rounded-lg">Number of issues</TableHead>
              <TableHead className="text-sm font-medium text-gray-500 pr-6  bg-gray-100 rounded-lg">Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((issue) => (
              <TableRow key={issue.type} className="hover:bg-transparent">
                <TableCell className="text-sm text-gray-900 pl-6">{issue.type}</TableCell>
                <TableCell className="text-sm text-gray-900">{issue.count}</TableCell>
                <TableCell className="text-sm text-gray-900 pr-6">
                  <div className="flex items-center space-x-1.5 text-amber-600">
                    <AlertCircle className="h-4 w-4" />
                    <span>{issue.status}</span>
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

