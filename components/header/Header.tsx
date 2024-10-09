"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";

import MobileMenu from "@/components/header/MobileMenu";
import Wrapper from "@/components/Wrapper";
import logo from "@/public/HU_Siegel-Kombi_RGB.svg";
import tailwindConfig from "@/tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

function HeaderLink({ href, children }: { href: string, children: string }) {
    return (
        <li className="group flex h-full items-center">
            <Link
                href={href}
                className="flex h-full items-center text-hu-blue-primary group-first-of-type:pl-0
                group-last-of-type:pr-0 md:px-2 lg:px-4 xl:px-6"
            >
                <span className="inline-link bg-gradient-to-b from-hu-blue-primary to-hu-blue-primary">
                    {children}
                </span>
            </Link>
        </li>
    );
}

export default function Header() {
    const [isDesktop, setIsDesktop] = useState(true);
    useEffect(() => {
        setIsDesktop(
            window
                .matchMedia(`(min-width: ${fullConfig.theme.screens.md}) and (min-height: ${fullConfig.theme.screens.sm})`)
                .matches,
        );
        if (typeof window !== "undefined") {
            const handleChange = (e: MediaQueryListEvent) => {
                setIsDesktop(e.matches);
            };
            window
                .matchMedia(`(min-width: ${fullConfig.theme.screens.md}) and (min-height: ${fullConfig.theme.screens.sm})`)
                .addEventListener("change", handleChange);
            return window
                .matchMedia(`(min-width: ${fullConfig.theme.screens.md}) and (min-height: ${fullConfig.theme.screens.sm})`)
                .removeEventListener("change", handleChange);
        }
    }, []);
    if (!isDesktop) {
        return <MobileMenu/>;
    }
    return (
        <header className="fixed z-50 w-full bg-white shadow-lg">
            <Wrapper>
                <div className="flex justify-between">
                    <nav className="h-header-height">
                        <ul className="flex h-full items-center">
                            <HeaderLink href="/">Home</HeaderLink>
                            <HeaderLink href="/publications">Publications</HeaderLink>
                            <HeaderLink href="/research">Research</HeaderLink>
                            <HeaderLink href="/chair">Chair</HeaderLink>
                            <HeaderLink href="/travel">Travel</HeaderLink>
                        </ul>
                    </nav>
                    <Link href="https://www.hu-berlin.de/en" className="h-full" target="_blank">
                        <Image
                            src={logo}
                            alt="HU-Logo"
                            unoptimized
                            className="relative left-[10%] h-header-height w-auto"
                            priority
                        />
                    </Link>
                </div>
            </Wrapper>
        </header>
    );
}