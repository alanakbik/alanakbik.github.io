import Image from "next/image";
import type { CSSProperties } from "react";
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
    style?: CSSProperties,
}>(function BasePathImage({ src, className, width, height, alt, priority, draggable, fill, style }, ref) {
    return (
        <Image
            className={className}
            src={src}
            width={width}
            height={height}
            fill={fill}
            alt={alt}
            style={style}
            draggable={draggable}
            priority={priority}
            ref={ref}
        />
    );
});