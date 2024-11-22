import React from "react";

import H1 from "@/components/shared/H1";
import H2 from "@/components/shared/H2";

export default function NotFound() {
    return (
        <div className="flex h-dvh w-full flex-col items-center justify-center desktop:pt-header-height">
            <H1>Page not found</H1>
            <H2>Error 404</H2>
        </div>
    );
}