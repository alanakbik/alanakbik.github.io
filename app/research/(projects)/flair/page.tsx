import React from "react";

import BlockImage from "@/components/shared/BlockImage";
import H2 from "@/components/shared/H2";
import InlineLink from "@/components/shared/InlineLink";
import P from "@/components/shared/P";

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
            <H2>Tagging Text with Flair</H2>
            <P>
                Flair implements state-of-the-art approaches for various NLP tasks such as (1) sentiment analysis,
                (2) named entity recognition (NER), (3) part-of-speech tagging (PoS), (4) entity linking and many others.
                With a few lines of code, you can load one of our pre-trained models and apply it to your text!
            </P>

            <P>
                For instance, our 18-class entity tagger can detect entities such as person names, dates, organizations,
                place names, and many others:
            </P>
            <BlockImage src="/flair-ontonotes.png" alt="Text tagged with our 18-class entity tagger"/>
            <P>
                Flair supports tagging of text in many languages. In fact, many models are multilingual, allowing you
                to input text in any language.
            </P>
            <H2>Biomedical Models</H2>
            <P>
                Flair also includes the HunFlair family of models that allow you to tag and link biomedical text data.
                This allows you to detect the names of genes, diseases, chemicals and link them to
                normalized identifiers in a knowledge base:
            </P>
            <BlockImage src="/hunflair.png" alt="Text tagged with our biomedical entity tagger"/>
            <P>
                For instance, in the above example, &quot;autism&quot; is detected as a disease name and linked to the term
                &quot;Autism Disorder&quot; in a standardized knowledge base. &quot;Mice&quot; is detected a a species name and linked to
                the entry &quot;Mus Musculus&quot;.
            </P>

            <H2>Tutorials and Getting Started</H2>
            <P>
                The best way to get started with Flair is to check out our
                <InlineLink href="https://flairnlp.github.io/docs/category/tutorial-2-training-models" target="_blank">tutorials</InlineLink>.
            </P>
            <P>
                Our tutorial explain how to apply NLP models to your data, and even how to train your own models.
                Since Flair was designed to be simple to use, the tutorials should be quick to complete.
            </P>

            <H2>Research Behind Flair</H2>
            <P>
                Flair is my group&apos;s main vehicle for making our NLP research publicly available. Some important papers
                include:
            </P>

            <P>
                <InlineLink href="https://aclanthology.org/C18-1139/" target="_blank">Contextual String Embeddings for Sequence Labeling
                </InlineLink>. <i>Alan Akbik, Duncan Blythe and Roland Vollgraf</i>. 27th International Conference on Computational Linguistics, COLING 2018.
            </P>

            <P>
                <InlineLink href="https://arxiv.org/abs/2011.06993" target="_blank">FLERT: Document-Level Features for Named Entity Recognition
                </InlineLink>. <i>Alan Akbik and Stefan Schweter</i>. arXiv 2020.
            </P>

            <P>
                <InlineLink href="https://arxiv.org/abs/2011.06993" target="_blank">HunFlair2 in a cross-corpus evaluation of biomedical named entity recognition and normalization tools
                </InlineLink>. <i>Mario Sänger, Samuele Garda, Xing David Wang, Leon Weber-Genzel, Pia Droop, Benedikt Fuchs, Alan Akbik, Ulf Leser</i>. Bioinformatics 2024.
            </P>

        </>
    );
}