"use client";
import { useState, useEffect } from "react";
import { IconSearch, IconChevronDown } from "@tabler/icons-react";
import ServerCard from "../components/ServerCard";
import Pagination from "../components/Pagination";
import { useQuery } from "@tanstack/react-query";
// Removed unused import
// import { prisma } from "../lib/prisma";

// Define Package type based on Prisma schema
interface Package {
  package_name: string;
  install_cmd: string;
  readme: string;
  created_at: string;
}

// API response type
interface ApiResponse {
  packages: Package[];
  meta: {
    currentPage: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
  };
}

// Categories
const categories = ["All", "Featured", "Utility", "UI", "Testing", "Backend", "Data"];

// Sort options
const sortOptions = ["Newest", "Popular"];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 21; // 21 cards per page
  
  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory, sortBy]);
  
  // Fetch packages with TanStack Query
  const { data, isLoading, isError } = useQuery<ApiResponse>({
    queryKey: ['packages', currentPage, pageSize, searchQuery, activeCategory, sortBy],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        pageSize: pageSize.toString(),
        sort: sortBy.toLowerCase()
      });
      
      if (searchQuery) {
        params.append('search', searchQuery);
      }
      
      const res = await fetch(`/api/packages?${params}`);
      if (!res.ok) {
        throw new Error('Failed to fetch packages');
      }
      return res.json();
    }
  });
  
  // Function to determine package category based on name (for demo purposes)
  function getPackageCategory(packageName: string): string {
    if (packageName.includes('ui') || packageName.includes('react') || packageName.includes('vue')) {
      return 'UI';
    } else if (packageName.includes('test') || packageName.includes('jest') || packageName.includes('mocha')) {
      return 'Testing';
    } else if (packageName.includes('express') || packageName.includes('server') || packageName.includes('api')) {
      return 'Backend';
    } else if (packageName.includes('data') || packageName.includes('sql') || packageName.includes('db')) {
      return 'Data';
    } else {
      return 'Utility';
    }
  }

  // Function to extract a description from readme
  function getDescription(readme: string, packageName: string): string {
    if (!readme || readme.trim() === '') return generateDescriptionFromName(packageName);
    
    // Remove markdown headers, code blocks, HTML comments and other non-descriptive content
    const cleanedText = readme
      // Remove HTML comments
      .replace(/<!--[\s\S]*?-->/g, '')
      // Remove code blocks
      .replace(/```[\s\S]*?```/g, '')
      // Remove inline code
      .replace(/`[^`]*`/g, '')
      // Remove markdown headers
      .replace(/^#+\s+(.*)$/gm, '$1')
      // Remove badges and images
      .replace(/!\[.*?\]\(.*?\)/g, '')
      // Remove links but keep text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      // Remove special characters and decorators
      .replace(/[#*_~`]/g, '')
      // Remove excessive whitespace
      .replace(/\s+/g, ' ')
      // Remove weird characters and patterns
      .replace(/\(\s*\(\s*\(\s*\)[\s\S]*/, '')
      .trim();
    
    // Split by common delimiters
    const paragraphs = cleanedText.split(/\n|\r|\.\s+/);
    
    // Look for likely description sentences
    for (const para of paragraphs) {
      const trimmed = para.trim();
      // Find sentences that are likely to be descriptions
      if (
        trimmed.length > 20 && trimmed.length < 200 && 
        (
          trimmed.includes('is a') || 
          trimmed.includes('provides') || 
          trimmed.includes('library for') || 
          trimmed.includes('tool for') || 
          trimmed.includes('framework for') ||
          trimmed.toLowerCase().startsWith('a ') ||
          trimmed.toLowerCase().startsWith('the ') ||
          trimmed.toLowerCase().startsWith('this ') ||
          // Is the first substantial paragraph
          (paragraphs.indexOf(para) === 0 && trimmed.length > 40)
        )
      ) {
        return trimmed.endsWith('.') ? trimmed : trimmed + '.';
      }
    }
    
    // Get the first meaningful paragraph
    const firstMeaningful = paragraphs.find(p => p.trim().length > 40);
    if (firstMeaningful) {
      const trimmed = firstMeaningful.trim();
      return trimmed.endsWith('.') ? trimmed : trimmed + '.';
    }
    
    // Fall back to generated description
    return generateDescriptionFromName(packageName);
  }
  
  // Generate a meaningful description from package name
  function generateDescriptionFromName(packageName: string): string {
    // Extract just the last part of the package name (after last slash or dash)
    const simpleName = packageName.split('/').pop() || packageName;
    const baseName = simpleName.split('-').pop() || simpleName;
    
    // Get package keywords
    const keywords = simpleName.split(/[-_./]/);
    
    // Determine package type based on name
    if (packageName.includes('sdk') || packageName.includes('SDK')) {
      return `Software Development Kit for ${prettifyName(baseName)} integration and implementation.`;
    } else if (packageName.includes('api')) {
      return `API client for interacting with ${prettifyName(baseName)} services and endpoints.`;
    } else if (packageName.includes('client')) {
      return `Client library for ${prettifyName(baseName)} services and data access.`;
    } else if (packageName.includes('util') || packageName.includes('utils')) {
      return `Utility functions and helpers for ${prettifyName(baseName)} operations.`;
    } else if (packageName.includes('core')) {
      return `Core functionality and essential components for the ${prettifyName(baseName)} framework.`;
    } else if (packageName.includes('ui') || packageName.includes('component')) {
      return `UI components and interface elements for ${prettifyName(baseName)} applications.`;
    } else if (packageName.includes('plugin') || packageName.includes('extension')) {
      return `Plugin that extends functionality for ${prettifyName(baseName)} systems.`;
    } else if (packageName.includes('data') || packageName.includes('db')) {
      return `Data management and database tools for ${prettifyName(baseName)}.`;
    } else if (packageName.includes('server')) {
      return `Server implementation and backend services for ${prettifyName(baseName)}.`;
    } else if (packageName.includes('auth')) {
      return `Authentication and authorization tools for ${prettifyName(baseName)}.`;
    } else if (packageName.includes('test') || packageName.includes('testing')) {
      return `Testing utilities and frameworks for ${prettifyName(baseName)} applications.`;
    } else if (packageName.includes('cli')) {
      return `Command-line interface for interacting with ${prettifyName(baseName)}.`;
    } else if (packageName.includes('config')) {
      return `Configuration management for ${prettifyName(baseName)} applications.`;
    } else if (packageName.includes('tools')) {
      return `Development tools and utilities for ${prettifyName(baseName)}.`;
    } else if (packageName.includes('template') || packageName.includes('boilerplate')) {
      return `Template and boilerplate for building ${prettifyName(baseName)} applications.`;
    } else if (packageName.includes('analytics')) {
      return `Analytics and metrics tracking for ${prettifyName(baseName)}.`;
    } else if (packageName.includes('parser') || packageName.includes('converter')) {
      return `Parsing and conversion utilities for ${prettifyName(baseName)} data formats.`;
    } else if (packageName.includes('validator') || packageName.includes('validation')) {
      return `Validation tools and schemas for ${prettifyName(baseName)} data.`;
    } else {
      // Construct description from package parts
      if (keywords.length > 1) {
        return `${prettifyName(keywords[0])} package for ${prettifyName(keywords.slice(1).join(' '))} functionality.`;
      } else {
        return `Package providing ${prettifyName(packageName)} functionality and features.`;
      }
    }
  }
  
  // Convert package names to more readable format
  function prettifyName(name: string): string {
    return name
      .replace(/-/g, ' ')
      .replace(/\//g, ' ')
      .replace(/\@/g, '')
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Add spaces between camelCase
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // Function to extract language from package name or install command
  function getLanguage(pkg: Package): string {
    if (pkg.install_cmd.includes('npm') || pkg.package_name.includes('js')) {
      return 'JavaScript';
    } else if (pkg.install_cmd.includes('pip') || pkg.package_name.includes('py')) {
      return 'Python';
    } else if (pkg.install_cmd.includes('gem')) {
      return 'Ruby';
    } else {
      return 'Other';
    }
  }

  // Function to extract publisher from package name
  function getPublisher(packageName: string): string {
    // For demo purposes, generate a publisher based on package name
    if (packageName.includes('/')) {
      const orgName = packageName.split('/')[0].replace(/^@/, '');
      return orgName;
    } else {
      const simpleName = packageName.replace(/^@/, '');
      return simpleName.substring(0, simpleName.indexOf('-') > 0 ? simpleName.indexOf('-') : 5);
    }
  }
  
  // Filter packages based on category (done client-side for demo)
  const filteredPackages = data?.packages.filter(pkg => {
    const packageCategory = getPackageCategory(pkg.package_name);
    return activeCategory === "All" || packageCategory === activeCategory;
  }) || [];

  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-violet-500">
          Discover MCP Packages
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Explore our library of over 2,000 packages. Find the perfect tools for your next project.
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
              className="appearance-none w-full bg-indigo-900/20 backdrop-blur-sm border border-indigo-900/40 rounded-lg py-2.5 px-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent cursor-pointer"
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
            className="w-full bg-indigo-900/20 backdrop-blur-sm border border-indigo-900/40 rounded-lg py-2.5 px-4 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            placeholder="Search packages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IconSearch className="absolute left-4 top-3 text-gray-400" size={18} />
        </div>
      </div>

      {/* Sort Options */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-gray-400 text-sm">
          {data?.meta && (
            <>
              Showing <span className="font-medium text-indigo-400">{filteredPackages.length}</span> of <span className="font-medium text-indigo-400">{data.meta.totalCount}</span> packages
            </>
          )}
        </div>
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none bg-indigo-900/20 backdrop-blur-sm border border-indigo-900/40 rounded-lg py-2 px-4 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent cursor-pointer text-sm font-medium"
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

      {/* Loading State */}
      {isLoading && (
        <div className="text-center py-12">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent"></div>
          <p className="mt-4 text-gray-400">Loading packages...</p>
        </div>
      )}
      
      {/* Error State */}
      {isError && (
        <div className="text-center py-12 animate-fade-in">
          <p className="text-violet-400 text-lg">Failed to load packages</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700 text-white rounded-lg text-sm"
          >
            Try again
          </button>
        </div>
      )}

      {/* Server Grid */}
      {!isLoading && !isError && filteredPackages.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg, index) => (
              <ServerCard 
                key={pkg.package_name}
                name={pkg.package_name}
                description={getDescription(pkg.readme, pkg.package_name)}
                publisher={getPublisher(pkg.package_name)}
                language={getLanguage(pkg)}
                views={Math.floor(Math.random() * 2000) + 50} // For demo purposes
                category={getPackageCategory(pkg.package_name)}
                index={index}
                createdAt={pkg.created_at}
              />
            ))}
          </div>
          
          {/* Pagination */}
          {data?.meta && data.meta.totalPages > 1 && (
            <Pagination 
              currentPage={currentPage}
              totalPages={data.meta.totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      ) : (
        !isLoading && !isError && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-gray-400 text-lg">No packages found matching your criteria</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700 text-white rounded-lg text-sm"
            >
              Clear filters
            </button>
          </div>
        )
      )}
    </main>
  );
}
