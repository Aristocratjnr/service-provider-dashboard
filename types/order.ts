export interface Order {
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
