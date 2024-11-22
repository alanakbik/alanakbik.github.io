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
    title: "LM Pub Quiz and the BEAR Probe - Alan Akbik",
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
                We sometimes need to better understand a language model (LM). What kind of knowledge does it contain?
                How does it compare to other LMs?
            </P>
            <P>
                With LM Pub Quiz, we present a new approach for automatically probing LMs for their factual knowledge.
            </P>
            <BlockImage src="/BEAR-probe.svg" alt="Illustration of LM Pub Quiz"/>
            <P>
                LM Pub Quiz uses facts from WikiData, such as that Kampala is the capital of Uganda. For each fact,
                we create plausible detractors, i.e. false statements such as that Thimpu is the capital of Uganda.
                We use LMs to rank sentence expressing a verbalization of the true fact and all detractors. If the
                LM models knowledge well, it should rank the true fact the highest.
            </P>
            <P>
                In all, we pose 6,000 of such knowledge questions to each LM we evaluate. This gives us an idea of
                what type of knowledge they contain, and allows us to compare any LM.
            </P>
            <H2>Getting Started</H2>
            <P>
                <OL>
                    <li>Check out the <InlineLink href="https://lm-pub-quiz.github.io/" target="_blank">LM Pub Quiz page</InlineLink>
                        and our leaderboard of popular LMs!</li>
                    <li>Check out our <InlineLink href="https://github.com/lm-pub-quiz/lm-pub-quiz" target="_blank">github repo</InlineLink>!
                    </li>
                </OL>
            </P>
            <H2>Publications</H2>
            <P>
                <InlineLink href="https://aclanthology.org/2024.findings-naacl.155/" target="_blank">BEAR: A Unified Framework for Evaluating Relational Knowledge in Causal and Masked Language Models.</InlineLink>
                Jacek Wiland, Max Ploner and Alan Akbik. NAACL 2024.
            </P>
            <P>
                <InlineLink href="https://arxiv.org/abs/2408.15729" target="_blank">LM-PUB-QUIZ: A Comprehensive Framework for Zero-Shot Evaluation of Relational Knowledge in Language Models.</InlineLink>
                Max Ploner, Jacek Wiland, Sebastian Pohl and Alan Akbik.
            </P>
        </>
    );
}