import Link from "next/link";
import React from "react";

export default function BlockLink({ href, children, className, target, label }: {
    href: string,
    children: string,
    className?: string,
    target?: string,
    label?: string,
}) {
    return (
        <Link href={href} className={"block-link " + (className ?? "")} target={target} aria-label={label}>
            <span>
                {children}
            </span>
        </Link>
    );
}
