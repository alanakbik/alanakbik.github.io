import React from "react";

import H2 from "@/components/shared/H2";
import P from "@/components/shared/P";

/**
 * Set the title of the page here which is shown in the browser tab.
 */
export const metadata = {
    title: "LM Pub Quiz - Alan Akbik",
};

/**
 * On this page you can insert the content for a project. You don't need to add the information you put inside the
 * array inside @/content/Research.tsx. This will be automatically inserted for you. If you need certain HTML elements
 * like a table or an unordered list, please check whether these components contain the functionality you need. If so use them
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
        <>
            <H2>LM Pub Quiz</H2>
            <P>
                LM Pub Quiz is...
            </P>
        </>
    );
}