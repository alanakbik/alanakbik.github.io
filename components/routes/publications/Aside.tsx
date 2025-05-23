"use client";

import { useEvent, useHasMounted } from "anzol";
import React, { useEffect, useMemo, useState } from "react";

function Year({ children, highlighted }: { children: string, highlighted: boolean }) {
    return (
        <li className="mt-6 first:mt-0" style={{ color: highlighted ? "var(--hu-blue-primary)" : undefined }}>
            <button onClick={() => {
                const element = document.getElementById(children);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop + 1,
                        behavior: "smooth",
                    });
                }
            }}>
                {children}
            </button>
        </li>
    );
}

export default function Aside({ years }: { years: number[] }) {
    const [scrollY, setScrollY] = useState(0);
    const sectionCount = years.length;
    useEffect(() => {
        setScrollY(window.scrollY / (document.body.clientHeight - window.innerHeight));
    }, []);
    const hasMounted = useHasMounted();
    const windowTarget = useEvent("scroll", () => setScrollY(window.scrollY / (document.body.clientHeight - window.innerHeight)));
    useEffect(() => windowTarget(window), [windowTarget]);
    const calculatedOffset = useMemo(() => {
        if (typeof window === "undefined") return "translateY(0rem)";
        return `translateY(${-2 * scrollY * sectionCount}rem)`;
    }, [scrollY, sectionCount]);
    return (
        <aside className="top-24 mr-16 text-xl text-neutral-400 sm:mr-24 sm:text-3xl md:mr-32 lg:mr-48">
            <ul
                className="fixed"
                style={{
                    transform: calculatedOffset,
                }}
            >
                {hasMounted && years.map((year, i) => {
                    let highlighted = Math.floor(sectionCount * scrollY) === i;
                    const element = document.getElementById(year.toString());
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (i === 0) highlighted = rect.height + rect.y > 0;
                        else highlighted = rect.y <= 0 && rect.height + rect.y > 0;
                    }
                    return <Year key={i} highlighted={highlighted}>{year.toString()}</Year>;
                })}
            </ul>
        </aside>
    );
}