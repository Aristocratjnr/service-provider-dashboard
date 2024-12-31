import { Order } from "@/types/order";

// This is a mock implementation. Replace with actual API calls in a real application.
const mockOrders: Order[] = [
  {
    id: "#3567TL",
    date: "Oct 23, 2024",
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
  // Add more mock orders here
];

export async function getAllOrders(): Promise<Order[]> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockOrders;
}

export async function getPendingOrders(): Promise<Order[]> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockOrders.filter((order) => order.status === "Pending");
}

export async function getReceivedOrders(): Promise<Order[]> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockOrders.filter((order) => order.status === "Received");
}

export async function getInProcessOrders(): Promise<Order[]> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockOrders.filter((order) => order.status === "Received");
}

export async function getInTransitOrders(): Promise<Order[]> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockOrders.filter((order) => order.status === "Received");
}
export async function getDeliveredOrders(): Promise<Order[]> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockOrders.filter((order) => order.status === "Received");
}
