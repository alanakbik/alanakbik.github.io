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
    title: "Flair - Alan Akbik",
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
            <H2>Research Behind Flair</H2>
            <P>
                My current research proposes a new approach to address core natural language processing tasks such as
                part-of-speech (PoS) tagging, named entity recognition (NER), sense disambiguation and text
                classification. Our approach leverages character-level neural language modeling to learn powerful,
                contextualized representations of human language from large corpora. The Figure below illustrates
                how it works:
            </P>
            <BlockImage src="/neuralLMtagging.png" alt="The models used to generate Flair embeddings"/>
            <P>
                Here, a sentence (bottom) is input as a character sequence into a bidirectional character language
                model (LM, yellow in Figure) that was pre-trained on extremely large unlabeled text corpora. From this
                LM, we retrieve for each word a contextual embedding by extracting the first and last character cell
                states. This word embedding is then passed into a vanilla BiLSTM-CRF sequence labeler (blue in Figure),
                achieving robust state-of-the-art results on downstream tasks (NER in this example).
            </P>
            <P>
                This simple approach works incredibly well. In fact, it <b>outperforms all previous approaches by a
                    significant margin across many classic NLP tasks</b>. Check out some results below:
            </P>
            <Table data={
                [
                    ["Task", "Dataset", "Our Result", "Previous Best"],
                    ["Named Entity Recognition (English)", "Conll-03", <><b>93.09</b> (F1)</>, "92.22 (Peters et al., 2018)"],
                    ["Named Entity Recognition (English)", "Ontonotes", <><b>89.71</b> (F1)</>, "86.28 (Chiu et al., 2016)"],
                    ["Emerging Entity Detection (English)", "WNUT-17", <><b>50.20</b> (F1)</>, "45.55 (Aguilar et al., 2018)"],
                    ["Named Entity Recognition (German)", "Conll-03", <><b>88.32</b> (F1)</>, "78.76 (Lample et al., 2016)"],
                    ["Named Entity Recognition (German)", "Germeval", <><b>84.65</b> (F1)</>, "79.08 (Hänig et al, 2014)"],
                    ["Part-of-Speech tagging (English)", "WSJ", <><b>97.85</b></>, "97.64 (Choi, 2016)"],
                    ["Chunking (English)", "Conll-2000", <><b>96.72</b> (F1)</>, "96.36 (Peters et al., 2017)"],
                ]
            }/>
            <P>
                Check out the corresponsing publication for more details:
            </P>
            <P>
                <b>Contextual String Embeddings for Sequence Labeling.</b> Alan Akbik, Duncan Blythe and Roland Vollgraf.
                <InlineLink href="/papers/coling2018.pdf" target="_blank">27th International Conference on Computational Linguistics, COLING 2018</InlineLink>.
            </P>
        </>
    );
}