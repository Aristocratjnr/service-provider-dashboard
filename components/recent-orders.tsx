import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const recentOrders = [
  {
    id: "1",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    status: "success",
  },
  {
    id: "2",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    status: "pending",
  },
  {
    id: "3",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
    status: "success",
  },
  {
    id: "4",
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    status: "processing",
  },
  {
    id: "5",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
    status: "success",
  },
];

export function RecentOrders() {
  return (
    <div className="space-y-8">
      {recentOrders.map((order) => (
        <div key={order.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/avatars/${order.id}.png`} alt="Avatar" />
            <AvatarFallback>{order.name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{order.name}</p>
            <p className="text-sm text-muted-foreground">{order.email}</p>
          </div>
          <div className="ml-auto font-medium">{order.amount}</div>
        </div>
      ))}
    </div>
  );
}
