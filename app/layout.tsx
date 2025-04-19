import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar */}
        <nav className="w-full flex items-center justify-between px-8 py-4 bg-[#111418] border-b border-[#23272f] shadow-sm">
          <div className="flex items-center gap-3">
            <Link href="/">
              <span className="text-xl font-bold tracking-tight text-white">mcpnexus</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 rounded bg-[#23272f] text-white hover:bg-[#2c313a] transition">Github</a>
            <Link href="/publish" className="text-sm px-4 py-2 rounded bg-[#23272f] text-white hover:bg-[#2c313a] transition">Publish MCP</Link>
            <Link href="/signup" className="text-sm px-4 py-2 rounded border border-[#2c313a] text-white hover:bg-[#23272f] transition">SignUp</Link>
          </div>
        </nav>
        <div className="min-h-[calc(100vh-64px-48px)] flex flex-col">
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
