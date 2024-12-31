import { getInProcessOrders } from "@/lib/orderAPI";
import OrderManagement from "@/components/orders/OrderManagement";

export default async function InProcessOrdersPage() {
  const orders = await getInProcessOrders();
  return <OrderManagement orders={orders} />;
}
