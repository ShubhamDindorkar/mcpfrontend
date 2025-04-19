"use client";
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import ServerGrid from "./components/ServerGrid";
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

  // Filtering and sorting logic can be added here
  const filteredServers = placeholderServers.filter(server =>
    (category === "All" || server.description.includes(category) || server.name.includes(category)) &&
    (search === "" || server.name.toLowerCase().includes(search.toLowerCase()) || server.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-10">
      <Hero />
      <Filters
        categories={categories}
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        sortOptions={sortOptions}
      />
      <ServerGrid servers={filteredServers} />
    </div>
  );
}
