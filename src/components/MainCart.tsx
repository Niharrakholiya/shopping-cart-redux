import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useAppSelector } from "@/redux/hooks";
function MainCart(){
const cart = useAppSelector((state) => state.cart.items);
console.log(cart);
if (!cart) {
    return <div>Your cart is empty</div>;
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
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.price * item.quantity}</TableCell>
                    <TableCell>
                        {/* Add any actions you want here, like remove or update quantity */}
                    </TableCell>
                </TableRow>
            ))}
            {/* </TableCell> */}
            {/* <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
      
    )
}
export default MainCart;