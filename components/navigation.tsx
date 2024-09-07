"use client";

import { ChartCircle, TableDocument } from "iconic-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b-2 border-slate-600 ">
      <ul className="flex center bg-slate-800 justify-evenly ">
        <li>
          <Link
            href="/"
            className={`flex flex-col items-center py-2 text-slate-400 ${
              pathname === "/" ? "text-slate-200" : ""
            }`}
          >
            <ChartCircle size="24" className="" />
            <span className="mt-1 text-sm">Chart</span>
          </Link>
        </li>
        <li>
          <Link
            href="/table"
            className={`flex flex-col items-center py-2 text-slate-400 ${
              pathname === "/table" ? "text-slate-200" : ""
            }`}
          >
            <TableDocument size="24" className="" />
            <span className="mt-1 text-sm">Table</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
