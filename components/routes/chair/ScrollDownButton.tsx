"use client";

import React from "react";
import { FaAnglesDown } from "react-icons/fa6";

export default function ScrollDownButton() {
    return (
        <button
            className="group absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center rounded-full px-4 py-2
            text-white desktop:bottom-6 portrait:bg-hu-blue-primary"
            onClick={() => document.getElementById("chair-main")?.scrollIntoView({ behavior: "smooth" })}
        >
            <FaAnglesDown className="mr-2 size-6 text-white transition-transform desktop:size-8
            portrait:group-hover:transform-none landscape:group-hover:translate-y-2"/>
            <span className="text-nowrap text-lg transition-transform portrait:group-hover:transform-none
            landscape:group-hover:translate-y-2">Get to know us</span>
        </button>
    );
}