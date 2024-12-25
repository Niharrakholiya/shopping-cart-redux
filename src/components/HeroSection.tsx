import { useState } from "react";
import Searchbar from "./ui/searchbar";
import { useAppSelector } from "@/redux/hooks";
import ProductCard from "./ProductCard";

function HeroSection() {
    const [activeTab, setActiveTab] = useState("All");
  
    const tabs = ["All", "Electronic", "Jewelery", "Mens Clothing", "Womens Clothing"];
    const products = useAppSelector((state) => state.products.products);
  
    // Filter products based on the active tab
    const filteredProducts =
      activeTab === "All"
        ? products
        : products.filter((product) => {
            if (activeTab === "Electronic") return product.category === "electronics";
            if (activeTab === "Jewelery") return product.category === "jewelery";
            if (activeTab === "Mens Clothing") return product.category === "men's clothing";
            if (activeTab === "Womens Clothing") return product.category === "women's clothing";
            return false;
          });
  
    return (
      <div className="p-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-950 to-purple-900 bg-clip-text text-transparent">
            Explore Our Collection
          </h1>
          <Searchbar />
        </div>
  
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-xl transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 shadow-sm"
                  : "bg-white text-black hover:bg-slate-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
  
        {/* Content based on active tab */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <ProductCard products={filteredProducts} />
        </div>
      </div>
    );
  }  
export default HeroSection;
