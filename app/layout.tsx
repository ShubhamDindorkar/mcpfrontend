import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { GridBackground } from "../components/ui/gridbackground";
import { Spotlight } from "../components/ui/spotlight";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mcpnexus",
  description: "Discover and publish MCP servers with mcpnexus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global grid and spotlight backgrounds */}
        <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
          <GridBackground />
          <Spotlight fill="#a259f7" className="absolute inset-0 w-full h-full z-10 opacity-20" />
        </div>
        {/* Navbar */}
        <nav className="w-full flex items-center justify-between px-8 py-4 bg-transparent backdrop-blur-md z-50 relative">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              {/* Animated logo: swap color on dark/light mode */}
              <span className="transition-colors duration-500 text-2xl font-bold tracking-tight text-[#171717] dark:text-white group-hover:text-[#a259f7] dark:group-hover:text-[#a259f7]">mcpnexus</span>
              <span className="ml-1 w-3 h-3 rounded-full bg-[#a259f7] animate-pulse transition-all duration-500 group-hover:scale-125" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Github
              </span>
            </a>
            <Link href="/publish"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Publish MCP
              </span>
            </Link>
            <Link href="/signup"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                SignUp
              </span>
            </Link>
          </div>
        </nav>
        <div className="min-h-[calc(100vh-48px)] flex flex-col">
          {children}
        </div>
        {/* Footer */}
        <footer className="w-full py-4 px-8 bg-[#111418] border-t border-[#23272f] text-center text-xs text-[#888] mt-auto">
          mcpnexus &copy; {new Date().getFullYear()} | Discover and publish MCP servers
        </footer>
      </body>
    </html>
  );
}
