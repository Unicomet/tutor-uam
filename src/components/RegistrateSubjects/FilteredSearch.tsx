import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FilteredSearchProps {
  items: string[];
  placeholder: string;
}

export default function FilteredSearch({
  items,
  placeholder,
}: FilteredSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    const filtered = items.filter(
      (item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !selectedItems.includes(item)
    );
    setFilteredItems(filtered);
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleItemSelect = (item: string) => {
    setSelectedItems([...selectedItems, item]);
    setSearchTerm("");
  };

  const handleItemRemove = (item: string) => {
    setSelectedItems(selectedItems.filter((i) => i !== item));
  };

  return (
    <div className="w-full mx-auto mb-4">
      <div className="relative">
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full"
        />
        {searchTerm && filteredItems.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto">
            {filteredItems.map((item) => (
              <li
                key={item}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleItemSelect(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {selectedItems.map((item) => (
          <Button
            key={item}
            className="flex items-center gap-1 text-sm "
            onClick={() => handleItemRemove(item)}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
}
