import { getInTransitOrders } from "@/lib/orderAPI";
import OrderManagement from "@/components/orders/OrderManagement";

export default async function InTransitOrdersPage() {
  const orders = await getInTransitOrders();
  return <OrderManagement orders={orders} />;
}
