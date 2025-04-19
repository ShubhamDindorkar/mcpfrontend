"use client";
import Card from "./components/Card";
import { useState } from "react";

const categories = ["All", "AI", "Data", "Finance", "Games"];
const sortOptions = ["Newest", "Popular"];
const placeholderServers = [
  {
    name: "Stable Diffusion API",
    description: "High-quality image generation with advanced prompts.",
    publisher: "@ai-labs",
    language: "Python",
    views: 1200,
  },
  {
    name: "Stock Predictor",
    description: "Predict stock prices using ML models.",
    publisher: "@fintechpro",
    language: "TypeScript",
    views: 980,
  },
  {
    name: "Text Summarizer",
    description: "Summarize long articles instantly.",
    publisher: "@nlp-guru",
    language: "Go",
    views: 650,
  },
  // Add more placeholder servers as needed
];

export default function Home() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Newest");
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-10">
      {/* Search & Filter Section */}
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
      {/* MCP Server Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {placeholderServers.map((server, i) => (
          <Card key={i} {...server} />
        ))}
      </div>
    </div>
  );
}
