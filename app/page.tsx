import React from "react";

import BlockLink from "@/components/BlockLink";
import Wrapper from "@/components/Wrapper";

export default function Page() {
    return (
        <Wrapper>
            <div className="py-24">
                <BlockLink href="/publications">
                    Publications
                </BlockLink>
            </div>
        </Wrapper>
    );
}
