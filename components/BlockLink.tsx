import Link from "next/link";
import React from "react";

export default function BlockLink({ href, children, className }: {
    href: string,
    children: string,
    className?: string
}) {
    return (
        <Link href={href} className={"block-link " + (className ?? "")}>
            <span>
                {children}
            </span>
        </Link>
    );
}
