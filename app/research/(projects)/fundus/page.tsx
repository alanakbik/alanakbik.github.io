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
    title: "Fundus - Alan Akbik",
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
            <H2>Fundus</H2>
            <P>
                <InlineLink href="https://aclanthology.org/2024.acl-demos.29/" target="_blank">Fundus</InlineLink>
                is a library for crawling and parsing online news. With a few lines of code, you can crawl
                millions of news articles to build a big corpus for text analysis or training models!
            </P>
            <BlockImage src="/fundus-article.png" alt="An example news article parsed with Fundus"/>
            <P>
                Each crawled article is parsed such that we identify (1) its title, (2) its authors, (3) its main
                text body with its paragraph structure and (4) its images and their captions. This allows you to directly
                extract the article plain text or other features that you need in your NLP pipeline!
            </P>
            <P>
                Here is an example code snippet to crawl two articles from US-based publishers:
            </P>
            <BlockImage src="/fundus-snippet.png" alt="Example code for crawling two articles"/>
            <P>
                Fundus is at its core rule-based, with bespoke parsers for each supported online news source.
                Because of this, Fundus is able to better extract plain text than other libraries.
                Check out this comparative evaluations:
            </P>
            <Table data={
                [
                    ["Scraper", "Precision", "Recall", 	"F1-Score", "Evaluated Version"],
                    ["Fundus", <><b>99.89±0.57</b></>, "96.75±12.7", <><b>97.69±9.75</b></>, "0.4.1"],
                    ["Trafilatura", "93.91±12.89", <><b>96.85±15.69</b></>, "93.62±16.73", "1.12.0"],
                    ["news-please", "97.95±10.08", "91.89±16.15", "93.39±14.52", "1.6.13"],
                    ["BTE", "81.09±19.41", "98.23±8.61", "87.14±15.48", "/"],
                    ["jusText", "86.51±18.92", "90.23±20.61", "86.96±19.76", "3.0.1"],
                    ["BoilerNet", "85.96±18.55", "91.21±19.15", "86.52±18.03", "/"],
                    ["Boilerpipe", "82.89±20.65", "82.11±29.99", "79.90±25.86", "1.3.0"],
                ]
            }/>
            <P>
                Check out our publication for more details:
            </P>
            <P>
                <InlineLink href="https://aclanthology.org/2024.acl-demos.29/" target="_blank">Fundus: A Simple-to-Use News Scraper Optimized for High Quality Extractions.</InlineLink>
                Max Dallabetta, Conrad Dobberstein, Adrian Breiding and Alan Akbik.
                Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 3: System Demonstrations), ACL 2024.
            </P>
        </>
    );
}