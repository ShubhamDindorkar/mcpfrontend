import React from "react";
import { TypewriterEffect } from "../../components/ui/typewriter-effect";
import { GlowingEffect } from "../../components/ui/glowing-effect";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start pt-24 gap-4 sm:gap-8 overflow-hidden px-4 sm:px-0">
      <div className="relative z-20 w-full max-w-3xl mx-auto flex flex-col items-center gap-4 sm:gap-8">
        <TypewriterEffect words={[{ text: "Discover\u00A0&\u00A0Publish\u00A0MCP\u00A0Servers" }]} className="text-xl xs:text-2xl sm:text-3xl md:text-5xl" />
        <p className="text-base xs:text-lg sm:text-xl text-[#b0b6be] max-w-xs xs:max-w-sm sm:max-w-2xl mx-auto text-center">
          Explore a growing registry of Model Context Protocol servers. Find, host, or publish your own with mcpnexus.
        </p>
        <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md mt-4 flex">
          <GlowingEffect className="w-full h-full absolute inset-0" disabled={false} />
          <input
            type="text"
            className="w-full px-4 py-2 sm:px-5 sm:py-3 bg-[#181c22] border border-[#23272f] text-white placeholder-[#b0b6be] focus:outline-none focus:ring-2 focus:ring-[#a259f7] transition relative z-10"
            placeholder="Search MCP servers..."
          />
          <button
            type="submit"
            className="ml-2 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-10"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Enter
            </span>
          </button>
        </div>
      </div>
    </section>
  );
} 