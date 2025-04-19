import React from "react";

export default function PublishPage() {
  return (
    <div className="max-w-2xl mx-auto w-full px-4 py-10 flex flex-col gap-10">
      {/* GitHub Integration Section */}
      <div className="bg-[#181c22] border border-[#23272f] rounded-xl p-8 flex flex-col gap-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-white mb-2">Publish MCP Server</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <button className="bg-[#23272f] text-white px-4 py-2 rounded hover:bg-[#2c313a] transition w-full md:w-auto">Add GitHub</button>
          <input
            className="bg-[#181c22] border border-[#23272f] text-white px-4 py-2 rounded w-full md:w-72 focus:outline-none"
            placeholder="Search Repo (e.g. user/repo)"
          />
        </div>
        <p className="text-xs text-[#b0b6be] mt-2">Connect your GitHub to easily publish and manage your MCP servers. (GitHub Application Integration)</p>
      </div>
      {/* Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#181c22] border border-[#23272f] rounded-lg p-6 flex flex-col items-center text-center">
          <span className="text-lg font-bold text-white mb-2">Spotlight</span>
          <p className="text-sm text-[#b0b6be]">Spotlight your server for thousands to discover</p>
        </div>
        <div className="bg-[#181c22] border border-[#23272f] rounded-lg p-6 flex flex-col items-center text-center">
          <span className="text-lg font-bold text-white mb-2">Host</span>
          <p className="text-sm text-[#b0b6be]">Pull any MCP server to your machine in one command</p>
        </div>
        <div className="bg-[#181c22] border border-[#23272f] rounded-lg p-6 flex flex-col items-center text-center">
          <span className="text-lg font-bold text-white mb-2">Build</span>
          <p className="text-sm text-[#b0b6be]">Generate a ready to run release from source</p>
        </div>
      </div>
    </div>
  );
} 