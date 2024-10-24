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
        title: "The Flair NLP Framework",
        image: "/test-image.jpg",
        imageAlt: "A man holding a flare",
        introductoryText: <>
            My group maintains and develops <InlineLink href="https://github.com/flairNLP/flair">Flair</InlineLink>,
            an open source framework for state-of-the-art NLP. Flair is an official part of the
            <InlineLink href="https://pytorch.org/ecosystem/">PyTorch ecosystem</InlineLink> and to-date is used in
            hundreds of industrial and academic projects. Together with the open source
            community and Zalando Research, my group is are actively developing Flair - and invite you to join us!
        </>,
        githubRepoIdentifier: "flairNLP/flair",
        categories: ["Featured", "Libraries"],
        uriComponent: "flair",
    },
];

export default Research;