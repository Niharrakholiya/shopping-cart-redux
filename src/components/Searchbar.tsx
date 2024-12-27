import React, { useState } from 'react';
import { Input } from "./ui/input";

interface SearchbarProps {
  onSearch: (query: string) => void;
}

 const Searchbarr: React.FC<SearchbarProps>=({ onSearch })=> {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };


  return (
    <div className="flex items-center w-full max-w-sm space-x-2 rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-900 px-3.5 py-2">
      <SearchIcon className="h-4 w-4" />
      <Input
        type="search"
        placeholder="Search"
        className="w-full border-0 h-8 font-semibold"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}
export default Searchbarr;

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}