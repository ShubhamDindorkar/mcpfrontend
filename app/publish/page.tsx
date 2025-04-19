"use client";
import React, { useState } from "react";
import { CardContainer, CardBody } from "../../components/ui/3d-card";

export default function PublishPage() {
  const [search, setSearch] = useState("");
  const [showIntegration, setShowIntegration] = useState(false);

  return (
    <div className="max-w-2xl mx-auto w-full px-4 py-16 flex flex-col gap-10">
      {/* GitHub Integration Box */}
      <div className="bg-[#181c22] border border-[#23272f] rounded-xl p-8 flex flex-col gap-6 shadow-sm relative overflow-hidden">
        <h2 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
          <span role="img" aria-label="rocket">🚀</span> Publish MCP Server
        </h2>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <button
            onClick={() => setShowIntegration(true)}
            className="px-4 py-2 bg-[#a259f7] text-white font-semibold rounded transition hover:bg-[#7a36c2] focus:outline-none focus:ring-2 focus:ring-[#a259f7]"
          >
            Add GitHub
          </button>
          <input
            className={`bg-[#181c22] border ${search ? 'border-[#a259f7] shadow-[0_0_8px_2px_#a259f7]' : 'border-[#23272f]'} text-white px-4 py-2 rounded transition-all duration-300 w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-[#a259f7]`}
            placeholder="Search Repo (e.g. user/repo)"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button
            onClick={() => setShowIntegration(true)}
            className="px-4 py-2 bg-[#a259f7] text-white font-semibold rounded transition hover:bg-[#7a36c2] focus:outline-none focus:ring-2 focus:ring-[#a259f7]"
          >
            Search Repo
          </button>
        </div>
        {/* GitHub Application Integration Info Box */}
        <div className={`transition-opacity duration-500 ${showIntegration ? 'opacity-100' : 'opacity-0 pointer-events-none'} mt-6`}> 
          <div className="bg-[#23272f] border border-[#a259f7] rounded p-4 text-[#b0b6be] shadow-lg animate-fadeIn">
            <span className="font-semibold text-white">GitHub Application Integration</span><br />
            Connect your GitHub to easily publish and manage your MCP servers. Authorize the MCP Nexus GitHub App to enable seamless integration.
          </div>
        </div>
      </div>
      {/* Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CardContainer className="w-full h-full">
          <CardBody className="w-full h-full bg-[#181c22] border border-[#23272f] rounded-lg p-6 flex flex-col items-center text-center transition-transform transition-shadow duration-300 hover:shadow-2xl hover:scale-105">
            <span className="text-lg font-bold text-white mb-2">Spotlight</span>
            <p className="text-sm text-[#b0b6be]">Spotlight your server for thousands to discover</p>
          </CardBody>
        </CardContainer>
        <CardContainer className="w-full h-full">
          <CardBody className="w-full h-full bg-[#181c22] border border-[#23272f] rounded-lg p-6 flex flex-col items-center text-center transition-transform transition-shadow duration-300 hover:shadow-2xl hover:scale-105">
            <span className="text-lg font-bold text-white mb-2">Host</span>
            <p className="text-sm text-[#b0b6be]">Pull any MCP server to your machine in one command</p>
          </CardBody>
        </CardContainer>
        <CardContainer className="w-full h-full">
          <CardBody className="w-full h-full bg-[#181c22] border border-[#23272f] rounded-lg p-6 flex flex-col items-center text-center transition-transform transition-shadow duration-300 hover:shadow-2xl hover:scale-105">
            <span className="text-lg font-bold text-white mb-2">Build</span>
            <p className="text-sm text-[#b0b6be]">Generate a ready to run release from source</p>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
} 