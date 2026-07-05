"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();
  
  const targetLocale = currentLocale === "en" ? "pt" : "en";
  
  // Safe replace of the locale prefix in the pathname
  const redirectPath = pathname.replace(new RegExp(`^\\/${currentLocale}`), `/${targetLocale}`) || `/${targetLocale}`;

  return (
    <Link 
      href={redirectPath}
      className="flex items-center justify-center w-9 h-9 rounded-md text-xs font-semibold uppercase text-navy-400 hover:text-navy-100 hover:bg-navy-800 transition-colors border border-transparent hover:border-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
      aria-label={`Switch to ${targetLocale === "en" ? "English" : "Portuguese"}`}
    >
      {targetLocale}
    </Link>
  );
}
