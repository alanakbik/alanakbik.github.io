"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";

import Wrapper from "@/components/Wrapper";
import logo from "@/public/HU_Siegel-Kombi_RGB.svg";
import tailwindConfig from "@/tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

function HeaderLink({ href, children }: { href: string, children: string }) {
    return (
        <li className="group/li flex h-full items-center">
            <Link
                href={href}
                className="group/link flex h-full items-center text-[color:var(--hu-blue)] group-first-of-type/li:pl-0
                group-last-of-type/li:pr-0 md:px-2 lg:px-4 xl:px-6"
            >
                <span className="inline-link-header transition-all">
                    {children}
                </span>
            </Link>
        </li>
    );
}

export default function Header() {
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleChange = (e: MediaQueryListEvent) => {
                setIsDesktop(e.matches);
            };
            window.matchMedia(`(min-width: ${fullConfig.theme.screens.md})`).addEventListener("change", handleChange);
            return window.matchMedia(`(min-width: ${fullConfig.theme.screens.md})`).removeEventListener("change", handleChange);
        }
    }, []);
    if (!isDesktop) {
        return null;
    }
    return (
        <header className="shadow-lg">
            <Wrapper>
                <div className="flex justify-between">
                    <nav className="h-[var(--header-height)]">
                        <ul className="flex h-full items-center">
                            <HeaderLink href="/">Home</HeaderLink>
                            <HeaderLink href="/publications">Publications</HeaderLink>
                            <HeaderLink href="/research">Research</HeaderLink>
                            <HeaderLink href="/chair">Chair</HeaderLink>
                            <HeaderLink href="/travel">Travel</HeaderLink>
                        </ul>
                    </nav>
                    <Link href="https://www.hu-berlin.de/de" className="h-full" target="_blank">
                        <Image src={logo} alt="HU-Logo" unoptimized className="relative left-[10%] h-[var(--header-height)] w-auto"/>
                    </Link>
                </div>
            </Wrapper>
        </header>
    );
}