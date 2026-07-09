// src/app/blog/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Bedrock Construction Group",
  description: "Practical advice on hiring a contractor, permitting, remodeling, and building in Waco and Central Texas.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}