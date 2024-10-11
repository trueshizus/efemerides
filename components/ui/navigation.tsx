"use client";

import { ChartCircle, TableDocument } from "iconic-react";
import Link from "next/link";

import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Chart", icon: <ChartCircle size="24" /> },
  { href: "/table", label: "Table", icon: <TableDocument size="24" /> },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav
      className="w-full pt-2 border-b-2 border-slate-600"
      style={{ viewTransitionName: "static-nav" }}
    >
      <ul className="flex justify-evenly ">
        {navItems.map(({ href, label, icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              href={href}
              key={href}
              className="flex flex-col items-center text-slate-400"
            >
              <li key={href} className="flex flex-col items-center">
                {icon}
                <span className="mb-2 text-sm">{label}</span>

                {isActive && (
                  <hr className="w-10 h-[2px] border-none rounded bg-slate-400" />
                )}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
