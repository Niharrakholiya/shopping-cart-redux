import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage"; // Import the CartPage component
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Routes, Route } from "react-router-dom"; // Import Router-related components

function App() {
  return (
    <Provider store={store}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} /> {/* Add the CartPage route */}
            </Routes>
          </div>
          <Footer />
        </div>
    </Provider>
  );
}

export default App;
