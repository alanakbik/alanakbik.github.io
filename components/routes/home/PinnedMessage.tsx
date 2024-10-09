import React from "react";
import { BsPinAngle } from "react-icons/bs";

import H2 from "@/components/shared/H2";

export default function PinnedMessage({ title, children }: {
    title: string,
    children: React.ReactNode,
}) {
    return (
        <div
            className="overflow-hidden rounded-xl border-3 border-hu-blue-primary bg-gradient-to-b from-hu-blue-primary
            via-hu-blue-primary via-[2rem] to-white to-[2rem]"
        >
            <div className="relative flex bg-hu-blue-primary px-4 pb-3 pt-2 sm:px-8 md:px-16">
                <BsPinAngle className="absolute right-0 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 text-white sm:size-8 md:left-[2.125rem] md:right-auto"/>
                <span className="text-xl text-white sm:text-2xl">Pinned Message</span>
            </div>
            <div className="px-4 pb-4 pt-3 sm:px-8 md:px-16">
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