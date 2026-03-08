import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S9 Services | Reliable Roofing & Exterior Solutions",
  description:
    "Premium exterior company serving Howell and surrounding areas with roofing, siding, windows, doors, and storm restoration support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
