import { getAllOrders } from "@/lib/orderAPI";
import OrderManagement from "@/components/orders/OrderManagement";

export default async function AllOrdersPage() {
  const orders = await getAllOrders();
  return <OrderManagement orders={orders} />;
}
