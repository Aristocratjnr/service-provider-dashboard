import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Order } from "@/types/order";

interface OrderTableProps {
  orders: Order[];
  onSelectOrder: (order: Order) => void;
  selectedOrderId?: string;
}

export const OrderTable: React.FC<OrderTableProps> = ({
  orders,
  onSelectOrder,
  selectedOrderId,
}) => {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Order IDs</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-center">Customer</TableHead>
              <TableHead className="text-center">Services</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                onClick={() => onSelectOrder(order)}
                className={`cursor-pointer hover:bg-muted/50 ${
                  selectedOrderId === order.id ? "bg-muted" : ""
                }`}
              >
                <TableCell className="text-center">{order.id}</TableCell>
                <TableCell className="text-center">{order.date}</TableCell>
                <TableCell className="text-center">{order.customer}</TableCell>
                <TableCell className="text-center">{order.service}</TableCell>
                <TableCell className="text-center">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "In Transit"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
