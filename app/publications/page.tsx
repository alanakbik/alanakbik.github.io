import React from "react";

import BlockLink from "@/components/shared/BlockLink";
import H1 from "@/components/shared/H1";
import WrapperLarge from "@/components/WrapperLarge";

function Year({ children }: { children: string }) {
    return (
        <li className="mt-6 first:mt-0">
            <button>{children}</button>
        </li>
    );
}

function Section() {
    return (
        <section className="mt-24">
            <h2 className="text-3xl">2024</h2>
            <ul>
                <Publication/>
                <Publication/>
                <Publication/>
                <Publication/>
                <Publication/>
                <Publication/>
            </ul>
        </section>
    );
}

function Publication() {
    return (
        <li
            className="relative mt-8 pl-6 after:absolute after:left-0 after:top-1/2 after:h-[calc(100%-0.5rem)]
            after:w-[3px] after:translate-y-[calc(-50%+0.2rem)] after:bg-hu-blue-primary after:content-['']"
        >
            <span className="mb-2 block text-2xl text-hu-blue-secondary">
                EMNLP 2024
            </span>
            <span className="block text-hu-blue-primary">
                TransformerRanker: A Tool for Efficiently Finding the Best-Suited Language Models for Downstream Classification Tasks.
            </span>
            <span className="block">
                Lukas Garbas, Max Ploner and Alan Akbik.
            </span>
            <div className="mt-4 flex gap-5">
                <BlockLink href="/">PDF</BlockLink>
                <BlockLink href="/">Cite</BlockLink>
                <BlockLink href="/">Code</BlockLink>
            </div>
        </li>
    );
}

export default function Page() {
    return (
        <WrapperLarge className="flex pt-[calc(var(--header-height)*2)]">
            <aside className="mr-24 text-3xl text-neutral-400">
                <ul>
                    <Year key={0}>2024</Year>
                    <Year key={1}>2023</Year>
                    <Year key={2}>2022</Year>
                    <Year key={3}>2021</Year>
                </ul>
            </aside>
            <div>
                <H1>Publications</H1>
                <Section/>
            </div>
        </WrapperLarge>
    );
}
