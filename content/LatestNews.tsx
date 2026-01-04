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
        date: "2026-01-04",
        category: "Paper accepted",
        conference: "EACL 2026",
        content: <>
            Our paper &quot;FiNERweb: Datasets and Artifacts for Scalable Multilingual Named Entity Recognition&quot;
            accepted to <InlineLink href="https://2026.eacl.org/" target="_blank">EACL 2026</InlineLink>!
        </>,
    },
    {
        date: "2025-10-18",
        category: "New Research Grant",
        content: <>
            The Investitionsbank Berlin (IBB) approved a new ProFIT research grant for a 3-year research project together
            with industry partner OMQ GmbH! We're hiring again!
        </>,
    },
    {
        date: "2025-10-01",
        category: "New Lab Member",
        content: <>
            We welcome our new PhD student <InlineLink href="https://github.com/Thiggel" target="_blank">Filipe Laitenberger</InlineLink> to the team!
        </>,
    },
    {
        date: "2025-10-01",
        category: "New Lab Member",
        content: <>
            We welcome our new research engineer <InlineLink href="https://github.com/MaxDall" target="_blank">Max Dallabetta</InlineLink> to the team!
        </>,
    },
    {
        date: "2025-09-25",
        category: "New Research Grant",
        content: <>
            The Investitionsbank Berlin (IBB) approved a new research grant for a Forschungstransfer project to
            industry partner Wordliner GmbH!
        </>,
    },
    {
        date: "2025-09-15",
        category: "Paper accepted",
        conference: "BabyLM 2025",
        content: <>
            Our paper &quot;Babies Learn to Look Ahead: Multi-Token Prediction in Small LMs&quot;
            accepted to <InlineLink href="https://2025.emnlp.org/" target="_blank">BabyLM 2025</InlineLink> (EMNLP Workshop)!
        </>,
    },
    {
        date: "2025-09-15",
        category: "Paper accepted",
        conference: "BabyLM 2025",
        content: <>
            Our paper &quot;Sample-Efficient Language Modeling with Linear Attention and Lightweight Enhancements&quot;
            accepted to <InlineLink href="https://2025.emnlp.org/" target="_blank">BabyLM 2025</InlineLink> (EMNLP Workshop)!
        </>,
    },
    {
        date: "2025-08-20",
        category: "Paper accepted",
        conference: "EMNLP 2025",
        content: <>
            Our paper &quot;Improving Online Job Advertisement Analysis via Compositional Entity Extraction&quot;
            accepted to <InlineLink href="https://2025.emnlp.org/" target="_blank">EMNLP 2025</InlineLink> (main conference)!
        </>,
    },
    {
        date: "2025-08-20",
        category: "Paper accepted",
        conference: "EMNLP 2025",
        content: <>
            Our paper &quot;Token-Level Metrics for Detecting Incorrect Gold Annotations in Named Entity Recognition&quot;
            accepted to <InlineLink href="https://2025.emnlp.org/" target="_blank">EMNLP 2025</InlineLink> (findings)!
        </>,
    },
    {
        date: "2025-08-20",
        category: "Paper accepted",
        conference: "EMNLP 2025",
        content: <>
            Our paper &quot;Lemma Dilemma: On Lemma Generation Without Domain- or Language-Specific Training Data&quot;
            accepted to <InlineLink href="https://2025.emnlp.org/" target="_blank">EMNLP 2025</InlineLink> (findings)!
        </>,
    },
    {
        date: "2025-06-22",
        category: "Paper accepted",
        conference: "ACL 2025",
        content: <>
            Our paper &quot;Question Decomposition for Retrieval-Augmented Generation&quot;
            accepted to <InlineLink href="https://2025.aclweb.org/" target="_blank">ACL 2025</InlineLink> (SRW workshop)!
        </>,
    },
    {
        date: "2025-06-11",
        category: "Paper accepted",
        conference: "ACL 2025",
        content: <>
            Our paper &quot;From Data to Knowledge: Evaluating How Efficiently Language Models Learn Facts&quot;
            accepted to <InlineLink href="https://2025.aclweb.org/" target="_blank">ACL 2025</InlineLink> (L2M2 workshop)!
        </>,
    },
    {
        date: "2025-06-11",
        category: "Paper accepted",
        conference: "ACL 2025",
        content: <>
            Our paper &quot;Towards a Principled Evaluation of Knowledge Editors&quot;
            accepted to <InlineLink href="https://2025.aclweb.org/" target="_blank">ACL 2025</InlineLink> (L2M2 workshop)!
        </>,
    },
    {
        date: "2025-05-22",
        category: "Paper accepted",
        conference: "ACL 2025",
        content: <>
            Our paper &quot;Measuring Label Ambiguity in Subjective Tasks using Predictive Uncertainty Estimation&quot;
            accepted to <InlineLink href="https://2025.aclweb.org/" target="_blank">ACL 2025</InlineLink> (LAW workshop)!
        </>,
    },
    {
        date: "2025-05-16",
        category: "Paper accepted",
        conference: "ACL 2025",
        content: <>
            Our paper &quot;Evaluating Design Decisions for Dual Encoder-based Entity Disambiguation&quot;
            accepted to <InlineLink href="https://2025.aclweb.org/" target="_blank">ACL 2025</InlineLink> (main conference)!
        </>,
    },
    {
        date: "2025-05-16",
        category: "Paper accepted",
        conference: "ACL 2025",
        content: <>
            Our paper &quot;Pre-Training Curriculum for Multi-Token Prediction in Language Models&quot;
            accepted to <InlineLink href="https://aclanthology.org/2025.acl-long.1243/" target="_blank">ACL 2025</InlineLink> (main conference)!
        </>,
    },
    {
        date: "2025-05-04",
        category: "Paper accepted",
        conference: "CVPR 2025",
        content: <>
            Our paper &quot;Don't Mesh with Me: Generating Constructive Solid Geometry Instead of Meshes by Fine-Tuning a Code-Generation LLM&quot;
            accepted to <InlineLink href="https://arxiv.org/abs/2411.15279" target="_blank">CVPR 2025</InlineLink> (AI for Content Creation Workshop)!
        </>,
    },
    {
        date: "2025-04-19",
        category: "New Paper",
        conference: "arXiv 2024",
        content: <>
            Our paper &quot;Empirical Evaluation of Knowledge Distillation from Transformers to Subquadratic Language Models&quot;
            now on <InlineLink href="https://arxiv.org/abs/2504.14366" target="_blank">arXiv</InlineLink>!
        </>,
    },
    {
        date: "2025-03-13",
        category: "Paper accepted",
        conference: "ICLR 2025",
        content: <>
            Our paper &quot;MastermindEval: A Simple But Scalable Reasoning Benchmark&quot;
            accepted to <InlineLink href="https://arxiv.org/abs/2503.05891" target="_blank">ICLR 2025</InlineLink> (LLM Reasoning Workshop)!
        </>,
    },
    {
        date: "2025-03-05",
        category: "New Lab Member",
        content: <>
            We welcome our new PhD student <InlineLink href="https://de.linkedin.com/in/piet-wagner" target="_blank">Piet Wagner</InlineLink> to the team!
        </>,
    },
    {
        date: "2025-03-01",
        category: "Paper accepted",
        conference: "NAACL 2025",
        content: <>
            Our paper &quot;TransformerRanker: A Tool for Efficiently Finding the Best-Suited Language Models for Downstream Classification Tasks&quot;
            accepted to <InlineLink href="https://arxiv.org/html/2409.05997v1" target="_blank">NAACL 2025</InlineLink> (system demonstrations)!
        </>,
    },
    {
        date: "2025-03-01",
        category: "Paper accepted",
        conference: "NAACL 2025",
        content: <>
            Our paper &quot;LM-Pub-Quiz: A Comprehensive Framework for Zero-Shot Evaluation of Relational Knowledge in Language Models&quot;
            accepted to <InlineLink href="https://arxiv.org/abs/2408.15729" target="_blank">NAACL 2025</InlineLink> (system demonstrations)!
        </>,
    },
    {
        date: "2025-01-25",
        category: "Paper accepted",
        conference: "NAACL 2025",
        content: <>
            Our paper &quot;Familarity: Better Evaluation of Zero-Shot Named Entity Recognition by Quantifying Label Shifts in Synthetic Training Data&quot;
            accepted to <InlineLink href="https://arxiv.org/abs/2412.10121" target="_blank">NAACL 2025</InlineLink> (main conference)!
        </>,
    }
];



export const PinnedMessages: PinnedMessage[] = [
    {
        title: "External students welcome: Join our Deep Learning and NLP class online!",
        content: <>
            This semester, you can join my "Deep Learning and NLP" course at HU Berlin online.
            Starting October 14th, we go all the way from zero to "NLP hero": from classical NLP to transformers
            and LLMs, plus in-depth into to PyTorch 🔥. External students can enrol <InlineLink href="https://www.hu-berlin.de/en/studies/counselling/leaflets/guest_students" target="_blank">here</InlineLink>!
        </>,
    },
];

export default LatestNews;