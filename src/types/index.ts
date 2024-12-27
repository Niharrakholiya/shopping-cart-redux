export interface Product {
    id: string;  // Changed to string to match API
    title: string;
    price: number;
    category: string;
  }
  
  export interface CartItem extends Omit<Product, 'category'> {
    quantity: number;
  }