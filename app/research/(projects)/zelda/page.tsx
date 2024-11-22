import React from "react";

import H2 from "@/components/shared/H2";
import InlineLink from "@/components/shared/InlineLink";
import P from "@/components/shared/P";
import OL from "@/components/shared/UL";

/**
 * Set the title of the page here which is shown in the browser tab.
 */
export const metadata = {
    title: "Zelda - Alan Akbik",
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
            <H2>Zelda</H2>
            <P>
                ZELDA is a comprehensive benchmark for entity disambiguation (ED).
                You can use it to train and evaluate ED models.
            </P>
            <P>
                It consists of a large training dataset derived from Wikipedia with over 2.6 million entity mentions
                spanning over 822,000 distinct entities. It also contains pre-build candidate lists for all entities.
                For evaluation, we selected 9 different datasets that cover different domains and properties.
            </P>
            <H2>Getting Started</H2>
            <P>
                <OL>
                    <li>Check out the <InlineLink href="https://github.com/flairNLP/zelda" target="_blank">github
                        page</InlineLink></li>
                </OL>
            </P>
            <H2>Publication</H2>
            <P>
                <InlineLink href="https://aclanthology.org/2023.eacl-main.151/ " target="_blank">ZELDA:
                    A Comprehensive Benchmark for Supervised Entity Disambiguation.</InlineLink>
                Marcel Milich and Alan Akbik. EACL 2024.
            </P>
        </>
    );
}