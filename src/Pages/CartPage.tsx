import MainCart from "@/components/MainCart";
import { useAppSelector } from "@/redux/hooks";
import { Toaster } from  "sonner";
function Cartpage(){
const cart = useAppSelector((state) => state.cart.items);
const totalAmount = useAppSelector((state) => state.cart.totalAmount);
return(
    <div className="dark:bg-gray-900 min-h-screen">
<h1 className="text-3xl p-8 font-bold bg-gradient-to-r from-indigo-950 to-purple-900 dark:from-purple-300 dark:to-indigo-400 bg-clip-text text-transparent ">Your Cart</h1>
<Toaster position="top-right" richColors />
<MainCart/>
{cart.length > 0 ? (
<h1 className="text-3xl p-8 font-bold bg-gradient-to-r from-indigo-950 to-purple-900 dark:from-purple-300 dark:to-indigo-400 bg-clip-text text-transparent ">Total Amount: ${totalAmount.toFixed(2)}</h1>
) : null}
</div>
)


}
export default Cartpage;