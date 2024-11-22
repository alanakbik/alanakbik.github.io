import React from "react";

export default function WrapperLarge({ children, className, id }: {
    children: React.ReactNode,
    className?: string,
    id?: string,
}) {
    return (
        <div id={id} className={"mx-auto box-content max-w-screen-xl px-6 sm:px-12 lg:px-16 " + (className ? className : "")}>
            {children}
        </div>
    );
}