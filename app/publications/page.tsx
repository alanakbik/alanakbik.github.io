import React from "react";

import Aside from "@/components/routes/publications/Aside";
import BlockLink from "@/components/shared/BlockLink";
import H1 from "@/components/shared/H1";
import WrapperLarge from "@/components/WrapperLarge";

function Section({ year }: { year: number }) {
    return (
        <section className="mt-24" id={year.toString()}>
            <h2 className="text-3xl">{year}</h2>
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
        <WrapperLarge className="flex py-[calc(var(--header-height)*2)]">
            <Aside/>
            <div>
                <H1>Publications</H1>
                <Section year={2024}/>
                <Section year={2023}/>
                <Section year={2022}/>
                <Section year={2021}/>
                <Section year={2020}/>
                <Section year={2019}/>
                <Section year={2018}/>
                <Section year={2017}/>
            </div>
        </WrapperLarge>
    );
}
