"use client";

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Header, Footer, CustomThemeProvider } from "@components/index";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <CustomThemeProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Analytics />
          </CustomThemeProvider>
        </body>
      </html>
    );
  } catch (error) {
    console.error("Layout Error:", error);
    throw error;
  }
}
