import { ShoppingCart, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { Moon } from "lucide-react"
import { useEffect, useState } from "react"

function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
    return (
      <nav className="bg-gradient-to-r from-indigo-950 to-purple-900 dark:from-gray-900 dark:to-gray-800 text-white p-4 flex items-center">
      <Link to="/" className="text-2xl font-bold">Bansari Fashion</Link>
      <div className="flex gap-6 ml-auto items-center">
        <Button 
          variant="ghost" 
          className="hover:text-teal-400"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
        <Link to="/cart" className="hover:text-teal-400">
          <ShoppingCart className="h-5 w-5" />
        </Link>
      </div>
    </nav>
    )
  }
export default Navbar;
