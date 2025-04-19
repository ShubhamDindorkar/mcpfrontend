import React from "react";

type CardProps = {
  name: string;
  description: string;
  publisher: string;
  language: string;
  views: number;
};

export default function Card({ name, description, publisher, language, views }: CardProps) {
  return (
    <div className="bg-[#181c22] border border-[#23272f] rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow min-h-[180px]">
      <div>
        <h3 className="text-lg font-semibold text-white mb-1 truncate" title={name}>{name}</h3>
        <p className="text-sm text-[#b0b6be] mb-4 line-clamp-2" title={description}>{description}</p>
      </div>
      <div className="flex items-center justify-between text-xs text-[#8a8f98] mt-2 pt-2 border-t border-[#23272f]">
        <span>{publisher}</span>
        <span className="inline-flex items-center gap-2">
          <span className="bg-[#23272f] px-2 py-0.5 rounded text-[#b0b6be]">{language}</span>
          <span className="ml-2">👁 {views}</span>
        </span>
      </div>
    </div>
  );
} 