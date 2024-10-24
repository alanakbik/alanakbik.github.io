import { useFetch } from "anzol";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { CiStar } from "react-icons/ci";

import BlockLink from "@/components/shared/BlockLink";
import H2 from "@/components/shared/H2";

export default function GalleryEntry() {
    const { data, ok } = useFetch<{stargazers_count: number}>("https://api.github.com/repos/konstantin-lukas/intl-currency-input");
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
            <div className="relative w-full overflow-hidden rounded-xl bg-hu-blue-primary pb-[66.66%]">
                <Image
                    src="test-image.jpg"
                    alt="A man holding a flare."
                    draggable={false}
                    className="select-none object-cover"
                    fill
                />
            </div>
            <div className="my-2 flex items-center justify-between">
                <H2>Flair</H2>
                {stars &&
                    <Link
                        href="https://github.com/konstantin-lukas/intl-currency-input"
                        target="_blank"
                        className="text-xl text-hu-blue-secondary transition-colors hover:text-hu-blue-primary      "
                    >
                        {stars}
                        <CiStar className="ml-0.5 inline size-6 translate-y-[-0.15rem]"/>
                    </Link>
                }
            </div>
            <div className={overflowing && gradient}>
                <p className="mb-4 line-clamp-5 leading-5" ref={ref}>
                    My group maintains and develops Flair, an open source framework for state-of-the-art NLP. Flair is
                    an
                    official part of the PyTorch ecosystem and to-date is used in hundreds of industrial and academic
                    projects. Together with the open source community and Zalando Research, my group is are actively
                    developing Flair - and invite you to join us!
                </p>
            </div>
            <BlockLink href="research/flair" label="Read more about Flair">Read more</BlockLink>
        </div>
    );
}