"use client";

import React, { useMemo, useState } from "react";

import GalleryEntry from "@/components/routes/research/GalleryEntry";
import BlockCheckbox from "@/components/shared/BlockCheckbox";
import research from "@/content/Research";
import type { ResearchCategory } from "@/content/types";

export default function Gallery() {
    const categories: ResearchCategory[] = useMemo(() => ["Featured", "Libraries", "Datasets", "Applications"], []);
    const [checked, setChecked] = useState(categories.map(() => true));
    const checkedCategories = useMemo(() => {
        return categories.filter((_, i) => checked[i]);
    }, [categories, checked]);
    const update = (e: { target: { checked: boolean } }, i: number) => {
        const copy = [...checked];
        copy[i] = e.target.checked;
        setChecked(copy);
    };
    return (
        <>
            <ul className="mt-6 flex gap-6">
                {categories.map((category, i) => (
                    <li key={i}><BlockCheckbox checked={checked[i]} onChange={(e) => update(e, i)}>{category}</BlockCheckbox></li>
                ))}
            </ul>
            <hr className="my-9 mt-8 h-0.5 bg-hu-blue-primary shadow-none"/>
            <section className="grid grid-cols-3 gap-x-12 gap-y-24">
                {research
                    .filter(x => x.categories.some(y => checkedCategories.includes(y)))
                    .map((x, i) => <GalleryEntry key={i} researchProject={x}/>)
                }
            </section>
        </>
    );
}