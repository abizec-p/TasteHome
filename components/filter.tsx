"use client";
import { useState } from "react";
import data from "@/app/data";
import Link from "next/link";

export default function Filters() {
  const [checked, setChecked] = useState<string[]>([]);
  const [category, setCategory] = useState("");
  const filterCat = [
    "Vegetarian",
    "Vegan",
    "Halal",
    "Non-vegetarian",
    "Seafood",
    "Spicy",
    "Less spicy",
    "Homemade",
    "Nearby",
    "Certified",
  ];

  function clearFilter() {
    setChecked([]);
  }
  return (
    <div className="w-60 h-150 shadow-md rounded p-5 bg-white">
      <div className="flex justify-between ">
        <h1 className="underline pb-2">Filters</h1>
        <h1 className="text-red-500">
          <button onClick={clearFilter}>Clear</button>
        </h1>
      </div>
      <div>
        {filterCat.map((filter) => (
          <p key={filter} className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4"
              checked={checked.includes(filter)}
              onChange={(e) => {
                if (e.target.checked) {
                  setChecked([...checked, filter]);
                } else {
                  setChecked(checked.filter((item) => item !== filter));
                }
              }}
            />{" "}
            {filter}
          </p>
        ))}
      </div>
      <div className="pt-2 underline">Category</div>
      <div>
        <select
          className="bg-gray-100 px-8 py-2 rounded mt-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select</option>
          <option value="chinese">Chinese</option>
          <option value="nepali">Nepali</option>
          <option value="indian">Indian</option>
          <option value="mexican">Mexican</option>
          <option value="italian">Italian</option>
          <option value="jamaican">Jamaican</option>
        </select>
      </div>

      <div className="flex gap-3 mt-5 mb-2" >
        <button className="px-5 py-1 rounded bg-green-700 text-white">Apply</button>
        <button className="px-5 py-1 rounded bg-gray-300">Reset</button>
      </div>
      <div className="pt-2 ">
        <h1 className="underline ">Recently visited</h1>
        {data.slice(0, 5).map((data, index) => (
          <div key={index}>
            {" "}
            <Link
              href="/"
              className="text-blue-300 hover:text-blue-500"
              
            >
              {data.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
