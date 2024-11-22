import type { ReactNode } from "react";
import React from "react";

export default function P({ children }: { children: ReactNode }) {
    return (
        <p className="py-2 [&+h2]:mt-8">
            {children}
        </p>
    );
}