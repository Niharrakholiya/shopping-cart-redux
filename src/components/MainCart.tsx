import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrementItemQuantity, incrementItemQuantity, removeItem } from "@/redux/slices/cartslice";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { Input } from "./ui/input";


function MainCart(){
const cart = useAppSelector((state) => state.cart.items);
const dispatch = useAppDispatch();
console.log(cart);
console.log()
if (!cart.length) {
    return(
<div className="flex flex-col items-center justify-center">
    <h1 className="font-semibold text-xl bg-gradient-to-r from-indigo-950 to-purple-900 bg-clip-text text-transparent"> Your Cart is Empty</h1>
    <Button className="m-4 bg-gradient-to-r from-teal-400 to-teal-500 text-indigo-900 font-medium hover:opacity-90 transition-opacity">
        <Link to="/">Start Shopping</Link>
    </Button>
</div>
    );
}
    return(
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* <TableRow> */}
            {cart.map((item) => (
                <TableRow key={item.id}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>
                    <Button className="border-1 rounded-md bg-white m-2 hover:bg-slate-100" onClick={()=>dispatch(incrementItemQuantity(item.id))}>
                            <Plus className="h-4 w-4 text-black"></Plus>
                    </Button>
                        <Button className="border-1 rounded-md bg-white text-black hover:bg-slate-100 m-2 w-12 text-center" >{item.quantity}</Button>
                        <Button className="border-1 rounded-md text-black bg-white hover:bg-slate-100" onClick={()=>dispatch(decrementItemQuantity(item.id))}>
                            <Minus className="h-4 w-4"></Minus>
                        </Button>
                        </TableCell>
                    <TableCell>
                        {(item.price * item.quantity).toFixed(2)}
                    </TableCell>
                    <TableCell>
                        <button className="bg-red-500 p-2 border-0 rounded-md text-white " onClick={()=>dispatch(removeItem(item.id))}>
                            <Trash2 className="h-4 w-4"></Trash2>
                        </button>
                    </TableCell>
                </TableRow>
            ))}
           
        </TableBody>
      </Table>
      
    )
}
export default MainCart;