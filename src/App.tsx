import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"
import ProductPagination from "./components/ProductPagination"
import HeroSection from "./components/HeroSection"

function App() {

  return (
    <div className="flex flex-col min-h-screen">
    <Navbar/>
    <main className="flex-grow">
        <HeroSection/>
        <ProductCard />
        <ProductPagination/>
    </main>
     <Footer/>
    </div>
  )
}

export default App
