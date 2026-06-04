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
    title: "Boldt - Alan Akbik",
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
            <H2>Boldt</H2>
            <P>
                Boldt is a series of German Language Models trained at HU Berlin. Our overarching goal is to create
                state-of-the-art language models for German - and in the future for other domains - with fewer computational
                and data resources.
            </P>
            <P>
                Boldt was trained using a new paradigm in which we strictly filter available text for German to a
                highest-quality subset and then repeatedly train for many epochs over this high-signal data. We find
                that Boldt outperforms all other state-of-the-art LLMs in the 1B parameter range, including Gemma-3 and
                Llama-3.2:
            </P>
            <BlockImage src="/boldt_1b_evaluation.png" alt="Comparison of Boldt to other models"/>
            <P>
                We also release a suite of modernized German benchmarks to evaluate LLM performance. Our suite fixes
                errors in previous benchmarks to give more accurate readings of LLM abilities.
            </P>
            <H2>To get started:</H2>
            <P>
                <OL>
                    <li>Check out <InlineLink href="https://huggingface.co/Boldt" target="_blank">all Boldt models on Huggingface</InlineLink>!</li>
                    <li>Check our  <InlineLink href="https://arxiv.org/abs/2604.28075" target="_blank">paper</InlineLink> for all details!</li>
                    <li>Check our <InlineLink href="https://huggingface.co/collections/Boldt/german-llm-benchmarks" target="_blank">German benchmarks</InlineLink>!</li>
                </OL>
            </P>
        </>
    );
}