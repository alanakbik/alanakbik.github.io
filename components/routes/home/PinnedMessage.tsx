import React from "react";
import { BsPinAngle } from "react-icons/bs";

import H2 from "@/components/shared/H2";

export default function Wrapper({ title, children }: {
    title: string,
    children: React.ReactNode,
}) {
    return (
        <div className="overflow-hidden rounded-xl border-3 border-hu-blue-primary bg-gradient-to-b from-hu-blue-primary via-hu-blue-primary via-[2rem] to-white to-[2rem]">
            <div className="relative bg-hu-blue-primary px-16 pb-3 pt-2">
                <BsPinAngle className="absolute left-[2.125rem] top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 text-white"/>
                <span className="text-2xl text-white">Pinned Message</span>
            </div>
            <div className="px-16 pb-4 pt-3">
                {/* We're using an h2 tag here because we know that it's correctly nested in the heading hierarchy */}
                {/* If you decide to use this component outside the home page, consider the surrounding headings */}
                {/* You may have to replace the h2 with something else like an h3 or a span */}
                <H2 className="mb-2">{title}</H2>
                <p>
                    {children}
                </p>
            </div>
        </div>
    );
}