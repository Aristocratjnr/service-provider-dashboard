import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface MetricsCardProps {
  title: string
  value: string | number
  chart: React.ReactNode
}

export function MetricsCard({ title, value, chart }: MetricsCardProps) {
  return (
    <Card className="overflow-hidden bg-white shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="text-sm font-medium text-gray-500">{title}</div>
        <div className="text-2xl font-semibold">{value}</div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[80px] bg-[#F8FAFC]">{chart}</div>
      </CardContent>
    </Card>
  )
}

