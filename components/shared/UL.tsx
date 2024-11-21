import type { ReactNode } from "react";
import React from "react";

export default function UL({ children }: {children: ReactNode}) {
    return (
        <ul className="relative my-4 list-disc pl-8 after:absolute after:left-0 after:top-1/2
        after:h-[calc(100%-0.7rem)] after:w-[3px] after:-translate-y-1/2 after:bg-hu-blue-primary
        after:content-[''] [&>li]:mt-1">
            {children}
        </ul>
    );
}