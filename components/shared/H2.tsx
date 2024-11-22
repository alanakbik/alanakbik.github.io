import React, { type ReactNode } from "react";

export default function H1({ children, className, title }: {
    children: ReactNode,
    className?: string,
    title?: string,
}) {
    return (
        <h2 className={"text-xl sm:text-2xl text-hu-blue-primary " + (className ? className : "")} title={title}>
            {children}
        </h2>
    );
}