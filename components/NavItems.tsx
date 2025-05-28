"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

function NavItems() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-4">
      {navItems.map(({ label, href }) => (
        <li key={label}>
          <Link
            href={href}
            className={cn(pathname === href && "text-primary font-semibold")}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavItems;
