import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Automa | Intelligent Automation For Smarter Manufacturing",
  description:
    "Advanced robotics, seamless integration, and data-driven automation solutions that boost efficiency, quality, and productivity on the factory floor.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full`}>
      <body
        suppressHydrationWarning
        suppressContentEditableWarning
        className="min-h-full bg-surface text-ink antialiased"
      >
        {children}
      </body>
    </html>
  );
}
