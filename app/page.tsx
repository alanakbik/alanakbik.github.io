import Image from "next/image";
import React from "react";
import { FaAnglesDown } from "react-icons/fa6";

import BlockLink from "@/components/BlockLink";
import H1 from "@/components/shared/H1";
import Wrapper from "@/components/Wrapper";

export default function Page() {
    return (
        <Wrapper>
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
                        <Image
                            src="/alan.jpg"
                            alt="A photo of Alan Akbik"
                            priority
                            unoptimized={true}
                            width={500}
                            height={500}
                            className="center-absolute hidden desktop:block"
                        />
                    </div>
                </div>
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 desktop:bottom-8">
                    <FaAnglesDown className="size-6 animate-bounce text-hu-blue-primary desktop:size-8"/>
                </button>
            </div>
        </Wrapper>
    );
}
