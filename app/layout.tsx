import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Providers from "./providers";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[linear-gradient(135deg,#07041a_0%,#0c0629_30%,#150b33_70%,#0c0526_100%)]`}
      >
        {/* Star field background */}
        <div className="fixed inset-0 w-full h-full bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none -z-10"></div>
        <div className="fixed inset-0 w-full h-full bg-[radial-gradient(#ffffff0f_1.5px,transparent_1.5px)] [background-size:40px_40px] pointer-events-none opacity-50 -z-10"></div>
        
        <Providers>
          {/* Navbar */}
          <header className="border-b border-indigo-900/30 backdrop-blur-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-violet-500">
                  mcpnexus
                </span>
              </Link>
              
              <div className="flex items-center gap-3">
                <Link 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-indigo-900/30 transition-colors"
                >
                  GitHub
                </Link>
                
                <Link 
                  href="/publish"
                  className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-indigo-900/30 transition-colors"
                >
                  Publish MCP
                </Link>
                
                <Link 
                  href="/signup"
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700 text-white rounded-lg transition-colors"
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
          <footer className="border-t border-indigo-900/30 py-6 mt-auto">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-indigo-400">mcpnexus</span>
                <span className="text-sm text-gray-500">© {new Date().getFullYear()}</span>
              </div>
              
              <div className="flex items-center gap-6">
                <Link href="/about" className="text-sm text-gray-400 hover:text-indigo-300 transition-colors">
                  About
                </Link>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-indigo-300 transition-colors">
                  Terms
                </Link>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-indigo-300 transition-colors">
                  Privacy
                </Link>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-indigo-300 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
