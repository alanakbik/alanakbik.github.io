"use client";

import { useEvent } from "anzol";
import React, { useEffect, useMemo, useState } from "react";

function Year({ children, highlighted }: { children: string, highlighted: boolean }) {
    return (
        <li className="mt-6 first:mt-0" style={{ color: highlighted ? "var(--hu-blue-primary)" : undefined }}>
            <button onClick={() => document.getElementById(children)?.scrollIntoView({ behavior: "smooth" })}>
                {children}
            </button>
        </li>
    );
}

export default function Aside() {
    const [scrollY, setScrollY] = useState(0);
    const sectionCount = 8;
    useEffect(() => {
        setScrollY(window.scrollY / (document.body.clientHeight - window.innerHeight));
    }, []);
    const windowTarget = useEvent("scroll", () => setScrollY(window.scrollY / (document.body.clientHeight - window.innerHeight)));
    useEffect(() => windowTarget(window), [windowTarget]);
    const calculatedOffset = useMemo(() => {
        if (typeof window === "undefined") return "0";
        return `translateY(${Math.min(0, (window.innerHeight / 2) + Math.floor(-scrollY * window.innerHeight))}px)`;
    }, [scrollY]);
    return (
        <aside className="top-24 mr-48 text-3xl text-neutral-400">
            <ul
                className="fixed"
                style={{
                    transform: calculatedOffset,
                }}
            >
                <Year highlighted={Math.floor(sectionCount * scrollY) === 0}>2024</Year>
                <Year highlighted={Math.floor(sectionCount * scrollY) === 1}>2023</Year>
                <Year highlighted={Math.floor(sectionCount * scrollY) === 2}>2022</Year>
                <Year highlighted={Math.floor(sectionCount * scrollY) === 3}>2021</Year>
                <Year highlighted={Math.floor(sectionCount * scrollY) === 4}>2020</Year>
                <Year highlighted={Math.floor(sectionCount * scrollY) === 5}>2019</Year>
                <Year highlighted={Math.floor(sectionCount * scrollY) === 6}>2018</Year>
                <Year highlighted={Math.floor(sectionCount * scrollY) >= 7}>2017</Year>
            </ul>
        </aside>
    );
}