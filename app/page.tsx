import React from "react";

import PinnedMessage from "@/components/routes/home/PinnedMessage";
import ScrollDownButton from "@/components/routes/home/ScrollDownButton";
import TimelineEntry from "@/components/routes/home/TimelineEntry";
import BasePathImage from "@/components/shared/BasePathImage";
import BlockLink from "@/components/shared/BlockLink";
import H1 from "@/components/shared/H1";
import InlineLink from "@/components/shared/InlineLink";
import Wrapper from "@/components/Wrapper";
import WrapperLarge from "@/components/WrapperLarge";
import TimelineEntries from "@/content/LatestNews";
import { getCategoryColorMap } from "@/utils";

export default function Page() {

    const map = getCategoryColorMap(TimelineEntries);

    return (
        <>
            <WrapperLarge>
                <div className="relative flex h-dvh items-center justify-between desktop:pt-header-height">
                    <div className="desktop:w-3/5">
                        <H1>
                            <span className="block text-xl text-hu-blue-secondary">Prof. Dr.</span>
                            <span className="block">Alan Akbik</span>
                        </H1>
                        <p className="mb-4 mt-2 text-balance leading-5">
                            Hi, I&apos;m a professor of machine learning at Humboldt University of Berlin, specializing
                            in natural language processing (NLP) and leading the development of the Flair NLP framework.
                        </p>
                        <BlockLink href="/publications" className="text-xl">
                            Publications
                        </BlockLink>
                    </div>
                    <div className="hidden h-full w-2/5 shrink items-center pl-8 desktop:flex">
                        <div className="relative aspect-square w-full overflow-hidden rounded-full">
                            <BasePathImage
                                src="/alan.jpg"
                                alt="A photo of Alan Akbik"
                                priority
                                width={500}
                                height={500}
                                draggable={false}
                                className="center-absolute hidden select-none desktop:block"
                            />
                        </div>
                    </div>
                    <ScrollDownButton/>
                </div>
            </WrapperLarge>
            <hr/>
            <Wrapper>
                <section className="py-24 sm:pb-header-height" id="pinned-messages">
                    <PinnedMessage title="New PhD position available">
                        We have a new PhD position available, fully funded for 4 years through the
                        <InlineLink href="https://google.com" target="_blank">HEIBRIDS</InlineLink> programme!
                        Apply here! Deadline is August 23rd!
                    </PinnedMessage>
                </section>
                <section className="mb-32">
                    <div
                        className="relative mb-12 flex sm:mb-header-height sm:justify-center sm:after:absolute sm:after:top-1/2 sm:after:-z-10
                    sm:after:h-[3px] sm:after:w-full sm:after:bg-hu-blue-primary sm:after:content-['']"
                    >
                        <H1 className="bg-white sm:px-12">Latest News</H1>
                    </div>
                    <div>
                        {TimelineEntries.map((e, i) => <TimelineEntry
                            data={e}
                            color={map.get(e.category) ?? "var(--hu-blue-primary)"}
                            key={i}
                        />)}
                    </div>
                </section>
            </Wrapper>
        </>
    );
}
