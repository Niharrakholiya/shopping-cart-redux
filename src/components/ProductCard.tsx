import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartslice";
import { useAppSelector } from "../redux/hooks";
import { toast } from "sonner";
import { Product,CartItem } from "@/types";

interface ProductCardProps {
  products: Product[] | undefined; // Handle undefined products
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  const dispatch = useDispatch();
  const cart = useAppSelector((state) => state.cart.items);

  const handleAddToCart = (product:Product) => {
    const cartItem: Omit<CartItem, 'quantity'> = {
      id: product.id,
      title: product.title,
      price: product.price
    };
    dispatch(addItem(cartItem));
    toast.success('Added to Cart', {
        description: `${product.title} has been added to your cart`,
        duration: 2000,
        classNames: {
            toast: 'dark:bg-gray-800 dark:text-white',
            title: 'dark:text-gray-100',
            description: 'dark:text-gray-300',
        },
    });
};

  if (!products || products.length === 0) {
    return <p className="text-center col-span-full text-gray-500">No products available in this category.</p>;
  }
  else{

    console.log(cart);
  return (
    <>
      {products.map((product) => (
        <Card key={product.id} className="hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl rounded-xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">{product.title}</CardTitle>
            <CardDescription className="text-xl text-black font-bold">${product.price}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-teal-400 to-teal-500 text-indigo-900 font-medium hover:opacity-90 transition-opacity"
            onClick={() => handleAddToCart(product)}
            >
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
