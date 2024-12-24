import { useState } from "react";
import Searchbar from "./ui/searchbar";

function HeroSection() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Electronic", "Jewelry", "Mens Clothing", "Womens Clothing"];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Explore Our Collection</h1>
        <Searchbar />
      </div>

      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg border ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content based on active tab */}
      <div className="mt-4">
        {activeTab === "All" && <p>Displaying all products...</p>}
        {activeTab === "Electronic" && <p>Displaying electronic products...</p>}
        {activeTab === "Jewelry" && <p>Displaying jewelry products...</p>}
        {activeTab === "Mens Clothing" && <p>Displaying men's clothing...</p>}
        {activeTab === "Womens Clothing" && <p>Displaying women's clothing...</p>}
      </div>
    </div>
  );
}

export default HeroSection;
