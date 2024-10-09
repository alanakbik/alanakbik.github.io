import React from "react";

import InlineLink from "@/components/shared/InlineLink";
import type { TimelineEntryData } from "@/content/types";

/**
 * PLEASE READ BEFORE EDITING
 *
 * The data in this file is displayed on the landing page after the banner screen and the pinned messages.
 * String types are as restrictive as possible to avoid inconsistent spellings of the same thing across the site.
 * This also allows us to automatically set the colors of category labels because we can be sure the same categories
 * are consistently spelled the same.
 *
 * If you want to add a new "category" or "conference", you need to extend their types first.
 * All types are defined in data/types.d.ts. Please don't edit the IsoDate type though. Date strings are automatically
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
        date: "2024-11-09",
        category: "New Paper",
        conference: "ACL 2025",
        content: <>
            Our paper &quot;TransformerRanker: A Tool for Efficiently Finding the Best-Suited Language Models
            for Downstream Classification Tasks&quot; now on <InlineLink href="https://google.com" target="_blank">arXiv</InlineLink>
        </>,
    }, {
        date: "2024-11-09",
        category: "Paper accepted",
        content: <>
            Our paper &quot;TransformerRanker: A Tool for Efficiently Finding the Best-Suited Language Models
            for Downstream Classification Tasks&quot; now on <InlineLink href="https://google.com" target="_blank">arXiv</InlineLink>
        </>,
    }, {
        date: "2024-11-09",
        category: "New Paper",
        conference: "ACL 2025",
        content: <>
            Our paper &quot;TransformerRanker: A Tool for Efficiently Finding the Best-Suited Language Models
            for Downstream Classification Tasks&quot; now on <InlineLink href="https://google.com" target="_blank">arXiv</InlineLink>
        </>,
    },
];

export default LatestNews;