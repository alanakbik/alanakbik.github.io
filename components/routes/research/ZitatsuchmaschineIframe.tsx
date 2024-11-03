"use client";
import React, { useEffect, useRef } from "react";

export default function ZitatsuchmaschineIframe() {
    const ref = useRef<HTMLIFrameElement>(null);
    useEffect(() => {
        if (ref.current) {
            const f = (e: MessageEvent) => {
                const elem = ref.current;
                if (typeof e.data === "number" && e.source === elem!.contentWindow)
                    elem!.style.height = e.data + "px";
            };
            window.addEventListener("message", f);
            return () => window.removeEventListener("message", f);
        }
    }, []);
    return (
        <iframe
            ref={ref}
            title="A quote from our quote search engine"
            src="https://zitatsuchmaschine.informatik.hu-berlin.de/embed/78762"
            style={{
                display: "block",
                width: " 100%",
                height: "229px",
                border: "1px black solid",
                borderRadius: "20px",
            }}
        />
    );
}