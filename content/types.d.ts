import type { Property } from "csstype";
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
    | "NLDL" | "LREC" | "ICIQ" | "IJCNLP" | "iPres" | "GSCL" | "NAACL-HLT" | "WWW" | "BabyLM";

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
export type NewsCategory = "New Paper" | "Paper accepted" | "Senior Area Chair";

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
export type GithubRepoIdentifier = `${string}/${string}`;

export type ResearchCategory = "Featured" | "Libraries" | "Datasets" | "Applications";

export interface ResearchProject {
    /**
     * The name of the project. Used as the heading in both the project gallery and the project page.
     */
    title: string,
    /**
     * The image displayed in the research project gallery. Please put your images inside the /public directory but do
     * not add /public to the image path. All files in /public are served at the project root.
     */
    image: string,
    /**
     * This allows you to control whether the gallery image should cover its container to be contained within.
     * If not specified, defaults to "cover". Use "contain" if you want to show the entire image.
     */
    imageFit?: Property.ObjectFit,
    /**
     * Allows you to set a padding between the image and the frame.
     */
    imagePadding?: number,
    /**
     * The first text shown on the project page right after the title. Also used in the gallery of research projects.
     */
    introductoryText: ReactNode,
    /**
     * Used to display the amount of GitHub stars of the repo and providing a link to it.
     */
    githubRepoIdentifier?: GithubRepoIdentifier,
    /**
     * Used by the filter buttons on the research page to decide which projects to display.
     */
    categories: ResearchCategory[],
    /**
     * All research projects are located under /research/{project}. This is the {project} slug.
     */
    uriComponent: string,
}

export type ResearcherTitle = "PhD Student" | "Professor of Machine Learning" | "Fullstack Developer" | "Guest Researcher" | "Research Assistant" | "Research Engineer";

export type ResearcherCategory = "Head of Lab" | "Research Scientists" | "Student Researchers" | "Alumni" | "Secretary";

export interface Person {
    /**
     * Name of the person.
     */
    name: string,
    /**
     * Title of the person, e.g. Professor of Machine Learning
     */
    title: ResearcherTitle,
    /**
     * Determines in which section the person is displayed
     */
    category: ResearcherCategory,
    /**
     * URL to an image of the person
     */
    image?: string,
    /** Person's GitHub link */
    gitHubLink?: string,
    /** Person's Google Scholar link */
    googleScholarLink?: string,
    /** Person's email Address */
    emailAddress?: string,
    /** Person's linked in page */
    linkedInLink?: string,
}

export interface PinnedMessage {
    title: string,
    content: ReactNode,
}