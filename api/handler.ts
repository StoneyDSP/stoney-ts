#!/usr/bin/env node

import type { VercelRequest, VercelResponse } from "@vercel/node";

// export const hostname = process.env["HOSTNAME"];
// export const port = process.env["PORT"];

export const hostname: string | null = "127.0.0.1";
export const port: number | null = 8080;

export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  var url = request.url;
  // var hostname = process.env["hostname"];
  // var port = process.env["port"];

  response.writeHead(200, {"Content-Type": "text/html"})
  response.write(`Server running at http://${hostname}:${port}${url}`);
  response.end();
};
