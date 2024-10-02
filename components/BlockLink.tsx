import Link from "next/link";
import React from "react";

export default function BlockLink({ href, children }: {href: string, children: string}) {
    return (
        <Link href={href} className="block-link">
            <span>
                {children}
            </span>
        </Link>
    );
}
