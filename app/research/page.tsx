import React from "react";

import Gallery from "@/components/routes/research/Gallery";
import H1 from "@/components/shared/H1";
import WrapperLarge from "@/components/WrapperLarge";

export default function Page() {
    return (
        <WrapperLarge className="py-[calc(var(--header-height)*2)]">
            <H1>Research</H1>
            <Gallery></Gallery>
        </WrapperLarge>
    );
}
