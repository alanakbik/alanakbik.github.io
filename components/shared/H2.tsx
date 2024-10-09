import React, { type ReactNode } from "react";

export default function H1({ children, className }: {
    children: ReactNode,
    className?: string
}) {
    return (
        <h2 className={"text-xl sm:text-2xl text-hu-blue-primary " + (className ? className : "")}>
            {children}
        </h2>
    );
}