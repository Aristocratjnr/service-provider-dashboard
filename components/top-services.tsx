import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface TopService {
  name: string
  orders: number
  status: string
}

interface TopServicesProps {
  data: TopService[]
}

export function TopServices({ data }: TopServicesProps) {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-base font-medium">Top Services</h3>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50%]">Top Services</TableHead>
              <TableHead className="text-right">Orders</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((service) => (
              <TableRow key={service.name}>
                <TableCell className="font-medium">{service.name}</TableCell>
                <TableCell className="text-right">{service.orders}</TableCell>
                <TableCell className="text-right">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    {service.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

