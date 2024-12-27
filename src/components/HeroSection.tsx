import { useState } from "react";
import Searchbar from "./Searchbar";
import { useAppSelector } from "@/redux/hooks";
import ProductCard from "./ProductCard";

function HeroSection() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const tabs = ["All", "Electronic", "Jewelery", "Mens Clothing", "Womens Clothing"];
  const products = useAppSelector((state) => state.products.products);
  
  // Combined filtering function for both search and tabs
  const getFilteredProducts = () => {
    let filtered = products;
    
    // Apply search filter
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(lowerCaseQuery) ||
        product.category.toLowerCase().includes(lowerCaseQuery)
      );
    }
    
    // Apply tab filter
    if (activeTab !== "All") {
      filtered = filtered.filter((product) => {
        if (activeTab === "Electronic") return product.category === "electronics";
        if (activeTab === "Jewelery") return product.category === "jewelery";
        if (activeTab === "Mens Clothing") return product.category === "men's clothing";
        if (activeTab === "Womens Clothing") return product.category === "women's clothing";
        return false;
      });
    }
    
    return filtered;
  };

  const handleSearch = (query:string) => {
    setSearchQuery(query);
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="p-4 dark:bg-gray-900">
      <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-950 to-purple-900 dark:from-purple-300 dark:to-indigo-400 bg-clip-text text-transparent">
  Explore Our Collection
</h1>          
        <Searchbar onSearch={handleSearch} />
      </div>

      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-xl transition-all duration-300 ${
              activeTab === tab
                ? "bg-gradient-to-r from-violet-100 to-purple-100 dark:from-purple-900 dark:to-purple-800 text-violet-700 dark:text-purple-200 shadow-sm"
                : "bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-slate-100 dark:hover:bg-gray-700"
            }`}

          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <ProductCard products={filteredProducts} />
      </div>
    </div>
  );
}

export default HeroSection;