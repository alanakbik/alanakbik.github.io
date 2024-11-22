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
    title: "NoiseBench - Alan Akbik",
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
            <H2>NoiseBench</H2>
            <P>
                Machine learning (ML) requires labeled training examples. However, in real-world use cases, training data
                is often imperfect. Even well-known, expert-created dataset are known to have a significant percentage
                of incorrect labels. This poses a big challenge: ML models trained over imperfect data typically
                perform significantly worse than models trained over clean data.
            </P>
            <BlockImage src="/noisebench.png" alt="Illustration of LM Pub Quiz"/>
            <P>
                With NoiseBench, we present a new benchmark for evaluating the noise-robustness of different learning
                approaches. Our benchmark focuses on the task of named entity recognition (NER) and includes different
                types of real noise such as:
                <OL>
                    <li>real mistakes by expert labelers</li>
                    <li>mistakes by crowd workers (pictured above)</li>
                    <li>errors from distant and weak supervision</li>
                    <li>errors from LLMs</li>
                </OL>
            </P>

            <P>
                Use NoiseBench to evaluate the robustness of your learning approach to different types of real noise!
            </P>
            <H2>Getting Started</H2>
            <P>
                <OL>
                    <li>Check out our <InlineLink href="https://github.com/elenamer/NoiseBench" target="_blank">github repo</InlineLink>!
                    </li>
                </OL>
            </P>
            <H2>Publications</H2>
            <P>
                <InlineLink href="https://aclanthology.org/2024.emnlp-main.1011/" target="_blank">NoiseBench: Benchmarking the Impact of Real Label Noise on Named Entity Recognition.</InlineLink>
                Elena Merdjanovska, Ansar Aynetdinov and Alan Akbik. EMNLP 2024.
            </P>
        </>
    );
}