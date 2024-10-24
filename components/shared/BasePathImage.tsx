import Image from "next/image";
import React, { forwardRef } from "react";

export default forwardRef<HTMLImageElement, {
    src: string,
    className?: string,
    width?: number,
    height?: number,
    fill?: boolean
    alt: string,
    priority?: boolean,
    draggable?: boolean,
}>(function BasePathImage({ src, className, width, height, alt, priority, draggable, fill }, ref) {
    return (
        <Image
            className={className}
            src={(process.env.NODE_ENV === "development" ? "" : process.env.BASEPATH) + src}
            width={width}
            height={height}
            fill={fill}
            alt={alt}
            draggable={draggable}
            priority={priority}
            ref={ref}
        />
    );
});