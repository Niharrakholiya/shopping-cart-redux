function Navbar(){
    return(
        <nav className="bg-gray-800 text-white p-4 flex">
            <h1 className="text-xl font-bold">Bansari Fashion</h1>
            <ul className="flex gap-4 ml-auto">
                <li>Theme</li>
                <li>Cart</li>
            </ul>
        </nav>  
    )
}
export default Navbar;
