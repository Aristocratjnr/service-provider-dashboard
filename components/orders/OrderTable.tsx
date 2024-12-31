"use client";

import React, { useState } from "react";
import { Table } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Order {
  id: string;
  date: string;
  customer: string;
  service: string;
  status: string;
  details: {
    receivedBy: string;
    addOns: string;
    totalAmount: number;
    paymentMethod: string;
    courier: {
      name: string;
      number: string;
    };
  };
}

const OrderManagement = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const orders = [
    {
      id: "#3567TL",
      date: "Oct 23,2024",
      customer: "Allison Mango",
      service: "Laundry",
      status: "Delivered",
      details: {
        receivedBy: "Allison Mango",
        addOns: "Stain Treatment",
        totalAmount: 65,
        paymentMethod: "Cash",
        courier: {
          name: "John Doe",
          number: "+233 20 728 5701",
        },
      },
    },
    // Add more orders as needed
  ];

  return (
    <div className="flex h-screen gap-6 p-4">
      {/* Left side - Table */}
      <div className="w-2/3">
        <Table>
          <thead>
            <tr className="bg-gray-50">
              <th className="p-3">Order IDs</th>
              <th className="p-3">Date</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Services</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                onClick={() => setSelectedOrder(order)}
                className={`cursor-pointer hover:bg-gray-50 ${
                  selectedOrder?.id === order.id ? "bg-blue-50" : ""
                }`}
              >
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.service}</td>
                <td className="p-3">
                  <span
                    className={`rounded-full px-2 py-1 text-sm ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "In Transit"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Right side - Details */}
      <div className="w-1/3">
        <Card>
          <CardHeader>
            <CardTitle>
              {selectedOrder
                ? `Order Details: ${selectedOrder.id}`
                : "No Order Selected"}
            </CardTitle>
          </CardHeader>
          {selectedOrder ? (
            <CardContent>
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
            </CardContent>
          ) : (
            <CardContent>
              <p className="text-gray-500">
                Select an order to view its details
              </p>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default OrderManagement;
