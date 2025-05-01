import { IconArrowRight } from "@tabler/icons-react";

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

  return (
    <div 
      className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-purple-500/40 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-purple-500/10 animate-slide-up"
      style={{ animationDelay }}
    >
      {/* Card header with gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 truncate group-hover:text-purple-400 transition-colors">
          {name}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2 min-h-[48px]">
          {description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-gray-800">
          <span>{publisher}</span>
          <div className="flex items-center gap-3">
            <span className="bg-gray-800 px-2 py-1 rounded text-gray-300">
              {language}
            </span>
            <span className="flex items-center">
              <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-1 animate-pulse"></span>
              {views}
            </span>
          </div>
        </div>
      </div>
      <div className="px-6 py-3 bg-gray-800/30 flex justify-between items-center">
        <span className="text-xs text-gray-400">{category}</span>
        <button className="flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium group">
          View details
          <IconArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
} 