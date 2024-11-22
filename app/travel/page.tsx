import React from "react";

import BlockImage from "@/components/shared/BlockImage";
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
                    I love backpacking around the world. After completing my dissertation in the spring of 2015,
                    I spent the rest of the year crossing a large part of Asia by land route (that is, only by train,
                    bus, boat, car, and by motorbike - but no flights).
                </P>
                <BlockImage src="/asia-route.png" alt="My route through Asia" height={60}/>
                <P>
                    This trip took me across Russia with the transiberian railway, into the Gobi desert of Mongolia,
                    all across China, into the mountains of Tibet and finally to south east Asia,
                    i.e. Vietnam, Laos, Thailand and Singapore. Check out the map above for a rough indication of my route!
                </P>
            </div>
        </Wrapper>
    );
}
