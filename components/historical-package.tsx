import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChartComponent } from "./charts/bar-chart"

interface HistoricalPackagesProps {
  data: { name: string; value1: number; value2: number }[]
}

export function HistoricalPackages({ data }: HistoricalPackagesProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-base font-medium">Historical Packages</h3>
        <div className="flex items-center space-x-2">
          <Select defaultValue="aug-21-aug-27">
            <SelectTrigger className="w-[180px] text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="aug-21-aug-27">Aug 21 - Aug 27, 2023</SelectItem>
              <SelectItem value="aug-14-aug-20">Aug 14 - Aug 20, 2023</SelectItem>
              <SelectItem value="aug-07-aug-13">Aug 07 - Aug 13, 2023</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="daily">
            <SelectTrigger className="w-[100px] text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <BarChartComponent data={data} />
        </div>
      </CardContent>
    </Card>
  )
}

