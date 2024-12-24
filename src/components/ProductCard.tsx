import { Card,CardDescription,CardFooter,CardHeader,CardTitle } from "./ui/card";
import { Button } from "./ui/button";
function ProductCard(){
    return(
        <div className="grid grid-cols-4 gap-4 ">
        <Card>
            <CardHeader>
                <CardTitle>Product Name</CardTitle>
                <CardDescription>Product Description</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full bg-cyan-400 text-cyan-700">Add to cart</Button>
            </CardFooter>
        </Card>
         <Card>
         <CardHeader>
             <CardTitle>Product Name</CardTitle>
             <CardDescription>Product Description</CardDescription>
         </CardHeader>
         <CardFooter>
             <Button className="w-full bg-cyan-400 text-cyan-700">Add to cart</Button>
         </CardFooter>
        </Card>
        <Card>
         <CardHeader>
             <CardTitle>Product Name</CardTitle>
             <CardDescription>Product Description</CardDescription>
         </CardHeader>
         <CardFooter>
             <Button className="w-full bg-cyan-400 text-cyan-700">Add to cart</Button>
         </CardFooter>
        </Card>
        <Card>
         <CardHeader>
             <CardTitle>Product Name</CardTitle>
             <CardDescription>Product Description</CardDescription>
         </CardHeader>
         <CardFooter>
             <Button className="w-full bg-cyan-400 text-cyan-700">Add to cart</Button>
         </CardFooter>
        </Card>
        <Card>
         <CardHeader>
             <CardTitle>Product Name</CardTitle>
             <CardDescription>Product Description</CardDescription>
         </CardHeader>
         <CardFooter>
             <Button className="w-full bg-cyan-400 text-cyan-700">Add to cart</Button>
         </CardFooter>
        </Card>
        </div>
    )
}
export default ProductCard;
