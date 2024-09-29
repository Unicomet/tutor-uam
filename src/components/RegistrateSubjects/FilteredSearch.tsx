import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FieldValues,
  Path,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

interface FilteredSearchProps {
  name: Path<FieldValues>;
  items: string[];
  placeholder: string;
  setValue?: UseFormSetValue<any>;
  errors?: any;
  setSubject?: Function;
  usesForm: boolean;
}

const FilteredSearch: React.FC<FilteredSearchProps> = ({
  name,
  items,
  placeholder,
  setValue,
  errors,
  setSubject,
  usesForm,
}) => {
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
    if (setSubject) {
      setSubject(item);
    }
    if (usesForm) {
      setValue(name, [...selectedItems, item]);
    }
  };

  const handleItemRemove = (item: string) => {
    setSelectedItems(selectedItems.filter((i) => i !== item));
    if (setSubject) {
      setSubject(item);
    }
    if (usesForm) {
      setValue(name, [...selectedItems, item]);
    }
  };

  return (
    <div className="w-full mx-auto mb-4">
      <div className="relative">
        <Input
          type="text"
          placeholder={placeholder}
          onChange={handleSearchChange}
          value={searchTerm}
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
      {errors && <p className="text-red-500">{errors?.message}</p>}
    </div>
  );
};

export default FilteredSearch;
