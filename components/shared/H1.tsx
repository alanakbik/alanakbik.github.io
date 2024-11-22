import React, { type ReactNode } from "react";

export default function H1({ children, className }: {
    children: ReactNode,
    className?: string
}) {
    return (
        <h1 className={"text-4xl sm:text-5xl text-hu-blue-primary " + (className ? className : "")}>
            {children}
        </h1>
    );
}