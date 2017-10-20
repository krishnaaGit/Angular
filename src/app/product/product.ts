type conditionType = "new" | "used" | "discontinued";

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  condition: conditionType;
}


export const PRODUCTS: Product[] = [
  { id: 1, name: 'Mouse', description: "new mouse", price: 100, condition: "new" },
  { id: 2, name: 'Mouse', description: "old mouse", price: 1, condition: "used" },
  { id: 3, name: 'Keyboard', description: "new keyboard", price: 100, condition: "new" },
  { id: 4, name: 'Bottle', description: "stinky bottle ", price: 1, condition: "discontinued" },
  { id: 5, name: 'Cap', description: "new cap", price: 40, condition: "new" }
];