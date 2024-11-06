import React from "react";

import H1 from "@/components/shared/H1";
import P from "@/components/shared/P";
import Wrapper from "@/components/Wrapper";

/**
 * On this page you can insert the content for the travel page. If you need certain HTML elements
 * like a table or an unordered list, please check if these components contain the functionality you need. If so use them
 * instead of the standard HTML element.
 *
 * UnorderedList: <UL/>
 * OrderedList: <OL/>
 * Link: <InlineLink/>
 * Paragraph: <P/>
 * Table: <Table/>
 * Image: <BlockImage/>
 *
 * These components can be imported from @/components/shared.
 */
export default function Page() {
    return (
        <Wrapper>
            <div className="min-h-dvh py-[calc(var(--header-height)*2)]">
                <H1>Travel</H1>
                <P>
                    Put content here ...
                </P>
            </div>
        </Wrapper>
    );
}
