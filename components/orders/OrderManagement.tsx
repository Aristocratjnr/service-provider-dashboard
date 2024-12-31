"use client";

import React, { useState } from "react";
import { OrderTable } from "@/components/orders/OrderTable";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Order } from "@/types/order";

interface OrderManagementProps {
  orders: Order[];
}

const OrderManagement: React.FC<OrderManagementProps> = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <div className="flex h-screen gap-6 p-4">
      <div className="w-2/3">
        <OrderTable
          orders={orders}
          onSelectOrder={setSelectedOrder}
          selectedOrderId={selectedOrder?.id}
        />
      </div>
      <div className="w-1/3">
        <Card>
          <CardHeader>
            <CardTitle>
              {selectedOrder
                ? `Order Details: ${selectedOrder.id}`
                : "No Order Selected"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedOrder ? (
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Received by</h3>
                  <p>{selectedOrder.details.receivedBy}</p>
                </div>
                <div>
                  <h3 className="font-medium">Service</h3>
                  <p>{selectedOrder.service}</p>
                </div>
                <div>
                  <h3 className="font-medium">Add-ons</h3>
                  <p>{selectedOrder.details.addOns}</p>
                </div>
                <div>
                  <h3 className="font-medium">Total Amount</h3>
                  <p>${selectedOrder.details.totalAmount}</p>
                </div>
                <div>
                  <h3 className="font-medium">Payment Method</h3>
                  <p>{selectedOrder.details.paymentMethod}</p>
                </div>
                <div>
                  <h3 className="font-medium">Courier Information</h3>
                  <p>Name: {selectedOrder.details.courier.name}</p>
                  <p>Number: {selectedOrder.details.courier.number}</p>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground">
                Select an order to view its details
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderManagement;
