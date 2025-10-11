// helpers/PlainContentItem.tsx
"use client";
import Link from "next/link";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import { cn } from "@/utils/cn";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function PlainContentItem({ href, className, children }: Props) {
  return (
    <RadixNavigationMenu.Link asChild>
      <Link
        href={href}
        // outer padding creates the gap from the separators
        className={cn("block h-full px-1", className)}
      >
        {/* inner card gets the hover bg */}
        <div className="h-full rounded-lg bg-transparent hover:bg-[#1D1D1D]">
          {children}
        </div>
      </Link>
    </RadixNavigationMenu.Link>
  );
}
