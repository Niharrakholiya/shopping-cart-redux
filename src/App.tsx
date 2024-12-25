import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import HomePage from "./Pages/HomePage"
import ProductPagination from "./components/ProductPagination"
import { Provider } from "react-redux";
import {store} from  "./redux/store";
function App() {
return(
  <Provider store={store}>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <HomePage />
                <ProductPagination />
                <Footer />
            </div>
 </Provider>
);
}

export default App
