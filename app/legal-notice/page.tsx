import React from "react";

import H1 from "@/components/shared/H1";
import P from "@/components/shared/P";
import UL from "@/components/shared/UL";
import Wrapper from "@/components/Wrapper";

export default function Page() {
    return (
        <Wrapper>
            <div className="min-h-dvh py-[calc(var(--header-height)*2)]">
                <H1>Legal Notice</H1>
                <P>
                    This webite is maintained by:
                </P>
                <P>
                    <UL>
                    <li> Alan Akbik </li>
                    <li> Humboldt-Universität zu Berlin </li>
                    <li> Institut für Informatik / Lehrstuhl Maschinelles Lernen </li>
                    <li> Unter den Linden 6 </li>
                    <li> 10099 Berlin </li>
                    <li> Germany </li>
                    <li> mail: alan.akbik@hu-berlin.de </li>
                    </UL>
                </P>
            </div>
        </Wrapper>
    );
}
