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

export default function Aside({ years }: { years: number[] }) {
    const [scrollY, setScrollY] = useState(0);
    const sectionCount = 8;
    useEffect(() => {
        setScrollY(window.scrollY / (document.body.clientHeight - window.innerHeight));
    }, []);
    const windowTarget = useEvent("scroll", () => setScrollY(window.scrollY / (document.body.clientHeight - window.innerHeight)));
    useEffect(() => windowTarget(window), [windowTarget]);
    const calculatedOffset = useMemo(() => {
        if (typeof window === "undefined") return "translateY(0px)";
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
                {years.map((year, i) => {
                    let highlighted = Math.floor(sectionCount * scrollY) === i;
                    if (i === years.length - 1) highlighted = Math.floor(sectionCount * scrollY) >= i;
                    return <Year key={i} highlighted={highlighted}>{year.toString()}</Year>;
                })}
            </ul>
        </aside>
    );
}