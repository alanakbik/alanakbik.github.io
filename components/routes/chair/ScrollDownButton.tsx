"use client";

import React from "react";
import { FaAnglesDown } from "react-icons/fa6";

export default function ScrollDownButton() {
    return (
        <button
            className="group absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center text-white desktop:bottom-6"
            onClick={() => document.getElementById("chair-main")?.scrollIntoView({ behavior: "smooth" })}
        >
            <FaAnglesDown className="mr-2 size-6 text-white transition-transform group-hover:translate-y-2 desktop:size-8"/>
            <span className="text-lg transition-transform group-hover:translate-y-2">Get to know us</span>
        </button>
    );
}