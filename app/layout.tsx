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
      <body
        className={
          inter.className + " overflow-hidden grid grid-cols-1 lg:grid-cols-2"
        }
      >
        <section className="lg:col-start-2 col-start-1 row-start-1 order-2 overflow-hidden w-full lg:w-auto h-screen transition duration-200	peer-has-[:focus]:brightness-50 peer-has-[:focus]:blur-sm  min-h-screen bg-slate-800 peer-checked/section:bg-red-500 peer-checked/section:blur-m ">
          <Navigation />
          {children}
        </section>

        <section
          className="lg:col-start-1 col-start-1 row-start-1  peer w-full lg:w-auto h-screen  transition-transform duration-300 ease-in-out translate-y-[92svh] lg:translate-y-0 focus-within:translate-y-[15lvh]"
          style={{ viewTransitionName: "static-sheet" }}
        >
          <Aspects />
        </section>
      </body>
    </html>
    // </ViewTransitions>
  );
}
