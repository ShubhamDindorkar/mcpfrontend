import React from "react";
import Card from "./Card";

type Server = {
  name: string;
  description: string;
  publisher: string;
  language: string;
  views: number;
};

type ServerGridProps = {
  servers: Server[];
};

export default function ServerGrid({ servers }: ServerGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {servers.map((server, i) => (
        <Card key={i} {...server} />
      ))}
    </div>
  );
} 