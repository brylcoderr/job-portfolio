import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shubham Kushwah — Full-Stack Developer | React, Next.js, Node.js",
  description:
    "Full-Stack Developer with 6+ years of experience building fast, scalable web applications using React.js, Next.js, TypeScript, Node.js, and Express. Based in Noida, India — open to remote.",
  keywords: [
    "Shubham Kushwah",
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Web Developer",
    "Noida",
    "India",
  ],
  authors: [{ name: "Shubham Kushwah" }],
  openGraph: {
    type: "website",
    title: "Shubham Kushwah — Full-Stack Developer",
    description:
      "Building fast, scalable, accessible web apps for 6+ years. React.js, Next.js, Node.js specialist.",
    url: "https://brylcodes.in",
    siteName: "Shubham Kushwah Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Kushwah — Full-Stack Developer",
    description:
      "Building fast, scalable, accessible web apps for 6+ years. React.js, Next.js, Node.js specialist.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        {/* Inline theme script to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('portfolio-theme');
                  if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  document.documentElement.setAttribute('data-theme', t);
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
