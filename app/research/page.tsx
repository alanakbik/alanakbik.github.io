import React from "react";

import Gallery from "@/components/routes/research/Gallery";
import H1 from "@/components/shared/H1";
import P from "@/components/shared/P";
import WrapperLarge from "@/components/WrapperLarge";
import { Introduction } from "@/content/Research";

export default function Page() {
    return (
        <WrapperLarge className="py-[calc(var(--header-height)*2)]">
            <H1 className="mb-2">Research</H1>
            <P>
                {Introduction}
            </P>
            <Gallery/>
        </WrapperLarge>
    );
}
