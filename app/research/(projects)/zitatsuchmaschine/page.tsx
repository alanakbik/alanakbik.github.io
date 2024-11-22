import React from "react";

import ZitatsuchmaschineIframe from "@/components/routes/research/ZitatsuchmaschineIframe";
import H2 from "@/components/shared/H2";
import InlineLink from "@/components/shared/InlineLink";
import P from "@/components/shared/P";

/**
 * Set the title of the page here which is shown in the browser tab.
 */
export const metadata = {
    title: "Zitatsuchmaschine - Alan Akbik",
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
            <H2>Zitatsuchmaschine</H2>
            <P>
                <InlineLink href="https://zitatsuchmaschine.informatik.hu-berlin.de/" target="_blank">Zitatsuchmaschine</InlineLink>
                is a search engine for quotes in German online news. You can search for quotes and embed
                them in your website. For instance, check out this quote by William Shatner:
            </P>
            <P>
                <ZitatsuchmaschineIframe/>
            </P>
            <P>
                Each quote has a speaker (in this case &quot;William Shatner&quot;) and at least one source (i.e., the news
                article that reported this quote). Popular quotes are reported across many news outlets and so have many
                sources.
            </P>
            <H2>Browse Quotes</H2>
            <P>
                You can either look at all quotes of a specific person, such as all quotes by <InlineLink href="
https://zitatsuchmaschine.informatik.hu-berlin.de/quotee/William%20Shatner?order=relevance" target="_blank">William Shatner</InlineLink>,
                or search quotes by keywords. For instance, you can get all quotes that mention the word
                &quot;<InlineLink href="https://zitatsuchmaschine.informatik.hu-berlin.de/search/Neuwahlen?in=text,quotee&order=relevance" target="_blank">Neuwahlen</InlineLink>&quot;.
            </P>
            <H2>NLP Research in this Project</H2>
            <P>
                This project utilizes the <InlineLink href="https://github.com/flairNLP/fundus" target="_blank">Fundus</InlineLink>
                library to crawl online news, and the <InlineLink href="https://github.com/flairNLP/flair" target="_blank">Flair</InlineLink>
                library to extract
                quotes and speakers from the crawled articles. Further, we use this project at our chair to test
                new NLP technologies such as entity linking.
            </P>

        </>
    );
}