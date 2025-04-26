import React from "react";
import { CardContainer, CardBody } from "../../components/ui/3d-card";
import Link from "next/link";

type CardProps = {
  name: string;
  description: string;
  publisher?: string;
  language?: string;
  views?: number;
};

export default function Card({ name, description }: CardProps) {
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
            <Link
              href={`/mcp/${encodeURIComponent(name)}`}
              className="mt-4 inline-block bg-[#393BB2] hover:bg-[#2d2f7a] text-white font-semibold py-2 px-4 rounded transition-colors text-center"
            >
              View Details
            </Link>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
} 