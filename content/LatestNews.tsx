import type { ReactNode } from "react";
import React from "react";

import InlineLink from "@/components/shared/InlineLink";
import type { PinnedMessage, TimelineEntryData } from "@/content/types";

/**
 * PLEASE READ BEFORE EDITING
 *
 * The data in this file is displayed on the landing page after the banner screen and the pinned messages.
 * String types are as restrictive as possible to avoid inconsistent spellings of the same thing across the site.
 * This also allows us to automatically set the colors of category labels because we can be sure the same categories
 * are consistently spelled the same.
 *
 * If you want to add a new "category" or "conference", you need to extend their types first.
 * All types are defined in content/types.d.ts. Please don't edit the IsoDate type though. Date strings are automatically
 * formatted. The IsoDate type helps make sure date strings are valid.
 *
 * Finally, the content is the text displayed under each date/tag in the latest news timeline. This can just be a string.
 * If you need custom markup like a link, you can instead pass a React fragment with JSX in it. It is recommended
 * to escape HTML entities inside JSX. This linter will prevent the build from succeeding if you don't do this.
 * For instance replace '"' with '&quot;'. If this explanation is too complicated, just have a look at the already existing news.
 *
 * For adding links please only use the InlineLink element defined in @/components/shared/InlineLink.
 *
 * Note: A React fragment is an empty HTML tag: <></>.
 * Note: JSX (or TSX if you're using Typescript) is a syntax extension that allows you to write markup inside JavaScript.
 *
 */

