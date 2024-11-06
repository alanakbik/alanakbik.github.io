import React from "react";

import H1 from "@/components/shared/H1";
import P from "@/components/shared/P";
import Wrapper from "@/components/Wrapper";

export default function Page() {
    return (
        <Wrapper>
            <div className="min-h-dvh py-[calc(var(--header-height)*2)]">
                <H1>Privacy Policy</H1>
                <P>
                    Put content here ...
                </P>
            </div>
        </Wrapper>
    );
}
