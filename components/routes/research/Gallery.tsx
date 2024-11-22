"use client";

import React, { useMemo, useState } from "react";
import { GoTriangleDown } from "react-icons/go";

import GalleryEntry from "@/components/routes/research/GalleryEntry";
import BlockRadio from "@/components/shared/BlockRadio";
import research from "@/content/Research";
import type { ResearchCategory } from "@/content/types";

export default function Gallery() {
    const categories: ResearchCategory[] = useMemo(() => ["Featured", "Libraries", "Datasets", "Applications"], []);
    const [checked, setChecked] = useState(categories.map((_, i) => i === 0));
    const checkedCategories = useMemo(() => {
        return categories.filter((_, i) => checked[i]);
    }, [categories, checked]);
    const update = (e: { target: { checked: boolean } }, i: number) => {
        setChecked(categories.map((_, j) => {
            if (i === j) return e.target.checked;
            return false;
        }));
    };
    return (
        <>
            <ul className="mt-6 flex flex-wrap gap-6">
                {categories.map((category, i) => (
                    <li key={i} className="relative">
                        <BlockRadio checked={checked[i]} onChange={(e) => update(e, i)} name="Search space">
                            {category}
                        </BlockRadio>
                        {checked[i] && <GoTriangleDown className="absolute bottom-full left-1/2 -translate-x-1/2 text-hu-blue-primary"/>}
                    </li>
                ))}
            </ul>
            <hr className="my-9 mt-8 h-0.5 bg-hu-blue-primary shadow-none"/>
            <section className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-y-24 xl:grid-cols-3">
                {research
                    .filter(x => x.categories.some(y => checkedCategories.includes(y)))
                    .map((x) => <GalleryEntry key={x.uriComponent} researchProject={x}/>)
                }
            </section>
        </>
    );
}