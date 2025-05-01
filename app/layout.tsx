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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900`}
      >
        {/* Background dot pattern */}
        <div className="fixed inset-0 w-full h-full bg-[radial-gradient(#33333322_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none -z-10"></div>
        
        {/* Navbar */}
        <header className="border-b border-gray-800/60 backdrop-blur-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:opacity-80">
                mcpnexus
              </span>
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            </Link>
            
            <div className="flex items-center gap-3">
              <Link 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              >
                GitHub
              </Link>
              
              <Link 
                href="/publish"
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              >
                Publish MCP
              </Link>
              
              <Link 
                href="/signup"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800/60 py-6 mt-auto">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-gray-300">mcpnexus</span>
              <span className="text-sm text-gray-500">© {new Date().getFullYear()}</span>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
