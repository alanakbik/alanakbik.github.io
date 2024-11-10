import React from "react";

import InlineLink from "@/components/shared/InlineLink";
import type { ResearchProject } from "@/content/types";

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
            Our German-language search engine for quotes!
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
        title: "CleanCoNLL",
        image: "/CleanCoNLL_example_sentence.jpg",
        imageFit: "contain",
        imagePadding: 2,
        introductoryText: <>
            CleanCoNLL is a nearly noise-free dataset for named entity recognition (NER). Use it to train and evaluate
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
            OpinionGPT is ...
        </>,
        categories: ["Featured", "Applications"],
        uriComponent: "opiniongpt",
    },
    {
        title: "LM Pub Quiz",
        image: "/people/unknown.svg",
        imageFit: "contain",
        imagePadding: 1,
        introductoryText: <>
            LM Pub Quiz is ...
        </>,
        categories: ["Libraries", "Featured"],
        uriComponent: "lm-pub-quiz",
    },
    {
        title: "NoiseBench",
        image: "/people/unknown.svg",
        imageFit: "contain",
        imagePadding: 1,
        introductoryText: <>
            NoiseBench is ...
        </>,
        categories: ["Datasets", "Featured"],
        uriComponent: "noisebench",
    },
    {
        title: "Zelda",
        image: "/people/unknown.svg",
        imageFit: "contain",
        imagePadding: 1,
        introductoryText: <>
            Zelda is ...
        </>,
        categories: ["Datasets"],
        uriComponent: "zelda",
    },
    {
        title: "TransformerRanker",
        image: "/people/unknown.svg",
        imageFit: "contain",
        imagePadding: 1,
        introductoryText: <>
            TransformerRanker is ...
        </>,
        categories: ["Libraries"],
        uriComponent: "transformer-ranker",
    },
];

export default Research;