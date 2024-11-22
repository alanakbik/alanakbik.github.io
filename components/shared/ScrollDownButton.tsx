"use client";

import type { Property } from "csstype";
import React from "react";
import { FaAnglesDown } from "react-icons/fa6";

export default function ScrollDownButton({ children, color = "white" }: {
    children: React.ReactNode,
    color?: Property.Color,
}) {
    return (
        <button
            className="group absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center rounded-full px-4 py-2
            text-white desktop:bottom-6 portrait:bg-hu-blue-primary"
            style={{ backgroundColor: color === "white" ? undefined : "white" }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
            <FaAnglesDown className="mr-2 size-6 transition-transform desktop:size-8
            portrait:group-hover:transform-none landscape:group-hover:translate-y-2" color={color}/>
            <span style={{ color }} className="text-nowrap text-lg transition-transform portrait:group-hover:transform-none
            landscape:group-hover:translate-y-2">{children}</span>
        </button> 
    );
}