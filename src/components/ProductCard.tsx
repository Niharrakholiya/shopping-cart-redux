import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

interface ProductCardProps {
  products: Product[] | undefined; // Handle undefined products
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return <p className="text-center col-span-full text-gray-500">No products available in this category.</p>;
  }
  else{

  return (
    <>
      {products.map((product) => (
        <Card key={product.id} className="hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl rounded-xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">{product.title}</CardTitle>
            <CardDescription className="text-xl text-black font-bold">${product.price}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-teal-400 to-teal-500 text-indigo-900 font-medium hover:opacity-90 transition-opacity">
              Add to cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
};

export default ProductCard;
