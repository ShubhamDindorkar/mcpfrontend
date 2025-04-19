import React from "react";

type FiltersProps = {
  categories: string[];
  category: string;
  setCategory: (cat: string) => void;
  search: string;
  setSearch: (s: string) => void;
  sort: string;
  setSort: (s: string) => void;
  sortOptions: string[];
};

export default function Filters({
  categories,
  category,
  setCategory,
  search,
  setSearch,
  sort,
  setSort,
  sortOptions,
}: FiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between mb-10">
      <div className="flex gap-3 w-full md:w-auto">
        <select
          className="bg-[#181c22] border border-[#23272f] text-white px-4 py-2 rounded focus:outline-none"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <input
          className="bg-[#181c22] border border-[#23272f] text-white px-4 py-2 rounded w-64 focus:outline-none"
          placeholder="Search for MCP servers, e.g. 'image generation'..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <select
        className="bg-[#181c22] border border-[#23272f] text-white px-4 py-2 rounded focus:outline-none w-full md:w-auto"
        value={sort}
        onChange={e => setSort(e.target.value)}
      >
        {sortOptions.map(opt => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
} 