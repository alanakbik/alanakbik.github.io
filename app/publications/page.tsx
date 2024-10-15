import type { Metadata } from "next";
import React from "react";

import Aside from "@/components/routes/publications/Aside";
import BlockLink from "@/components/shared/BlockLink";
import H1 from "@/components/shared/H1";
import WrapperLarge from "@/components/WrapperLarge";
import { parentalLeaveYears } from "@/content/const";
import Publications from "@/content/Publications";
import type { Publication } from "@/content/types";

export const metadata: Metadata = {
    title: "Publications - Alan Akbik",
};

function Section({ year, publications }: { year: number, publications: Publication[] }) {
    return (
        <section className="pt-24" id={year.toString()}>
            <h2 className="text-3xl">
                {year}
                {parentalLeaveYears.includes(year) && <span className="ml-4 text-lg text-neutral-500">(Included Parental Leave)</span>}
            </h2>
            <ul>
                {publications.map((p, i) => <Publication key={i} p={p}/>)}
            </ul>
        </section>
    );
}

function Publication({ p }: { p: Publication }) {
    return (
        <li
            className="relative mt-8 pl-6 after:absolute after:left-0 after:top-1/2 after:h-[calc(100%-0.5rem)]
            after:w-[3px] after:translate-y-[calc(-50%+0.2rem)] after:bg-hu-blue-primary after:content-['']"
        >
            {p?.conference && (
                <span className="mb-2 block text-2xl text-hu-blue-secondary">
                    {p.conference}
                </span>
            )}
            <span className="block text-hu-blue-primary">
                {p.title}
            </span>
            <span className="block">
                {p.authors}
            </span>
            {p.links.length > 0 && (
                <div className="mt-4 flex gap-5">
                    {p.links.map((l, i) => <BlockLink key={i} href={l.url} target="_blank">{l.label}</BlockLink>)}
                </div>
            )}
        </li>
    );
}

export default function Page() {
    const publications = new Map<number, Publication[]>();
    for (const publication of Publications) {
        if (!publications.has(publication.year)) publications.set(publication.year, []);
        publications.get(publication.year)?.push(publication);
    }
    const sections = Array.from(publications.entries()).map(([key, value]) => (
        <Section key={key} year={key} publications={value}/>
    ));
    return (
        <WrapperLarge className="flex py-[calc(var(--header-height)*2)]">
            <Aside years={Array.from(publications.keys())}/>
            <div id="publications">
                <H1>Publications</H1>
                {sections}
            </div>
        </WrapperLarge>
    );
}
