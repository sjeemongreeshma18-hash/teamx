import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "RideSync";

export const metadata: Metadata = {
  title: {
    default: appName,
    template: `${appName} | %s`,
  },
  description:
    "RideSync Phase 3 foundations: routed placeholders, layout, and health check.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="border-b border-white/20 bg-white/15 px-6 py-4 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xl font-bold text-white drop-shadow-sm">{appName}</p>
            <SiteNav />
          </div>
        </header>
        <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-10">
          {children}
        </main>
        <footer className="px-6 py-4 text-center text-sm text-white/80">
          Phase 3 foundations. Existing passenger and conductor demo remains in
          frontend/.
        </footer>
      </body>
    </html>
  );
}
