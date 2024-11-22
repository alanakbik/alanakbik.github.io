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
    title: "CleanCoNLL - Alan Akbik",
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
            <H2>CleanCoNLL</H2>
            <P>
                The classic CoNLL-03 dataset is arguably the most commonly-used dataset to evaluate named entity
                recognition (NER) approaches. However, prior works found that many labels in this dataset are in fact
                not correct. This makes it impossible to use CoNLL-03 to fairly evaluate NER models.
            </P>
            <P>
                With CleanCoNLL, we present a significantly improved version of CoNLL-03. We semi-automatically corrected
                over 7% of all NER labels in CoNLL-03. The resulting dataset is nearly noise-free.
            </P>
            <BlockImage src="/CleanCoNLL_example_sentence.jpg" alt="CleanCoNLL example"/>
            <P>
                You can use this resource to train and evaluate your state-of-the-art NER model!
            </P>
            <H2>
                Getting Started
            </H2>
            <P>
                <OL>
                    <li>Check out the <InlineLink href="https://github.com/flairNLP/CleanCoNLL" target="_blank">github
                        page</InlineLink></li>
                </OL>
            </P>
            <H2>
                Publication
            </H2>
            <P>
                <InlineLink href="https://aclanthology.org/2023.emnlp-main.533.pdf" target="_blank">CleanCoNLL: A Nearly Noise-Free Named Entity Recognition Dataset.</InlineLink>
                Susanna Rücker and Alan Akbik.
                Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing, EMNLP 2023.
            </P>
        </>
    );
}