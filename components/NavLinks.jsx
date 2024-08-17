"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        "whitespace-nowrap px-3 py-5 hover:bg-primary-foreground hover:text-white",
        pathname === href && "bg-primary-foreground text-white",
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
