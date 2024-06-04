"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        "px-3 py-5 whitespace-nowrap hover:bg-[#5c5822] hover:text-white",
        pathname === href && "bg-[#5c5822] text-white",
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
