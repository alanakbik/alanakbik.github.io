import React from "react";

import H2 from "@/components/shared/H2";
import InlineLink from "@/components/shared/InlineLink";
import P from "@/components/shared/P";
import OL from "@/components/shared/UL";

/**
 * Set the title of the page here which is shown in the browser tab.
 */
export const metadata = {
    title: "Büble-LM - Alan Akbik",
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
            <H2>Büble-LM</H2>
            <P>
                BübleLM is a state-of-the-art German language model based on Gemma-2B, adapted using trans-tokenization
                with a custom German SentencePiece tokenizer.
            </P>
            <P>
                Büble significantly outperforms other German LMs like Sauerkraut-2B and LLäMmlein-1B on most
                benchmarks we tried. It was trained with a novel trans-tokenization approach by Pieter Delobelle
                when he was a guest researcher at our chair!
            </P>
            <P>
                More details on this model coming soon!
            </P>
            <H2>Getting Started</H2>
            <P>
                <OL>
                    <li>Try out the <InlineLink href="https://huggingface.co/flair/bueble-lm-2b" target="_blank">model</InlineLink></li>
                    <li>Check the <InlineLink href="https://huggingface.co/flair/bueble-lm-2b#performance" target="_blank">evaluation results</InlineLink></li>
                </OL>
            </P>
        </>
    );
}