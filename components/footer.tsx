"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="z-20 w-full h-[100lvh]  transition-transform duration-300 ease-in-out translate-y-[20lvh] has-[:focus]:translate-y-[-50lvh] rounded-t-3xl">
      <input type="radio" id="scales" name="scales" className="sr-only peer" />

      <label
        htmlFor="scales"
        className="block w-full h-20 rounded-t-xl bg-slate-900 hover:bg-gray-700 transition-colors text-center"
      >
        <h1 className="text-xl border-b-2 bg-red-500">List of Aspects</h1>
      </label>

      <ul>
        <li>Aspect 1</li>
        <li>Aspect 2</li>
        <li>Aspect 3</li>
      </ul>

      {/* <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="w-full h-20 rounded-t-xl bg-slate-900 hover:bg-gray-700 transition-colors"
          >
            <div className="flex flex-col items-center">
              <div className="w-10 h-1 bg-gray-400 rounded-full mb-2" />
              <span>Aspectos</span>
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="h-[80%] rounded-t-xl bg-gray-800 text-white"
        >
          <SheetHeader>
            <SheetTitle>Aspectos</SheetTitle>
            <SheetDescription>
              Current Sky 11:43 - 3 Sep 2024
              <br />
              BUENOS AIRES, ARG.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet> */}
    </footer>
  );
}
