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
    title: "OpinionGPT - Alan Akbik",
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
            <H2>OpinionGPT</H2>
            <P>
                What happens if you tune a language model (LM) only on texts written by politically left-leaning persons?
            </P>
            <P>
                Or only on texts written by right-leaning persons? Only on texts by men, or only on texts by women? Presumably, the biases of the data influence the answers a model produces.
            </P>
            <P>
                With OpinionGPT, we separately tuned 11 different models, each only on text written
                by a specific demographic group (men, women, Germans, Americans, left-leaning, right-leaning, etc.).
                This allows us to compare the answers differently biased models give to any question.
            </P>
            <BlockImage src="/opiniongpt-example.png" alt="Example of OpinionGPT" height={80}/>
            <P>
                We seperately tuned the model on texts written only by persons of each respective bias. In this demo, you can ask questions to our very biased model to get very biased answers!
            </P>
            <H2>Getting Started</H2>
            <P>
                <OL>
                    <li>Check out the <InlineLink href="https://opiniongpt.informatik.hu-berlin.de/" target="_blank">demo
                        page</InlineLink> and try out some questions!</li>
                </OL>
            </P>

            <H2>Publication</H2>
            <P>
                <InlineLink href="https://aclanthology.org/2024.naacl-demo.8/" target="_blank">OpinionGPT: Modelling Explicit Biases in Instruction-Tuned LLMs.</InlineLink>
                Patrick Haller, Ansar Aynetdinov and Alan Akbik. NAACL 2024.
            </P>
        </>
    );
}