import React from "react";

import BlockImage from "@/components/shared/BlockImage";
import H2 from "@/components/shared/H2";
import InlineLink from "@/components/shared/InlineLink";
import P from "@/components/shared/P";
import Table from "@/components/shared/Table";

/**
 * Set the title of the page here which is shown in the browser tab.
 */
export const metadata = {
    title: "OpinionGPT - Alan Akbik",
};

/**
 * On this page you can insert the content for a project. You don't need to add the information you put inside the
 * array inside @/content/Research.tsx. This will be automatically inserted for you. If you need certain HTML elements
 * like a table or an unordered list, please check these components contain the functionality you need. If so use them
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
            <H2>OpinionGPT</H2>
            <P>
                OpinionGPT is...
            </P>
            <BlockImage src="/CleanCoNLL_example_sentence.jpg" alt="CleanCoNLL example"/>
            <P>
                ...
            </P>
            <P>
                ...
            </P>
            <P>
                Check out our publication for more details:
            </P>
            <P>
                <InlineLink href="https://aclanthology.org/2023.emnlp-main.533.pdf" target="_blank"><b>CleanCoNLL: A Nearly Noise-Free Named Entity Recognition Dataset.</b></InlineLink>
                Susanna Rücker and Alan Akbik.
                Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing, EMNLP 2023.
            </P>
        </>
    );
}