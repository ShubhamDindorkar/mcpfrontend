import { notFound } from "next/navigation";

async function getMcpData(name: string) {
  // Decode the name param to avoid double-encoding
  const decodedName = decodeURIComponent(name);
  // Use absolute URL for fetch
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/mcps?search=${encodeURIComponent(decodedName)}`, { cache: 'no-store' });
  if (!res.ok) return null;
  const data = await res.json();
  // Use data.results.find since API returns { results, total }
  return data.results.find((item: any) => item.package.toLowerCase() === decodedName.toLowerCase()) || null;
}

export default async function McpDetailPage({ params }: { params: { name: string } }) {
  const mcp = await getMcpData(params.name);
  if (!mcp) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-white">
      <h1 className="text-3xl font-bold mb-2">{mcp.package}</h1>
      <div className="mb-4">
        <span className="bg-[#23272f] px-3 py-1 rounded text-[#b0b6be]">{mcp.install}</span>
      </div>
      <h2 className="text-xl font-semibold mb-2">Readme</h2>
      <pre className="bg-[#181c22] border border-[#23272f] rounded p-4 whitespace-pre-wrap text-[#b0b6be] mb-8 max-h-[500px] overflow-auto">
        {mcp.readme || "No readme available."}
      </pre>
    </div>
  );
} 