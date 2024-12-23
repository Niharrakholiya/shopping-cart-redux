import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Button } from "./components/ui/button"


function App() {

  return (
    <>
    <Navbar/>
     <h1 className="text-3xl font-bold underline">Hello World</h1>
     <Button className="bg-cyan-400 text-cyan-700">Click me</Button>
     <Footer/>
    </>
  )
}

export default App
