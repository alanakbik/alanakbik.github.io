"use client";
import { useClickOutside } from "anzol";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IoCloseCircleOutline } from "react-icons/io5";

import BasePathImage from "@/components/shared/BasePathImage";
import type { Attribution } from "@/content/types";

function CloseButton({ close }: { close: () => void }) {
    const ref = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        if (ref.current) ref.current.focus();
    }, [ref]);
    return (
        <button
            ref={ref}
            onClick={close}
            aria-label="Close"
            className="absolute left-4 top-4"
        >
            <IoCloseCircleOutline className="size-8 text-hu-blue-primary"/>
        </button>
    );
}

function Lightbox({ src, alt, close }: { src: string, alt: string, close: () => void }) {
    const ref = useClickOutside(close);
    return (
        <div
            aria-modal={true}
            className="fixed left-0 top-0 z-50 flex h-dvh w-dvw cursor-pointer items-center justify-center bg-black/20"
        >
            <CloseButton close={close} />
            <div className="relative size-4/5 cursor-default">
                <BasePathImage src={src} fill alt={alt} className="bg-black object-contain" ref={ref}/>
            </div>
        </div>
    );
}

export default function BlockImage({ src, alt, maxWidth, height, attribution }: {
    src: string,
    alt: string,
    maxWidth?: number,
    height?: number,
    attribution?: Attribution
}) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button
                className="group relative my-4 h-[33dvh] w-full overflow-hidden rounded-xl shadow-gallery"
                aria-label="Show image in large"
                style={{
                    height: `${height ?? 33}dvh`,
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen(true);
                }}>
                <BasePathImage
                    src={src}
                    fill
                    alt={alt}
                    style={{
                        maxWidth: `${maxWidth ??  100}%`,
                    }}
                    className="mx-auto object-contain transition-transform group-hover:scale-105"
                />
            </button>
            {attribution && (
                <div className="mb-4 flex justify-between text-sm">
                    {attribution.imageLink ? (
                        <Link href={attribution.imageLink} target="_blank">
                            <span className="inline-link bg-gradient-to-b from-hu-blue-secondary to-hu-blue-secondary
                            font-medium text-hu-blue-secondary"
                            >
                                {attribution.personName}
                                {attribution.platformName ? " @ " : ""}
                                {attribution.platformName}
                            </span>
                        </Link>
                    ) : (
                        <span>
                            {attribution.personName}
                            {attribution.platformName ? " @ " : ""}
                            {attribution.platformName}
                        </span>
                    )}
                    {attribution.licenseName && (
                        attribution.licenseLink ? (
                            <Link href={attribution.licenseLink}>
                                <span className="inline-link bg-gradient-to-b from-hu-blue-secondary to-hu-blue-secondary
                                    font-medium text-hu-blue-secondary"
                                >
                                    {attribution.licenseName}
                                </span>
                            </Link>
                        ) : (
                            <span>
                                {attribution.licenseName}
                            </span>
                        )
                    )}

                </div>
            )}
            {open && createPortal(
                <Lightbox src={src} alt={alt} close={() => setOpen(false)}/>,
                document.body)
            }
        </>
    );
}