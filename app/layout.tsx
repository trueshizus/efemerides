import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Aspects } from "@/components/aspects";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ViewTransitions>
    <html lang="en">
      <body className={inter.className + " pile overflow-hidden"}>
        <section
          className="peer w-full h-screen z-20 bg-slate-900 transition-transform duration-300 ease-in-out translate-y-[92lvh] focus-within:translate-y-[15lvh] rounded-t-3xl"
          style={{ viewTransitionName: "static-sheet" }}
        >
          <Aspects />
        </section>

        <section className="overflow-hidden w-full h-screen transition duration-200	peer-has-[:focus]:brightness-50 peer-has-[:focus]:blur-sm  min-h-screen bg-slate-800 peer-checked/section:bg-red-500 peer-checked/section:blur-m ">
          <Navigation />
          {children}
        </section>
      </body>
    </html>
    // </ViewTransitions>
  );
}
