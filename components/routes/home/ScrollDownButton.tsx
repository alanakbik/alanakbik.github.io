"use client";

import React from "react";
import { FaAnglesDown } from "react-icons/fa6";

export default function ScrollDownButton() {
    return (
        <button
            className="absolute bottom-4 left-1/2 -translate-x-1/2 desktop:bottom-8"
            onClick={() => document.getElementById("pinned-messages")?.scrollIntoView({ behavior: "smooth" })}
        >
            <FaAnglesDown className="size-6 animate-bounce text-hu-blue-primary desktop:size-8"/>
        </button>
    );
}