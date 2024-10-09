import Image from "next/image";
import React from "react";

export default function BasePathImage({ src, className, width, height, alt, priority, draggable }: {
    src: string,
    className?: string,
    width: number,
    height: number,
    alt: string,
    priority?: boolean,
    draggable?: boolean,
}) {
    return (
        <Image
            className={className}
            src={(process.env.NODE_ENV === "development" ? "" : process.env.BASEPATH) + src}
            width={width}
            height={height}
            alt={alt}
            unoptimized={true}
            draggable={draggable}
            priority={priority}
        />
    );
}