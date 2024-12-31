import { getPendingOrders } from "@/lib/orderAPI";
import OrderManagement from "@/components/orders/OrderManagement";

export default async function PendingOrdersPage() {
  const orders = await getPendingOrders();
  return <OrderManagement orders={orders}  />;
}
