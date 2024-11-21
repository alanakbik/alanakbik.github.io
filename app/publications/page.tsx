import type { Metadata } from "next";
import React from "react";

import Aside from "@/components/routes/publications/Aside";
import BlockLink from "@/components/shared/BlockLink";
import H1 from "@/components/shared/H1";
import WrapperLarge from "@/components/WrapperLarge";
import { parentalLeaveYears } from "@/content/const";
import Publications from "@/content/Publications";
import type { ConferenceAndYear, Publication } from "@/content/types";

export const metadata: Metadata = {
    title: "Publications - Alan Akbik",
};

function Section({ year, publications }: { year: number, publications: (Publication & {index: number})[] }) {
    const conferences = new Map<ConferenceAndYear | "Miscellaneous", (Publication & {index: number})[]>();
    for (const publication of publications) {
        const conf = publication.conference || "Miscellaneous";
        const mapItem = conferences.get(conf);
        if (mapItem) mapItem.push(publication);
        else conferences.set(conf, [publication]);
    }
    const sections = conferences.keys().toArray().sort((a, b) => {
        const smallestIndexA = Math.min(...conferences.get(a)!.map(x => x.index));
        const smallestIndexB = Math.min(...conferences.get(b)!.map(x => x.index));

        if (smallestIndexA < smallestIndexB) return -1;
        if (smallestIndexA > smallestIndexB) return 1;

        return 0;
    }).map((x, i) => {
        return (
            <div key={i}>
                <h3 className="-mb-4 mt-10 block text-2xl text-hu-blue-secondary">
                    {x}
                </h3>
                <ul>
                    {conferences.get(x)!.map((y, j) => <Publication key={j} p={y}/>)}
                </ul>
            </div>
        );
    });
    return (
        <section className="pt-16 sm:pt-24" id={year.toString()}>
            <h2 className="text-3xl">
                {year}
                {parentalLeaveYears.includes(year) && <span className="ml-4 text-lg text-neutral-500">(Included Parental Leave)</span>}
            </h2>
            {sections}
        </section>
    );
}

function Publication({ p }: { p: Publication }) {
    return (
        <li
            className="relative mt-8 pl-4 after:absolute after:left-0 after:top-1/2 after:h-[calc(100%-0.5rem)] after:w-[3px]
            after:translate-y-[calc(-50%+0.2rem)] after:bg-hu-blue-primary after:content-[''] sm:pl-6"
        >
            <span className="block text-hu-blue-primary">
                {p.title}
            </span>
            <span className="block">
                {p.authors}
            </span>
            {p.footnote && <span className="mt-3 inline-block italic">{p.footnote}</span>}
            {p.links.length > 0 && (
                <div className="mt-4 flex gap-5">
                    {p.links.map((l, i) => <BlockLink key={i} href={l.url} target="_blank">{l.label}</BlockLink>)}
                </div>
            )}
        </li>
    );
}

export default function Page() {
    const publications = new Map<number, (Publication & {index: number})[]>();
    for (const publication of Publications.map((x, i) => ({ ...x, index: i }))) {
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
