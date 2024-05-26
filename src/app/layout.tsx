import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The horses",
  description: "The horses are here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex flex-col min-h-screen")}>
        <Header />
        <main className="flex-grow">{children}</main>
        <footer className=" bg-white border-t text-sm border-gray-200 p-2">
          <div className="text-center mt-6 border-l-2 pl-6 italic">
            <span className="mr-2">@mateusz</span>
            <time>{new Date().getFullYear()}</time>
          </div>
        </footer>
      </body>
    </html>
  );
}
