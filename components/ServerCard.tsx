import { IconArrowRight, IconEye } from "@tabler/icons-react";
import Link from "next/link";

interface ServerCardProps {
  id?: number;
  name: string;
  description: string;
  publisher: string;
  language: string;
  views: number;
  category: string;
  index?: number;
  createdAt?: string;
}

export default function ServerCard({
  name,
  description,
  publisher,
  language,
  views,
  category,
  index = 0
}: ServerCardProps) {
  // Calculate a small delay based on the index for staggered animation
  const animationDelay = `${index * 75}ms`;
  
  // Remove @ from the beginning of publisher name if it exists
  const formattedPublisher = publisher.startsWith('@') ? publisher.substring(1) : publisher;
  
  return (
    <div 
      className="relative bg-gray-900/40 backdrop-blur-sm border border-indigo-900/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-violet-500/50 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-violet-500/20 animate-slide-up flex flex-col h-full"
      style={{ animationDelay }}
    >
      {/* Random stars effect in background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${1 + Math.random() * 2}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Card header with gradient line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600"></div>
      
      <div className="p-6 relative z-10 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-white mb-2 truncate">
          {name}
        </h3>
        <div className="text-gray-300 mb-4 min-h-[48px] text-sm">
          {description && description.length > 120 
            ? `${description.substring(0, 120).trim()}...` 
            : description}
        </div>
        <div className="flex items-center justify-between text-sm text-gray-400 pt-4 mt-auto border-t border-indigo-900/50">
          <span className="truncate max-w-[130px] text-indigo-300/90">{formattedPublisher}</span>
          <div className="flex items-center gap-3">
            <span className="bg-indigo-900/50 px-2 py-1 rounded text-violet-200 font-medium">
              {language}
            </span>
            <span className="flex items-center">
              <IconEye size={14} className="mr-1 text-violet-400" />
              {views}
            </span>
          </div>
        </div>
      </div>
      <div className="px-6 py-3 bg-indigo-900/20 flex justify-between items-center backdrop-blur-sm">
        <span className="text-xs text-indigo-300/70 bg-indigo-900/40 px-2 py-1 rounded-full">{category}</span>
        <Link 
          href={`/package/${encodeURIComponent(name)}`}
          className="flex items-center text-violet-400 hover:text-violet-300 text-sm font-medium group"
        >
          View details
          <IconArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
} 