import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { useAppDispatch, useAppSelector } from "@/redux/hooks";
  import { decrementItemQuantity, incrementItemQuantity, removeItem,clearCart } from "@/redux/slices/cartslice";
  import { Trash2, Plus, Minus } from "lucide-react";
  import { Button } from "./ui/button";
  import { Link } from "react-router-dom";
  import { toast } from "sonner";
  import { CartItem } from '../types/index';
  function MainCart() {
   
    const cart = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch();
  
    const handleRemoveItem = (item:CartItem) => {
        dispatch(removeItem(item.id));
        toast.error('Removed from Cart', {
            description: `${item.title} has been removed from your cart`,
            duration: 2000,
        });
    };

    const handleClearCart = () => {
        dispatch(clearCart());
        toast.error('Cart Cleared', {
            description: 'All items have been removed from your cart',
            duration: 2000,
        });
    };

    if (!cart.length) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <h1 className="font-semibold text-xl bg-gradient-to-r from-indigo-950 to-purple-900 dark:from-purple-300 dark:to-indigo-400 bg-clip-text text-transparent">
            Your Cart is Empty
          </h1>
          <Button className="m-4 bg-gradient-to-r from-teal-400 to-teal-500 text-indigo-900 font-medium hover:opacity-90 transition-opacity">
            <Link to="/">Start Shopping</Link>
          </Button>
        </div>
      );
    }
  
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-end mb-4">
        <Button 
          variant="destructive"
          className="bg-red-500 hover:bg-red-600"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </Button>
      </div>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 dark:bg-gray-800">
              <TableHead className="w-1/3">Product</TableHead>
              <TableHead className="w-1/6 text-right">Price</TableHead>
              <TableHead className="w-1/4 text-center">Quantity</TableHead>
              <TableHead className="w-1/6 text-right">Total</TableHead>
              <TableHead className="w-1/12 text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart.map((item) => (
              <TableRow key={item.id} className="border-b">
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
                      onClick={() => dispatch(decrementItemQuantity(item.id))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
                      onClick={() => dispatch(incrementItemQuantity(item.id))}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="destructive"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleRemoveItem(item)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  
  export default MainCart;