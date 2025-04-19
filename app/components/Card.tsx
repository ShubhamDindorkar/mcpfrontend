import React from "react";
import { CardContainer, CardBody } from "../../components/ui/3d-card";

type CardProps = {
  name: string;
  description: string;
  publisher: string;
  language: string;
  views: number;
};

export default function Card({ name, description, publisher, language, views }: CardProps) {
  return (
    <CardContainer className="w-full h-full">
      <CardBody className="w-full h-full">
        <div className="relative inline-flex w-full h-full overflow-hidden rounded-xl p-[1.5px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] rounded-xl" />
          <div className="relative z-10 bg-[#181c22] border border-[#23272f] w-full h-full p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow min-h-[180px] rounded-xl">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1 truncate" title={name}>{name}</h3>
              <p className="text-sm text-[#b0b6be] mb-4 line-clamp-2" title={description}>{description}</p>
            </div>
            <div className="flex items-center justify-between text-xs text-[#8a8f98] mt-2 pt-2 border-t border-[#23272f]">
              <span>{publisher}</span>
              <span className="inline-flex items-center gap-2">
                <span className="bg-[#23272f] px-2 py-0.5 text-[#b0b6be] rounded">{language}</span>
                <span className="ml-2">👁 {views}</span>
              </span>
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
} 