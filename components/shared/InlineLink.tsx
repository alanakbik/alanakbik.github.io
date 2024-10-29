"use client";

import Link from "next/link";
import React, { type ReactNode, useEffect, useRef, useState } from "react";

export default function H1({ children, href, target }: {
    children: ReactNode,
    href: string,
    target?: string
}) {
    const ref = useRef<HTMLAnchorElement>(null);
    const [space, setSpace] = useState("");
    useEffect(() => {
        const nextChar = ref.current?.nextSibling?.textContent?.[0];
        if (nextChar && ![",", ".", "?", "!", ";", ":"].includes(nextChar)) setSpace(" ");
    }, []);
    return (
        <>
            {" "}
            <Link
                ref={ref}
                href={href}
                target={target}
                className="inline-link bg-gradient-to-b from-hu-blue-secondary to-hu-blue-secondary font-medium text-hu-blue-secondary"
            >
                {children}
            </Link>
            {space}
        </>
    );
}