import type { ReactNode } from "react";

/**
 * This type is used to assert a string matches the ISO date pattern YYYY-MM-DD.
 *
 * Please don't edit this type.
 */
export type IsoDate =`${number}${number}${number}${number}-${number}${number}-${number}${number}`

/**
 * This type contains all legal conference names used on the site. This is more restrictive than a string.
 * This is for your own good because it makes sure, you always spell everything consistently.
 *
 * If you need to add a new one you can extend this type.
 */
export type Conference = "ACL" | "EMNLP" | "NAACL" | "Bioinformatics" | "COLING-LREC" | "EACL" | "ACL-IJCNLP" | "COLING"
    | "NLDL" | "LREC" | "ICIQ" | "IJCNLP" | "iPres" | "GSCL" | "NAACL-HLT" | "WWW";

/**
 * This type enforces a valid conference name to be followed by a year after 2000 (inclusive)
 */
export type ConferenceAndYear = `${Conference} 20${number}${number}`

/**
 * This type contains all categories used in the latest news. This is more restrictive than a string.
 * This is for your own good because it makes sure, you always spell everything consistently.
 *
 * If you need to add a new one you can extend this type.
 */
export type NewsCategory = "New Paper" | "Paper accepted";

export interface TimelineEntryData {
    date: IsoDate,
    category: NewsCategory,
    conference?: ConferenceAndYear,
    /**
     * This is the text displayed below the date and tag. The React node type can accept a string. It's recommended to use
     * a string unless you need to use additional markup like links. The "content" gets put inside a <p> element.
     * Make sure to only use legal elements for the inside of a div (e.g. span, InlineLink).
     */
    content: ReactNode,
}

/**
 * This is the allowed strings for the links below a publication. This type ensures consistent spelling of the same
 * strings and can be extended as needed.
 */
export type PublicationLinkLabel = "PDF" | "Video";

/**
 * This is the information for a single publication delineated by a blue left border on the publications page
 */
export interface Publication {
    year: number,
    conference?: ConferenceAndYear,
    title: string,
    authors: string,
    links: { url: string; label: PublicationLinkLabel }[],
}

/**
 * This represents the unique identifier for a GitHub repo, i.e. account name *slash* repo name, e.g. "flairNLP/flair".
 */
type GithubRepoIdentifier = `${string}/${string}`;

type ResearchCategory = "Featured" | "Libraries" | "Datasets" | "Applications";

export interface ResearchProject {
    /**
     * The name of the project. Used as the heading in both the project gallery and the project page.
     */
    title: string,
    /**
     * The image displayed in the research project gallery
     */
    image: string,
    /**
     * The first text shown on the project page right after the title. Also used in the gallery of research projects.
     */
    introductoryText: ReactNode,
    /**
     * Used to display the amount of GitHub stars of the repo and providing a link to it.
     */
    githubRepoIdentifier: GithubRepoIdentifier,
    /**
     * Used by the filter buttons on the research page to decide which projects to display.
     */
    categories: ResearchCategory[],
}