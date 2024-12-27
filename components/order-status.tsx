import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface OrderStatus {
  status: string
  count: number
  percentage: number
  color: string
}

interface OrdersStatusProps {
  data: OrderStatus[]
  total: number
}

export function OrdersStatus({ data, total }: OrdersStatusProps) {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <h3 className="text-base font-medium">
            Total Orders <span className="text-gray-500">{total}</span>
          </h3>
        </div>
        <Select defaultValue="this-month">
          <SelectTrigger className="h-8 w-[120px] text-xs">
            <SelectValue placeholder="This month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-month">This month</SelectItem>
            <SelectItem value="last-month">Last month</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <div className="space-y-4">
            {data.map((status) => (
              <div key={status.status} className="flex items-center gap-3">
                <div
                  className="h-2.5 w-2.5 rounded-sm"
                  style={{ backgroundColor: status.color }}
                />
                <div className="min-w-[140px]">
                  <p className="text-sm font-medium text-gray-600">
                    {status.status} ({status.percentage}%)
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">{status.count}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative flex h-[160px] w-[160px] items-center justify-center">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
              {data.map((status, index) => {
                const offset = data
                  .slice(0, index)
                  .reduce((acc, curr) => acc + curr.percentage, 0)
                return (
                  <circle
                    key={status.status}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={status.color}
                    strokeWidth="20"
                    strokeDasharray={`${status.percentage} 100`}
                    strokeDashoffset={-offset}
                  />
                )
              })}
            </svg>
            <div className="absolute text-center">
              <div className="text-xl font-semibold">100%</div>
              <div className="text-sm text-gray-500">Data</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

