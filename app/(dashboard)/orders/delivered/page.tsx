import { getDeliveredOrders } from "@/lib/orderAPI";
import OrderManagement from "@/components/orders/OrderManagement";

export default async function DeliveredOrdersPage() {
  const orders = await getDeliveredOrders();
  return <OrderManagement orders={orders} />;
}
