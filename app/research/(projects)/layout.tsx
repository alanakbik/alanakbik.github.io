"use client";

import { usePathname } from "next/navigation";
import React from "react";

import BlockLink from "@/components/shared/BlockLink";
import H1 from "@/components/shared/H1";
import Wrapper from "@/components/Wrapper";
import projects from "@/content/Research";

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const pathSegments = pathname.split("/");
    const projectName = pathSegments[pathSegments.length - 1];
    const project = projects.find(p => p.uriComponent === projectName);
    return (
        <Wrapper className="py-[calc(var(--header-height)*2)]">
            <H1>{project?.title}</H1>
            <p className="mb-8 mt-4">{project?.introductoryText}</p>
            {children}
            <div className="my-8 flex justify-center">
                <BlockLink href="/research">More research</BlockLink>
            </div>
        </Wrapper>
    );
}