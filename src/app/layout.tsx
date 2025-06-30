import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "./globals.css";
import { cn } from "@/shared/lib/utils";
import { ThemeProvider } from "@/app/providers/theme";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Muhammad Dadang Setiawan - Software Developer",
  authors: {
    name: "Mdsetiawan",
  },

  description:
    "I'm a software developer passionate about building a web and mobile application that users love 🏗️",
  openGraph: {
    title: "Muhammad Dadang Setiawan - Software Developer",
    description:
      "I'm a software developer passionate about building a web and mobile application that users love 🏗️",
  },
  keywords: [
    "web coding",
    "frontend",
    "backend",
    "muhammad dadang setiawan",
    "flutter",
    "developer",
    "ts",
    "nextjs",
    "tailwind",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
