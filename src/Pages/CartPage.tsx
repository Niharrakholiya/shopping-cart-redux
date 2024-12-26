import MainCart from "@/components/MainCart";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
function Cartpage(){

return(
<div>
<h1 className="text-3xl p-8 font-bold bg-gradient-to-r from-indigo-950 to-purple-900 bg-clip-text text-transparent ">Your Cart</h1>
<div className="flex flex-col items-center justify-center">
    <h1 className="font-semibold text-xl bg-gradient-to-r from-indigo-950 to-purple-900 bg-clip-text text-transparent"> Your Cart is Empty</h1>
    <Button className="m-4 bg-gradient-to-r from-teal-400 to-teal-500 text-indigo-900 font-medium hover:opacity-90 transition-opacity">
        <Link to="/">Start Shopping</Link>
    </Button>
</div>
<MainCart/>
</div>
)

}
export default Cartpage;