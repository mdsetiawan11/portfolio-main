import type { Metadata } from "next";
import { Space_Grotesk as FontSans } from "next/font/google";

import "./globals.css";
import { cn } from "@/shared/lib/utils";
import { ThemeProvider } from "@/app/providers/theme";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Muhammad Dadang Setiawan - Software Developer",
  authors: {
    name: "Velenyx",
  },

  description:
    "I'm a software developer passionate about building a web and mobile application that users love 🏗️",
  openGraph: {
    title: "Muhammad Dadang Setiawan - Software Developer",
    description:
      "I'm a software developer passionate about building a web and mobile application that users love 🏗️",
    //url: "https://velenyx.tech",
    //siteName: "Velenyx",
    //images: "/og.png",
    //type: "website",
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
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
