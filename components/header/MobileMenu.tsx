"use client";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import logo from "@/public/HU_Siegel_RGB.svg";

function MenuLink({ href, children, closeMenu }: { href: string, children: string, closeMenu: (b: boolean) => void }) {
    return (
        <li className="group flex h-full items-center">
            <Link
                href={href}
                className="flex h-full items-center py-2 text-hu-blue-primary"
                onClick={() => closeMenu(false)}
            >
                <span className="inline-link-header transition-all">
                    {children}
                </span>
            </Link>
        </li>
    );
}

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="relative z-50">
            <div
                className={`fixed left-0 top-0 flex h-dvh w-dvw flex-col items-center justify-center bg-white 
                landscape:flex-row ${isOpen ? "pointer-events-auto" : "pointer-events-none opacity-0"}
                transition-opacity`}
            >
                <Link
                    href="https://www.hu-berlin.de/en"
                    className="size-[60dvmin]"
                    target="_blank"
                >
                    <Image src={logo} alt="HU-Logo" className="size-full" priority/>
                </Link>
                <nav>
                    <ul className="flex flex-col items-center landscape:items-start">
                        <MenuLink closeMenu={setIsOpen} href="/public">Home</MenuLink>
                        <MenuLink closeMenu={setIsOpen} href="/publications">Publications</MenuLink>
                        <MenuLink closeMenu={setIsOpen} href="/research">Research</MenuLink>
                        <MenuLink closeMenu={setIsOpen} href="/chair">Chair</MenuLink>
                        <MenuLink closeMenu={setIsOpen} href="/travel">Travel</MenuLink>
                    </ul>
                </nav>
            </div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed left-6 top-6 rounded-full bg-hu-blue-primary p-1"
            >
                <Hamburger toggled={isOpen} color="white" size={25}/>
            </button>
        </header>
    );
}