const LatestNews: TimelineEntryData[] = [
    {
        date: "2025-01-25",
        category: "Paper accepted",
        conference: "NAACL 2025",
        content: <>
            Our paper &quot;Familarity: Better Evaluation of Zero-Shot Named Entity Recognition by Quantifying Label Shifts in Synthetic Training Data&quot;
            accepted to <InlineLink href="https://arxiv.org/abs/2412.10121" target="_blank">NAACL 2025</InlineLink> (main conference)!
        </>,
    },
    {
        date: "2024-12-05",
        category: "New Model",
        content: <>
            Announcing 🐤 <InlineLink href="https://huggingface.co/flair/bueble-lm-2b" target="_blank">Büble-LM</InlineLink> 🐤,
            our new state-of-the-art 2 billion parameter language model (LM) for German!
        </>,
    },
    {
        date: "2024-11-26",
        category: "New Project",
        content: <>
            Our German-language <InlineLink href="https://zitatsuchmaschine.informatik.hu-berlin.de/" target="_blank">search engine for quotes</InlineLink> is now online!
        </>,
    },
    {
        date: "2024-11-26",
        category: "New Paper",
        conference: "arXiv 2024",
        content: <>
            Our paper &quot;Don’t Mesh with Me: Generating Constructive Solid Geometry Instead of
            Meshes by Fine-Tuning a Code-Generation LLM&quot;
            now on <InlineLink href="https://arxiv.org/pdf/2411.15279" target="_blank">arXiv</InlineLink>!
        </>,
    },
    {
        date: "2024-10-22",
        category: "Paper accepted",
        conference: "BabyLM 2024",
        content: <>
            Our paper &quot;BabyHGRN: Exploring RNNs for Sample-Efficient Language Modeling&quot; accepted to BabyLM 2024!
        </>,
    },
    {
        date: "2024-09-23",
        category: "Senior Area Chair",
        conference: "NAACL 2025",
        content: <>
            I will be Senior Area Chair for Information Extraction at NAACL 2025!
        </>,
    },
    {
        date: "2024-09-20",
        category: "Paper accepted",
        conference: "EMNLP 2024",
        content: <>
            Our paper &quot;NoiseBench: Benchmarking the Impact of Real Label Noise on Named Entity Recognition&quot;
            accepted to <InlineLink href="https://aclanthology.org/2024.emnlp-main.1011/" target="_blank">EMNLP 2024</InlineLink> (main conference)!
        </>,
    },
    {
        date: "2024-09-20",
        category: "Paper accepted",
        conference: "EMNLP 2024",
        content: <>
            Our paper &quot;Less is More: Parameter-Efficient Selection of Intermediate Tasks for Transfer Learning&quot;
            accepted to <InlineLink href="https://aclanthology.org/2024.emnlp-main.529/" target="_blank">EMNLP 2024</InlineLink> (main conference)!
        </>,
    },
    {
        date: "2024-09-13",
        category: "Paper accepted",
        conference: "Bioinformatics 2024",
        content: <>
            Our paper &quot;HunFlair2
            in a cross-corpus evaluation of named entity recognition and normalization tools&quot;
            accepted to <InlineLink href="https://academic.oup.com/bioinformatics/article/40/10/btae564/7762634?guestAccessKey=b3f76885-762b-4417-ab20-f973a56c83bc&login=false&utm_source=authortollfreelink&utm_campaign=bioinformatics&utm_medium=email" target="_blank">Bioinformatics</InlineLink> 2024!
        </>,
    },
    {
        date: "2024-09-11",
        category: "New Paper",
        conference: "arXiv 2024",
        content: <>
            Our paper &quot;TransformerRanker: A Tool for Efficiently Finding the Best-Suited Language Models
            for Downstream Classification Tasks&quot;
            now on <InlineLink href="https://arxiv.org/abs/2409.05997" target="_blank">arXiv</InlineLink>!
        </>,
    },
    {
        date: "2024-08-28",
        category: "New Paper",
        conference: "arXiv 2024",
        content: <>
            Our paper &quot;Lm-Pub-Quiz: A Comprehensive Framework for Zero-Shot Evaluation of Relational Knowledge
            in Language Models&quot;
            now on <InlineLink href="https://arxiv.org/abs/2408.15729" target="_blank">arXiv</InlineLink>!
        </>,
    },
    {
        date: "2024-07-01",
        category: "New Lab Member",
        content: <>
            Dr. <InlineLink href="https://pieter.ai/" target="_blank">Pieter Delobelle</InlineLink> - expert on Dutch-language LLMs (and beyond) - joins our lab!
        </>,
    },
    {
        date: "2024-07-01",
        category: "Senior Area Chair",
        conference: "ACL 2025",
        content: <>
            I will be Senior Area Chair for Language Modeling at ACL 2025!
        </>,
    },
    {
        date: "2024-06-04",
        category: "Paper accepted",
        conference: "ACL 2024",
        content: <>
            Our demo paper &quot;Fundus: A Simple-to-Use News Scraper Optimized for High Quality Extractions&quot;
            accepted to <InlineLink href="https://aclanthology.org/2024.acl-demos.29.pdf" target="_blank">ACL 2024</InlineLink>!
        </>,
    },
    {
        date: "2024-05-16",
        category: "Paper accepted",
        conference: "ACL 2024",
        content: <>
            Our paper &quot;Choose Your Transformer: Improved Transferability Estimation of Transformer Models on
            Classification Tasks&quot;
            accepted to <InlineLink href="https://aclanthology.org/2024.findings-acl.757/" target="_blank">ACL 2024</InlineLink>!
        </>,
    },
    {
        date: "2024-04-05",
        category: "New Research Grant",
        content: <>
            The Investitionsbank Berlin (IBB) approved a new research grant for a Forschungstransfer project to
            industry partner PIKK Systems!
        </>,
    },
    {
        date: "2024-04-05",
        category: "New Startup Grant",
        content: <>
            The German Federal Ministry for Economic Affairs (BMWK) approved an EXIST startup grant for FactorizeBio!
        </>,
    },
    {
        date: "2024-03-21",
        category: "Paper accepted",
        conference: "NAACL 2024",
        content: <>
            Our demo paper &quot;OpinionGPT: Modelling Explicit Biases in Instruction-Tuned LLMs&quot;
            accepted to <InlineLink href="https://aclanthology.org/2024.naacl-demo.8.pdf/" target="_blank">NAACL 2024</InlineLink>.
            Also check out our <InlineLink href="https://opiniongpt.informatik.hu-berlin.de/" target="_blank">OpinionGPT</InlineLink> demo!
        </>,
    },
    {
        date: "2024-03-13",
        category: "Paper accepted",
        conference: "NAACL 2024",
        content: <>
            Our paper &quot;BEAR: A Unified Framework for Evaluating Relational Knowledge in Causal and Masked Language Models&quot;
            accepted to <InlineLink href="https://aclanthology.org/2024.findings-naacl.155.pdf/" target="_blank">NAACL 2024</InlineLink>!
        </>,
    },
    {
        date: "2024-03-01",
        category: "New Research Grant",
        content: <>
            The German Federal Ministry of Education and Research (BMBF) approved a new research grant for a 3-year project
            together with industry partner dida Datenschmiede!
        </>,
    },
];



export const PinnedMessages: PinnedMessage[] = [
    {
        title: "New library released!",
        content: <>
            Our newest library, <InlineLink href="https://github.com/flairNLP/transformer-ranker" target="_blank">TransformerRanker</InlineLink>,
            automatically determines which language model (LM) will work best for
            your NLP task! No more guesswork when choosing transformers - check it out!
        </>,
    },
];

export default LatestNews;