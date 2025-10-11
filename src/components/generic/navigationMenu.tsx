"use client";

import { useState } from "react";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/utils/cn";

type NavigationMenuProps = React.ComponentProps<typeof RadixNavigationMenu.Root>;

export function NavigationMenu({ className, children, ...props }: NavigationMenuProps) {
    return (
        <RadixNavigationMenu.Root
            data-slot="navigation-menu"
            data-viewport={false}
            className={cn("relative flex max-w-max flex-1 items-center justify-center", className)}
            {...props}
        >
            {children}
        </RadixNavigationMenu.Root>
    );
}

type NavigationMenuListProps = React.ComponentProps<typeof RadixNavigationMenu.List>;

export function NavigationMenuList({ className, ...props }: NavigationMenuListProps) {
    return (
        <RadixNavigationMenu.List
            data-slot="navigation-menu-list"
            className={cn("group flex flex-1 list-none items-center justify-center gap-1", className)}
            {...props}
        />
    );
}

type NavigationMenuItemProps = React.ComponentProps<typeof RadixNavigationMenu.Item>;

export function NavigationMenuItem({ className, ...props }: NavigationMenuItemProps) {
    return (
        <RadixNavigationMenu.Item
            data-slot="navigation-menu-item"
            className={cn("relative", className)}
            {...props}
        />
    );
}

type NavigationMenuTriggerProps = React.ComponentProps<typeof RadixNavigationMenu.Trigger>;

export function NavigationMenuTrigger({ className, children, ...props }: NavigationMenuTriggerProps) {
    return (
        <RadixNavigationMenu.Trigger
            data-slot="navigation-menu-trigger"
            className={cn(
                "group inline-flex items-center justify-center cursor-pointer",
                "h-10 w-[127px] px-[22px] gap-[3px] rounded-[10px]",
                "bg-transparent text-white font-medium text-sm",
                "border-b border-transparent outline-none select-none transition-colors",
                "hover:bg-[#1D1D1D] hover:border-b-[#575757]",
                "focus-visible:bg-[#1D1D1D] focus-visible:border-b-[#575757]",
                className
            )}
            {...props}
        >
            {children}
            <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                className="relative top-[1px] ml-1 h-3 w-3 shrink-0 group-data-[state=open]:rotate-180 motion-safe:transition motion-safe:duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <title>Chevron Down</title>
                <path d="m6 9 6 6 6-6" />
            </svg>
        </RadixNavigationMenu.Trigger>
    );
}

type NavigationMenuContentProps = React.ComponentProps<typeof RadixNavigationMenu.Content>;

export function NavigationMenuContent({ className, ...props }: NavigationMenuContentProps) {
    return (
        <RadixNavigationMenu.Content
            data-slot="navigation-menu-content"
            className={cn(
                "top-full p-2 left-0 z-50 mt-1.5 w-full overflow-hidden rounded-xl md:absolute md:left-1/2 md:w-auto md:-translate-x-1/2",
                "bg-[#0b0b0b] border-2 border-[#292929] shadow-none",
                "motion-safe:data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52",
                "motion-safe:data-[motion=to-end]:slide-out-to-right-52 motion-safe:data-[motion=to-start]:slide-out-to-left-52",
                "motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[motion^=from-]:animate-in motion-safe:data-[motion^=to-]:animate-out",
                "motion-safe:duration-200 motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=open]:animate-in",
                "motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[state=closed]:fade-out-0",
                "**:data-[slot=navigation-menu-link]:focus:outline-none **:data-[slot=navigation-menu-link]:focus:ring-0",
                className
            )}
            {...props}
        />
    );
}

type NavigationMenuContentItemProps = React.ComponentProps<typeof RadixNavigationMenu.Link>;

export function NavigationMenuContentItem({ children, className, ...props }: NavigationMenuContentItemProps) {
    const [isHovered, setIsHovered] = useState(false);
    const isReducedMotion = useReducedMotion();

    const interactionProps = !isReducedMotion && {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        onFocus: () => setIsHovered(true),
        onBlur: () => setIsHovered(false),
    };

    return (
        <RadixNavigationMenu.Link
            data-slot="navigation-menu-content-item"
            className={cn(
                "relative rounded-lg p-3 outline-none",
                isReducedMotion && "hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0.4%,rgba(153,153,153,0)_100%)]",
            )}
            {...props}
            {...interactionProps}
        >
            <div className={cn("relative z-10 flex flex-col gap-0.5", className)}>{children}</div>
            {!isReducedMotion && (
                <AnimatePresence initial={false}>
                    {isHovered && (
                        <motion.div
                            className="absolute inset-0 z-[1] rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0.4%,rgba(32,32,32,1)_100%)]"
                            layoutId="background"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, type: "spring", bounce: 0 }}
                        />
                    )}
                </AnimatePresence>
            )}
        </RadixNavigationMenu.Link>
    );
}

type NavigationMenuLinkProps = React.ComponentProps<typeof RadixNavigationMenu.Link>;

export function NavigationMenuLink({ className, ...props }: NavigationMenuLinkProps) {
    return (
        <RadixNavigationMenu.Link
            data-slot="navigation-menu-link"
            className={cn(
                "flex flex-col items-center justify-center",
                "h-10 w-[127px] px-[22px] gap-[3px] rounded-[10px]",
                "bg-transparent text-primary-muted font-medium text-sm",
                "border-b border-transparent outline-none select-none transition-colors",
                "hover:bg-[#1D1D1D] hover:border-b-[#575757]",
                "focus-visible:bg-[#1D1D1D] focus-visible:border-b-[#575757]",
                className
            )}
            {...props}
        />
    );
}
