import { Card } from "@/components/ui/card"
import { colors } from "@/lib/utils"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Dry cleaning', value: 400 },
  { name: 'Laundry', value: 300 },
  { name: 'Alterations', value: 200 },
  { name: 'Wash & Fold', value: 100 },
]

export function ServiceRevenue() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Service Revenue</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 0, right: 0, left: -16, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
            <Bar dataKey="value" fill={colors.primary} radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

