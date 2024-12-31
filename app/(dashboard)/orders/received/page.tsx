import { getReceivedOrders } from "@/lib/orderAPI";
import OrderManagement from "@/components/orders/OrderManagement";

export default async function ReceivedOrdersPage() {
  const orders = await getReceivedOrders();
  return <OrderManagement orders={orders} />;
}
