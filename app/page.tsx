"use client";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { useEffect, useState } from "react";

const CARDS_PER_PAGE = 9;

export default function Home() {
  // State for MCP data
  const [mcpCards, setMcpCards] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  // Fetch MCP cards from API, with search and pagination
  useEffect(() => {
    const url = `/api/mcps?limit=${CARDS_PER_PAGE}&page=${page}` + (search ? `&search=${encodeURIComponent(search)}` : "");
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMcpCards(
          data.results.map((item: any) => ({
            name: item.package,
            description: item.readme || "No description available.",
            publisher: "unknown", // Placeholder
            language: "unknown", // Placeholder
            views: Math.floor(Math.random() * 1000) + 100, // Random views for demo
          }))
        );
        setTotal(data.total);
      });
  }, [search, page]);

  // Pagination logic
  const totalPages = Math.ceil(total / CARDS_PER_PAGE);

  // Reset to first page on new search
  useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <main className="w-full">
      <Hero heroClassName="pt-16 pb-0 mb-10" search={search} setSearch={setSearch} />
      <div className="flex flex-col w-full max-w-7xl mx-auto px-4 pt-0 py-0">
        {/* MCP Packages Grid Section */}
        <div className="w-full py-8">
          <h2 className="text-2xl font-bold text-white mb-6">MCP Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mcpCards.map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                className="px-4 py-2 rounded bg-[#23272f] text-white disabled:opacity-50"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                Previous
              </button>
              <span className="text-[#b0b6be]">Page {page} of {totalPages}</span>
              <button
                className="px-4 py-2 rounded bg-[#23272f] text-white disabled:opacity-50"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
