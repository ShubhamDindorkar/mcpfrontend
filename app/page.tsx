"use client";
import { useState } from "react";
import { IconSearch, IconChevronDown } from "@tabler/icons-react";
import ServerCard from "../components/ServerCard";

// Sample data
const servers = [
  { 
    id: 1, 
    name: "Stable Diffusion API", 
    description: "High-quality image generation with advanced prompts.",
    publisher: "@ai-labs", 
    language: "Python", 
    views: 1200,
    category: "Featured",
    createdAt: "2023-10-15"
  },
  { 
    id: 2, 
    name: "Stock Predictor", 
    description: "Predict stock prices using ML models.", 
    publisher: "@fintechpro", 
    language: "TypeScript", 
    views: 980,
    category: "Featured",
    createdAt: "2023-11-20" 
  },
  { 
    id: 3, 
    name: "Text Summarizer", 
    description: "Summarize long articles instantly.", 
    publisher: "@nlp-guru", 
    language: "Go", 
    views: 650,
    category: "Featured",
    createdAt: "2023-09-05" 
  },
  { 
    id: 4, 
    name: "Smart Search", 
    description: "Semantic web search API.", 
    publisher: "@searchx", 
    language: "Python", 
    views: 1500,
    category: "Web Search",
    createdAt: "2023-12-12" 
  },
  { 
    id: 5, 
    name: "Crawler Pro", 
    description: "Advanced web crawling.", 
    publisher: "@crawlerdev", 
    language: "Rust", 
    views: 900,
    category: "Web Search",
    createdAt: "2024-01-10" 
  },
  { 
    id: 6, 
    name: "MetaScraper", 
    description: "Extract metadata from any site.", 
    publisher: "@scrapeit", 
    language: "Node.js", 
    views: 1200,
    category: "Web Search",
    createdAt: "2024-02-05" 
  },
  { 
    id: 7, 
    name: "AutoBrowser", 
    description: "Automate browser tasks easily.", 
    publisher: "@autobot", 
    language: "Python", 
    views: 1100,
    category: "Browser Automation",
    createdAt: "2024-03-15" 
  },
  { 
    id: 8, 
    name: "Form Filler", 
    description: "Fill forms automatically.", 
    publisher: "@formtools", 
    language: "JavaScript", 
    views: 800,
    category: "Browser Automation",
    createdAt: "2024-04-01" 
  },
  { 
    id: 9, 
    name: "ClickMaster", 
    description: "Automate clicks and navigation.", 
    publisher: "@clicks", 
    language: "Go", 
    views: 950,
    category: "Browser Automation",
    createdAt: "2024-04-20" 
  }
];

// Categories
const categories = ["All", "Featured", "Web Search", "Browser Automation"];

// Sort options
const sortOptions = ["Newest", "Popular"];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  
  // Filter servers based on search and category
  const filteredServers = servers.filter(server => {
    const matchesSearch = 
      searchQuery === "" || 
      server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      server.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      activeCategory === "All" || 
      server.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort servers
  const sortedServers = [...filteredServers].sort((a, b) => {
    if (sortBy === "Newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else {
      return b.views - a.views;
    }
  });

  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Discover & Publish MCP Servers
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Explore a growing registry of Model Context Protocol servers. Find, host, or publish your own with mcpnexus.
        </p>
      </section>
      
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Category Dropdown */}
        <div className="w-full md:w-1/4">
          <div className="relative">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="appearance-none w-full bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-lg py-2.5 px-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent cursor-pointer"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <IconChevronDown size={16} />
            </div>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="w-full md:w-3/4 relative">
          <input
            type="text"
            className="w-full bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-lg py-2.5 px-4 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Search MCP servers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IconSearch className="absolute left-4 top-3 text-gray-400" size={18} />
        </div>
      </div>

      {/* Sort Options */}
      <div className="flex justify-end mb-6">
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-lg py-2 px-4 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent cursor-pointer text-sm font-medium"
          >
            {sortOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <IconChevronDown size={14} />
          </div>
        </div>
      </div>

      {/* Server Grid */}
      {sortedServers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedServers.map((server, index) => (
            <ServerCard key={server.id} {...server} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 animate-fade-in">
          <p className="text-gray-400 text-lg">No servers found matching your criteria</p>
          <button 
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-500 transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </main>
  );
}
