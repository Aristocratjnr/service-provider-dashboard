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
      <div className="flex flex-col gap-1">
      <sub className="text-3xl font-semi-bold text-gray-500">{value}</sub>
        <div className="text-sm text-gray-500 transform translate-x-12">{title}
        </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[100px] mt-4 bg-[#F8FAFC]">{chart}</div>
      </CardContent>
    </Card>
  )
}

