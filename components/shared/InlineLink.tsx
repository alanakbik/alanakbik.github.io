import Link from "next/link";
import React, { type ReactNode } from "react";

export default function H1({ children, href, target }: {
    children: ReactNode,
    href: string,
    target?: string
}) {
    return (
        <>
            {" "}
            <Link
                href={href}
                target={target}
                className="inline-link bg-gradient-to-b from-hu-blue-secondary to-hu-blue-secondary text-hu-blue-secondary"
            >
                {children}
            </Link>
            {" "}
        </>
    );
}