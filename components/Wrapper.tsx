import React from "react";

export default function Wrapper({ children }: {children: React.ReactNode}) {
    return (
        <div className="mx-auto box-content max-w-screen-xl px-12 lg:px-16">
            {children}
        </div>
    );
}