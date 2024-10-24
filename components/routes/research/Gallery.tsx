"use client";

import React, { useState } from "react";

import GalleryEntry from "@/components/routes/research/GalleryEntry";
import BlockCheckbox from "@/components/shared/BlockCheckbox";

export default function Gallery() {
    const [checked, setChecked] = useState([true, true, true, true]);
    const update = (e: { target: { checked: boolean } }, i: number) => {
        const copy = [...checked];
        copy[i] = e.target.checked;
        setChecked(copy);
    };
    return (
        <>
            <ul className="mt-6 flex gap-6">
                <li><BlockCheckbox checked={checked[0]} onChange={(e) => update(e, 0)}>Featured</BlockCheckbox></li>
                <li><BlockCheckbox checked={checked[1]} onChange={(e) => update(e, 1)}>Libraries</BlockCheckbox></li>
                <li><BlockCheckbox checked={checked[2]} onChange={(e) => update(e, 2)}>Datasets</BlockCheckbox></li>
                <li><BlockCheckbox checked={checked[3]} onChange={(e) => update(e, 3)}>Applications</BlockCheckbox></li>
            </ul>
            <hr className="my-9 mt-8 h-0.5 bg-hu-blue-primary shadow-none"/>
            <section className="grid grid-cols-3 gap-x-12 gap-y-24">
                <GalleryEntry/>
                <GalleryEntry/>
                <GalleryEntry/>
                <GalleryEntry/>
                <GalleryEntry/>
            </section>
        </>
    );
}