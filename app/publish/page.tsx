"use client";
import React, { useState } from "react";
import { IconBrandGithub, IconSearch, IconPlus, IconRocket, IconSparkles, IconServer, IconCode } from "@tabler/icons-react";

export default function PublishPage() {
  const [search, setSearch] = useState("");
  const [showIntegration, setShowIntegration] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <div className="w-full px-4 py-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Publish Your MCP Server
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Share your Model Context Protocol server with the world. Get more visibility, 
          users, and feedback for your AI models and services.
        </p>
      </div>

      {/* Steps */}
      <div className="flex justify-center mb-10">
        <div className="w-full max-w-3xl flex items-center">
          {[1, 2, 3].map((stepNumber) => (
            <React.Fragment key={stepNumber}>
              <div 
                className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 
                  ${step >= stepNumber 
                    ? 'border-purple-500 bg-purple-500/20 text-white' 
                    : 'border-gray-700 bg-gray-800 text-gray-400'} 
                  transition-all duration-300`}
              >
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div className="flex-1 h-0.5 mx-2">
                  <div 
                    className="h-full transition-all duration-500"
                    style={{ 
                      background: step > stepNumber 
                        ? 'linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153))' 
                        : 'rgb(55, 65, 81)',
                      width: step > stepNumber ? '100%' : '0%',
                      transition: 'width 0.5s ease-in-out'
                    }}
                  ></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* GitHub Integration Box */}
      <div className="mb-10 animate-slide-up">
        <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
          {/* Header with gradient line */}
          <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <IconRocket className="text-purple-400" size={24} /> 
              Connect GitHub Repository
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => {
                  setShowIntegration(true);
                  setTimeout(() => setStep(2), 500);
                }}
                className="col-span-1 flex items-center justify-center gap-2 py-3 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <IconBrandGithub size={20} />
                Connect GitHub
              </button>
              
              <div className="col-span-2 flex gap-2">
                <div className="relative flex-grow">
                  <input
                    className="w-full bg-gray-800 border border-gray-700 focus:border-purple-500 text-white px-4 py-3 pl-10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    placeholder="Search repositories (e.g., user/repo)"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                  <IconSearch className="absolute left-3 top-3.5 text-gray-500" size={18} />
                </div>
                <button
                  onClick={() => search && setStep(2)}
                  disabled={!search}
                  className={`py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center gap-2
                    ${search 
                      ? 'bg-purple-600 text-white hover:bg-purple-500 hover:scale-[1.02] cursor-pointer' 
                      : 'bg-gray-800 text-gray-400 cursor-not-allowed'}`}
                >
                  Search
                  <IconSearch size={18} />
                </button>
              </div>
            </div>
            
            {/* GitHub Application Integration Info Box */}
            {showIntegration && (
              <div className="mt-6 animate-slide-in"> 
                <div className="bg-gray-800/80 border border-purple-500/40 rounded-lg p-5 text-gray-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/20 p-2 rounded-lg">
                      <IconBrandGithub className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">GitHub Application Integration</h3>
                      <p className="text-sm">
                        Connect your GitHub to easily publish and manage your MCP servers. 
                        Authorize the MCP Nexus GitHub App to enable seamless integration.
                      </p>
                      <div className="mt-3">
                        <button 
                          onClick={() => setStep(2)}
                          className="text-sm py-1.5 px-3 bg-purple-600 hover:bg-purple-500 text-white rounded-md transition-colors"
                        >
                          Authorize GitHub App
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Configuration Options (visible in step 2 or 3) */}
      {step >= 2 && (
        <div className="mb-10 animate-slide-up">
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <IconServer className="text-purple-400" size={24} /> 
                Configure Your Server
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Server Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-700 focus:border-purple-500 text-white px-4 py-2.5 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    placeholder="My MCP Server"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Primary Language</label>
                  <select className="w-full bg-gray-800 border border-gray-700 focus:border-purple-500 text-white px-4 py-2.5 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 appearance-none">
                    <option>Python</option>
                    <option>TypeScript</option>
                    <option>JavaScript</option>
                    <option>Go</option>
                    <option>Rust</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                  <textarea 
                    className="w-full bg-gray-800 border border-gray-700 focus:border-purple-500 text-white px-4 py-2.5 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 min-h-[100px]"
                    placeholder="Describe your MCP server and its capabilities..."
                  ></textarea>
                </div>
                
                <div className="md:col-span-2 flex justify-end gap-3 mt-3">
                  <button 
                    onClick={() => setStep(1)}
                    className="py-2 px-4 border border-gray-700 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    Back
                  </button>
                  
                  <button 
                    onClick={() => setStep(3)}
                    className="py-2 px-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors flex items-center gap-2"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Final Publish (visible in step 3) */}
      {step === 3 && (
        <div className="mb-10 animate-slide-up">
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <IconSparkles className="text-purple-400" size={24} />
                Ready to Publish
              </h2>
              
              <div className="mb-6 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Repository</p>
                    <p className="text-sm text-white flex items-center gap-1.5">
                      <IconBrandGithub size={16} />
                      {search || "user/my-awesome-repo"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Server Type</p>
                    <p className="text-sm text-white">Python MCP Server</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Visibility</p>
                    <p className="text-sm text-white">Public</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 md:items-end justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-300 mb-4">
                    Your MCP server will be published to mcpnexus. Users will be able to discover, 
                    use, and provide feedback on your implementation.
                  </p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <input type="checkbox" id="terms" className="rounded border-gray-700 bg-gray-800 text-purple-500 focus:ring-purple-500/50" />
                    <label htmlFor="terms" className="text-sm text-gray-300">
                      I agree to the <a href="#" className="text-purple-400 hover:underline">Terms of Service</a>
                    </label>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    onClick={() => setStep(2)}
                    className="py-2 px-4 border border-gray-700 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    Back
                  </button>
                  
                  <button 
                    className="py-2.5 px-6 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
                  >
                    <IconPlus size={18} />
                    Publish Server
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
        <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-purple-500/10 group">
          <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          <div className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <IconSparkles className="text-purple-400" size={22} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Spotlight</h3>
            <p className="text-sm text-gray-300">Showcase your server to thousands of developers in our featured section</p>
          </div>
        </div>
        
        <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-purple-500/10 group">
          <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
          <div className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <IconServer className="text-purple-400" size={22} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Host</h3>
            <p className="text-sm text-gray-300">Pull any MCP server to your machine with a single command</p>
          </div>
        </div>
        
        <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-purple-500/10 group">
          <div className="h-1 w-full bg-gradient-to-r from-pink-500 to-indigo-500"></div>
          <div className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <IconCode className="text-purple-400" size={22} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Build</h3>
            <p className="text-sm text-gray-300">Generate a ready-to-run release from your source code</p>
          </div>
        </div>
      </div>
    </div>
  );
} 