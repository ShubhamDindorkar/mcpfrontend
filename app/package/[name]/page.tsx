"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IconArrowLeft, IconEye, IconDownload } from "@tabler/icons-react";

export default function PackageDetailsPage() {
  const params = useParams();
  const packageName = decodeURIComponent(params.name as string);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  
  // In a real app, you'd fetch package details from an API
  // For demo purposes, we'll use dummy data
  const [packageDetails, setPackageDetails] = useState<{
    name: string;
    description: string;
    publisher: string;
    language: string;
    views: number;
    category: string;
    readme: string;
    version: string;
    license: string;
    dependencies: number;
    lastUpdate: string;
    downloads: number;
  } | null>(null);
  
  useEffect(() => {
    // Simulate API call with timeout
    const timer = setTimeout(() => {
      // Generate dummy data based on package name
      setPackageDetails({
        name: packageName,
        description: `This is a comprehensive package for ${packageName.split('/').pop()} functionality, offering robust features and seamless integration.`,
        publisher: packageName.includes('/') ? packageName.split('/')[0].replace(/^@/, '') : packageName.split('-')[0],
        language: ['JavaScript', 'TypeScript', 'Python', 'Ruby'][Math.floor(Math.random() * 4)],
        views: Math.floor(Math.random() * 5000) + 100,
        category: ['Utility', 'UI', 'Testing', 'Backend', 'Data'][Math.floor(Math.random() * 5)],
        readme: `# ${packageName}\n\nA powerful package for modern applications.\n\n## Installation\n\n\`\`\`bash\nnpm install ${packageName}\n\`\`\`\n\n## Usage\n\n\`\`\`javascript\nimport { feature } from '${packageName}';\n\n// Use the feature\nfeature();\n\`\`\`\n\n## License\n\nMIT`,
        version: `${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 20)}.${Math.floor(Math.random() * 30)}`,
        license: 'MIT',
        dependencies: Math.floor(Math.random() * 50),
        lastUpdate: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0],
        downloads: Math.floor(Math.random() * 1000000),
      });
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [packageName]);
  
  // Handle copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`npm install ${packageDetails?.name}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto p-8 pt-16 text-center">
        <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent"></div>
        <p className="mt-4 text-gray-400">Loading package details...</p>
      </div>
    );
  }
  
  if (!packageDetails) {
    return (
      <div className="max-w-5xl mx-auto p-8 pt-16 text-center">
        <h1 className="text-2xl font-bold text-red-400">Package not found</h1>
        <Link href="/" className="mt-4 inline-block text-indigo-400 hover:text-indigo-300">
          <IconArrowLeft className="inline mr-2" size={16} />
          Return to package list
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 pt-8 md:pt-12">
      {/* Back button */}
      <Link href="/" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-6">
        <IconArrowLeft size={16} className="mr-2" />
        Back to packages
      </Link>
      
      {/* Package header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-3">{packageDetails.name}</h1>
        <p className="text-gray-300 text-lg mb-4">{packageDetails.description}</p>
        
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="bg-indigo-900/30 px-4 py-2 rounded-lg flex items-center">
            <span className="text-gray-400 text-sm mr-2">Publisher:</span>
            <span className="text-indigo-300">{packageDetails.publisher}</span>
          </div>
          
          <div className="bg-indigo-900/30 px-4 py-2 rounded-lg flex items-center">
            <span className="text-gray-400 text-sm mr-2">Category:</span>
            <span className="text-indigo-300">{packageDetails.category}</span>
          </div>
          
          <div className="bg-indigo-900/30 px-4 py-2 rounded-lg flex items-center">
            <span className="text-gray-400 text-sm mr-2">Language:</span>
            <span className="text-indigo-300">{packageDetails.language}</span>
          </div>
        </div>
      </div>
      
      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-indigo-900/20 backdrop-blur-sm border border-indigo-900/40 rounded-lg p-4">
          <div className="text-gray-400 text-sm mb-1">Version</div>
          <div className="text-white font-mono">{packageDetails.version}</div>
        </div>
        
        <div className="bg-indigo-900/20 backdrop-blur-sm border border-indigo-900/40 rounded-lg p-4">
          <div className="text-gray-400 text-sm mb-1">License</div>
          <div className="text-white">{packageDetails.license}</div>
        </div>
        
        <div className="bg-indigo-900/20 backdrop-blur-sm border border-indigo-900/40 rounded-lg p-4">
          <div className="text-gray-400 text-sm mb-1">Last update</div>
          <div className="text-white">{packageDetails.lastUpdate}</div>
        </div>
        
        <div className="bg-indigo-900/20 backdrop-blur-sm border border-indigo-900/40 rounded-lg p-4">
          <div className="text-gray-400 text-sm mb-1">Dependencies</div>
          <div className="text-white">{packageDetails.dependencies}</div>
        </div>
      </div>
      
      {/* Stats and install command */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1 bg-indigo-900/20 backdrop-blur-sm border border-indigo-900/40 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Statistics</h2>
          
          <div className="flex items-center justify-between py-3 border-b border-indigo-900/40">
            <span className="text-gray-300">Views</span>
            <span className="flex items-center text-indigo-300">
              <IconEye size={16} className="mr-2" />
              {packageDetails.views.toLocaleString()}
            </span>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-indigo-900/40">
            <span className="text-gray-300">Downloads</span>
            <span className="flex items-center text-indigo-300">
              <IconDownload size={16} className="mr-2" />
              {packageDetails.downloads.toLocaleString()}
            </span>
          </div>
          
          <div className="flex items-center justify-between py-3">
            <span className="text-gray-300">Weekly growth</span>
            <span className="text-green-400">+{Math.floor(Math.random() * 20)}%</span>
          </div>
        </div>
        
        <div className="flex-1 bg-indigo-900/20 backdrop-blur-sm border border-indigo-900/40 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Installation</h2>
          
          <div className="font-mono bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code className="text-violet-300">npm install {packageDetails.name}</code>
          </div>
          
          <button 
            className="mt-4 w-full py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700 text-white rounded-lg transition-colors"
            onClick={copyToClipboard}
          >
            {copied ? 'Copied!' : 'Copy to clipboard'}
          </button>
        </div>
      </div>
      
      {/* Readme */}
      <div className="bg-indigo-900/20 backdrop-blur-sm border border-indigo-900/40 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">README</h2>
        
        <div className="prose prose-invert max-w-none">
          <pre className="whitespace-pre-wrap text-sm text-gray-300">
            {packageDetails.readme}
          </pre>
        </div>
      </div>
    </div>
  );
} 