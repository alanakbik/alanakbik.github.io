import React from "react";

import InlineLink from "@/components/shared/InlineLink";
import type { ResearchProject } from "@/content/types";

/**
 * This text is shown below the heading.
 */
export const Introduction: string =
    "My research focuses on efficient and practical machine learning for NLP.\n" +
    "Main research areas include:\n" +
    "(1) Resource-efficient training and adaptation of large language models (LLMs).\n" +
    "(2) Developing state-of-the-art approaches for information extraction (IE) from text.\n" +
    "My group particularly likes to develop tangible research output in the form of open source libraries, publicly available datasets and online platforms. \n" +
    "Check out some highlighted research output below!";

/**
 * This list contains the information to be displayed on /research. To create a new project, create a directory inside
 * @/app/research/(project)/{project}. Replace {project} with the url you want to give your project page. Use the
 * exact same string {project} in the "uriComponent" field in the ResearchProject array below. It is
 * recommended to only use lowercase ascii letters (a-z) and ascii hyphens. Inside the newly created directory, create
 * a file called page.tsx. This file contains free form content for your project. You don't need to add the title or
 * the introductory text as these will be inserted automatically. The title is inserted as an H1, so make sure you use
 * an H2 for the next heading you insert.
 */
const Research: ResearchProject[] = [
    {
        title: "Flair NLP",
        image: "/flair_logo_2020.svg",
        imagePadding: 2.5,
        imageFit: "contain",
        introductoryText: <>
            We develop <InlineLink href="https://github.com/flairNLP/flair">Flair</InlineLink>, a very popular library
            for state-of-the-art NLP. It is used in thousands of industrial, academic and open source
            projects.
        </>,
        githubRepoIdentifier: "flairNLP/flair",
        categories: ["Featured", "Libraries"],
        uriComponent: "flair",
    },
    {
        title: "Zitatsuchmaschine",
        image: "/zitatsuchmaschine_logo.svg",
        imageFit: "contain",
        imagePadding: 2,
        introductoryText: <>
            Our German-language <InlineLink href="https://zitatsuchmaschine.informatik.hu-berlin.de/">search engine for quotes</InlineLink>!
        </>,
        categories: ["Featured", "Applications"],
        uriComponent: "zitatsuchmaschine",
    },
    {
        title: "Fundus",
        image: "/logo_lightmode_without_font_with_clear_space.png",
        imageFit: "contain",
        introductoryText: <>
            Need to crawl online news? With <InlineLink href="https://github.com/flairNLP/fundus">Fundus</InlineLink>,
            you can crawl millions of pages of online news with just a few lines of code!
        </>,
        githubRepoIdentifier: "flairNLP/fundus",
        categories: ["Featured", "Libraries"],
        uriComponent: "fundus",
    },
    {
        title: "TransformerRanker",
        image: "transformer-ranker.png",
        githubRepoIdentifier: "flairNLP/transformer-ranker",
        imageFit: "contain",
        imagePadding: 1,
        introductoryText: <>
            <InlineLink href="https://github.com/flairNLP/transformer-ranker">TransformerRanker</InlineLink> automatically finds the best-suited LM for your NLP task!
        </>,
        categories: ["Libraries", "Featured"],
        uriComponent: "transformer-ranker",
    },
    {
        title: "CleanCoNLL",
        image: "/CleanCoNLL_example_sentence.jpg",
        imageFit: "contain",
        imagePadding: 2,
        introductoryText: <>
            <InlineLink href="https://github.com/flairNLP/cleanCoNLL">CleanCoNLL</InlineLink> is a nearly noise-free dataset for named entity recognition (NER). Use it to train and evaluate
            your NER models!
        </>,
        githubRepoIdentifier: "flairNLP/cleanCoNLL",
        categories: ["Featured", "Datasets"],
        uriComponent: "cleanconll",
    },
    {
        title: "OpinionGPT",
        image: "/opiniongpt.png",
        imageFit: "contain",
        imagePadding: 1,
        introductoryText: <>
            <InlineLink href="https://opiniongpt.informatik.hu-berlin.de/">OpinionGPT</InlineLink> is a ChatGPT-style model trained specifically to be biased and opinionated!
        </>,
        categories: ["Featured", "Applications"],
        uriComponent: "opiniongpt",
    },
    {
        title: "LM Pub Quiz",
        image: "/BEAR-probe.svg",
        githubRepoIdentifier: "lm-pub-quiz/lm-pub-quiz",
        imageFit: "none",
        imagePadding: 1,
        introductoryText: <>
            Measure and <InlineLink href="https://lm-pub-quiz.github.io/">compare the factual knowledge</InlineLink> of language models!
        </>,
        categories: ["Libraries", "Featured"],
        uriComponent: "lm-pub-quiz",
    },
    {
        title: "NoiseBench",
        image: "/noisebench.png",
        imageFit: "contain",
        githubRepoIdentifier: "elenamer/NoiseBench",
        imagePadding: 1,
        introductoryText: <>
            <InlineLink href="https://github.com/elenamer/NoiseBench">NoiseBench</InlineLink> is a benchmark of label
            noise. Use it to determine the robustness of your learning approach!
        </>,
        categories: ["Datasets", "Featured"],
        uriComponent: "noisebench",
    },
    {
        title: "Zelda",
        image: "/people/unknown.svg",
        imageFit: "contain",
        imagePadding: 1,
        githubRepoIdentifier: "flairNLP/zelda",
        introductoryText: <>
            <InlineLink href="https://github.com/elenamer/NoiseBench">Zelda</InlineLink> is a benchmark for large-scale
            entity linking models!
        </>,
        categories: ["Datasets"],
        uriComponent: "zelda",
    },
];

export default Research;