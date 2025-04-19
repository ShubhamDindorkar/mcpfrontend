"use client";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { useRef } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const sections = [
  {
    title: "Featured",
    cards: [
      { name: "Stable Diffusion API", description: "High-quality image generation with advanced prompts.", publisher: "@ai-labs", language: "Python", views: 1200 },
      { name: "Stock Predictor", description: "Predict stock prices using ML models.", publisher: "@fintechpro", language: "TypeScript", views: 980 },
      { name: "Text Summarizer", description: "Summarize long articles instantly.", publisher: "@nlp-guru", language: "Go", views: 650 },
    ],
  },
  {
    title: "Web Search",
    cards: [
      { name: "Smart Search", description: "Semantic web search API.", publisher: "@searchx", language: "Python", views: 1500 },
      { name: "Crawler Pro", description: "Advanced web crawling.", publisher: "@crawlerdev", language: "Rust", views: 900 },
      { name: "MetaScraper", description: "Extract metadata from any site.", publisher: "@scrapeit", language: "Node.js", views: 1200 },
    ],
  },
  {
    title: "Browser Automation",
    cards: [
      { name: "AutoBrowser", description: "Automate browser tasks easily.", publisher: "@autobot", language: "Python", views: 1100 },
      { name: "Form Filler", description: "Fill forms automatically.", publisher: "@formtools", language: "JavaScript", views: 800 },
      { name: "ClickMaster", description: "Automate clicks and navigation.", publisher: "@clicks", language: "Go", views: 950 },
    ],
  },
];

function ScrollArrows({ scrollRef }: { scrollRef: React.RefObject<HTMLDivElement> }) {
  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="absolute top-0 right-2 flex gap-2 z-20">
      <button
        aria-label="Scroll left"
        onClick={() => scroll("left")}
        className="border-none bg-transparent p-0 m-0"
        style={{ pointerEvents: 'auto' }}
      >
        <span className="relative inline-flex h-10 w-10 overflow-hidden rounded-full p-[1.5px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] rounded-full" />
          <span className="relative z-10 flex items-center justify-center h-full w-full bg-[#181c22] text-white rounded-full">
            <IconArrowLeft size={22} />
          </span>
        </span>
      </button>
      <button
        aria-label="Scroll right"
        onClick={() => scroll("right")}
        className="border-none bg-transparent p-0 m-0"
        style={{ pointerEvents: 'auto' }}
      >
        <span className="relative inline-flex h-10 w-10 overflow-hidden rounded-full p-[1.5px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] rounded-full" />
          <span className="relative z-10 flex items-center justify-center h-full w-full bg-[#181c22] text-white rounded-full">
            <IconArrowRight size={22} />
          </span>
        </span>
      </button>
    </div>
  );
}

export default function Home() {
  // Declare a ref for each section at the top level
  const scrollRef0 = useRef<HTMLDivElement>(null);
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const scrollRefs = [scrollRef0, scrollRef1, scrollRef2];
  return (
    <main className="w-full">
      <Hero heroClassName="pt-16 pb-0 mb-10" />
      <div className="flex flex-col w-full max-w-7xl mx-auto px-4 pt-0 py-0">
        {sections.map((section, idx) => (
          <div key={section.title} className={`w-full relative py-2${idx === 0 ? ' mt-6' : ''}`}>
            <div className="flex items-center justify-between mb-2 px-2">
              <h2 className="text-2xl font-bold text-white m-0 p-0 leading-tight">{section.title}</h2>
              <ScrollArrows scrollRef={scrollRefs[idx]} />
            </div>
            <div className="relative">
              <div
                ref={scrollRefs[idx]}
                className="flex flex-row gap-x-6 overflow-x-auto pb-2 px-2 hide-scrollbar"
              >
                {section.cards.map((card, i) => (
                  <div key={i} className="min-w-[340px] sm:min-w-[380px] md:min-w-[420px] max-w-sm flex-shrink-0">
                    <Card {...card} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
