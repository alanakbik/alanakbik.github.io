import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaGoogleScholar, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

import ScrollDownButton from "@/components/routes/chair/ScrollDownButton";
import BlockLink from "@/components/shared/BlockLink";
import H1 from "@/components/shared/H1";
import H2 from "@/components/shared/H2";
import WrapperLarge from "@/components/WrapperLarge";
import { Introduction, People } from "@/content/Chair";
import type { Person, ResearcherCategory } from "@/content/types";

function PeopleCard({ person }: { person: Person }) {
    return (
        <div className="mt-12 flex items-center gap-6">
            <div className="relative size-32 overflow-hidden rounded-full">
                <Image src={"/alanakbik.github.io" + (person?.image ?? "/people/unknown.svg")} fill className="select-none object-cover" draggable={false} alt=""/>
            </div>
            <div>
                <h3 className="text-xl text-hu-blue-primary">{person.name}</h3>
                <span className="text-hu-blue-secondary">{person.title}</span>
                <ul className="mt-1 flex gap-3">
                    {person.gitHubLink && (
                        <li>
                            <Link href={person.gitHubLink} target="_blank" className="group">
                                <FaGithub
                                    className="size-5 text-hu-blue-primary transition-transform group-hover:scale-125"/>
                            </Link>
                        </li>
                    )}
                    {person.googleScholarLink && (
                        <li>
                            <Link href={person.googleScholarLink} target="_blank" className="group">
                                <FaGoogleScholar
                                    className="size-5 text-hu-blue-primary transition-transform group-hover:scale-125"/>
                            </Link>
                        </li>
                    )}
                    {person.emailAddress && (
                        <li>
                            <Link href={"mailto:" + person.emailAddress} target="_blank" className="group">
                                <IoMdMail
                                    className="size-5 text-hu-blue-primary transition-transform group-hover:scale-125"/>
                            </Link>
                        </li>
                    )}
                    {person.linkedInLink && (
                        <li>
                            <Link href={person.linkedInLink} className="group">
                                <FaLinkedin
                                    className="size-5 text-hu-blue-primary transition-transform group-hover:scale-125"/>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default function Page() {
    const people = new Map<ResearcherCategory, Person[]>();
    for (const person of People) {
        const mapItem = people.get(person.category);
        if (mapItem) mapItem.push(person);
        else people.set(person.category, [person]);
    }
    const sections = people.keys().toArray().map((x, i) => {
        return (
            <>
                <section className="mt-20" key={i}>
                    <H2>{x}</H2>
                    <div className="grid grid-cols-2 gap-x-8">
                        {people.get(x)?.map((y, j) => <PeopleCard person={y} key={j}/>)}
                    </div>
                </section>
                {i < people.size - 1 && <hr className="my-16 h-[3px] bg-hu-blue-primary"/>}
            </>
        );
    });

    return (
        <div>
            <div
                role="img"
                aria-hidden="true"
                className="h-dvh w-full bg-hu-blue-primary bg-[url('/alanakbik.github.io/group_photo_vertical.webp')] bg-cover
                bg-center bg-no-repeat landscape:bg-[url('/alanakbik.github.io/group_photo_horizontal.webp')]
                landscape:bg-top ultrawide:landscape:bg-[url('/alanakbik.github.io/group_photo_ultrawide.webp')]"
            >
                <ScrollDownButton/>
            </div>
            <WrapperLarge id="chair-main" className="my-20">
                <H1>Chair</H1>
                <p className="pb-4 pt-3">
                    {Introduction}
                </p>
                <BlockLink href="https://www.informatik.hu-berlin.de/en/forschung-en/gebiete/ml-en/ml" target="_blank">
                    Visit our chair
                </BlockLink>
                {sections}
            </WrapperLarge>
        </div>
    );
}
