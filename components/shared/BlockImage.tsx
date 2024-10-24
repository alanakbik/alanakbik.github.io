"use client";
import { useClickOutside } from "anzol";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IoCloseCircleOutline } from "react-icons/io5";

import BasePathImage from "@/components/shared/BasePathImage";

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

export default function BlockImage({ src, alt }: { src: string, alt: string }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button className="relative my-3 h-[33dvh] w-full" aria-label="Show image in large" onClick={(e) => {
                e.stopPropagation();
                setOpen(true);
            }}>
                <BasePathImage src={src} fill alt={alt} className="object-contain"/>
            </button>
            {open && createPortal(
                <Lightbox src={src} alt={alt} close={() => setOpen(false)}/>,
                document.body)
            }
        </>
    );
}