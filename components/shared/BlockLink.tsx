import Link from "next/link";
import React from "react";

export default function BlockLink({ href, children, className, target }: {
    href: string,
    children: string,
    className?: string,
    target?: string,
}) {
    return (
        <Link href={href} className={"block-link " + (className ?? "")} target={target}>
            <span>
                {children}
            </span>
        </Link>
    );
}
