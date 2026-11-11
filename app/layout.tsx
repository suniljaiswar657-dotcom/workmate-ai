import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WORKMATE AI — Business, in sync",
  description: "Your AI-powered business workspace for customers, invoices, payments and daily operations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
