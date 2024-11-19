import React from "react";

import BlockImage from "@/components/shared/BlockImage";
import H2 from "@/components/shared/H2";
import InlineLink from "@/components/shared/InlineLink";
import P from "@/components/shared/P";
import OL from "@/components/shared/UL";

/**
 * Set the title of the page here which is shown in the browser tab.
 */
export const metadata = {
    title: "TransformerRanker - Alan Akbik",
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
            <H2>TransformerRanker</H2>
            <P>
                The problem: There are (hundreds of) thousands pre-trained language models (LMs) available - but which
                one is the best for your NLP task?
            </P>
            <P>
                The solution: TransformerRanker!
            </P>
            <P>
                TransformerRanker automatically selects the best LM for your task.
                Simply input a 🤗 Dataset and a list of candidate LMs.
                TransformerRanker will then quickly rank them for the task.
            </P>
            <BlockImage src="/transformer-ranker.png" alt="Overview of TransformerRanker"/>
            <P>
                TransformerRanker implements state-of-the-art methods for transferability estimation, so no
                costly fine-tuning of LMs is needed. This makes the library very fast, allowing you to rank dozens of LMs.
            </P>

            <H2>Getting Started</H2>
            <P>
                <OL>
                    <li>Check out the <InlineLink href="https://github.com/flairNLP/transformer-ranker" target="_blank">github
                        page</InlineLink></li>
                    <li>Check out our <InlineLink href="https://github.com/flairNLP/transformer-ranker?tab=readme-ov-file#tutorials" target="_blank">tutorials</InlineLink>!
                    </li>
                </OL>
            </P>

            <H2>Publications</H2>
            <P>
                <InlineLink href="https://arxiv.org/abs/2409.05997/" target="_blank">
                    TransformerRanker: A Tool for Efficiently Finding the Best-Suited Language Models for Downstream Classification Tasks.</InlineLink>
                Lukas Garbas, Max Ploner and Alan Akbik.
            </P>
            <P>
                <InlineLink href="https://aclanthology.org/2024.findings-acl.757/" target="_blank">
                    Choose Your Transformer: Improved Transferability Estimation of Transformer Models on Classification Tasks.</InlineLink>
                Lukas Garbas, Max Ploner and Alan Akbik. ACL 2024.
            </P>
        </>
    );
}