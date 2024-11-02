import React from "react";

import BlockImage from "@/components/shared/BlockImage";
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
 * like a table or an unordered list, please check these components contain the functionality you need. If so use them
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
                The Zitatsuchmaschine is a search engine for quotes in German online news.
            </P>
            <P>
                <iframe id="quote-frame-78762" src="https://zitatsuchmaschine.informatik.hu-berlin.de/embed/78762"
                        style="display: block; width: 100%; height: 450px; border: 1px black solid; border-radius: 20px;"></iframe>
                <script>function
                    f(e) {const elem = document.querySelector('#quote-frame-78762'); if (typeof e.data === "number" && e.source === elem.contentWindow) elem.style.height = e.data + "px";} window.addEventListener('message',
                    f);
                </script>
            </P>
        </>
    );
}