import { useFetch } from "anzol";
import Link from "next/link";
import React, { useRef } from "react";
import { CiStar } from "react-icons/ci";

import BasePathImage from "@/components/shared/BasePathImage";
import BlockLink from "@/components/shared/BlockLink";
import H2 from "@/components/shared/H2";
import type { ResearchProject } from "@/content/types";

export default function GalleryEntry({ researchProject }: {
    researchProject: ResearchProject,
}) {
    const { data, ok } = useFetch<{stargazers_count: number}>(
        "https://api.github.com/repos/" + researchProject.githubRepoIdentifier, {
            preFetchCallback: () => {
                return !!researchProject.githubRepoIdentifier;
            },
        },
    );
    const stars = ok && data ? Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1,
    }).format(data.stargazers_count) : undefined;
    const ref = useRef(null);
    const overflowing = ref.current && (ref.current as HTMLElement).scrollHeight > (ref.current as HTMLElement).clientHeight || undefined;
    const gradient = "relative after:absolute after:bg-gradient-to-t from-white via-[rgba(255,255,255,0.75)] "
        + "to-transparent after:w-full after:h-10 after:bottom-0 after:left-0";
    return (
        <div>
            <div className="relative w-full overflow-hidden rounded-xl pb-[66.66%] shadow-gallery">
                <BasePathImage
                    src={researchProject.image}
                    alt={researchProject.imageAlt}
                    draggable={false}
                    className="select-none"
                    style={{
                        objectFit: researchProject?.imageFit ?? "cover",
                    }}
                    fill
                />
            </div>
            <div className="my-2 flex items-center justify-between gap-2 overflow-hidden">
                <H2 className="shrink truncate" title={researchProject.title}>
                    {researchProject.title}
                </H2>
                {stars && (
                    <Link
                        href={`https://github.com/${researchProject.githubRepoIdentifier}/stargazers`}
                        target="_blank"
                        className="shrink-0 text-xl text-hu-blue-secondary -outline-offset-2 transition-colors hover:text-hu-blue-primary"
                    >
                        {stars}
                        <CiStar className="ml-0.5 inline size-6 translate-y-[-0.15rem]"/>
                    </Link>
                )}
            </div>
            <div className={overflowing && gradient}>
                <p className="mb-4 line-clamp-5 leading-5" ref={ref}>
                    {researchProject.introductoryText}
                </p>
            </div>
            <BlockLink href={"/research/" + researchProject.uriComponent} label="Read more about Flair">Read more</BlockLink>
        </div>
    );
}