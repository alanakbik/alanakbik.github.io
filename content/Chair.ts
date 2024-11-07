import type { Person } from "@/content/types";

/**
 * This text is shown below the banner image and before the people working at the chair.
 */
export const Introduction: string = "Below is a list of my current PhD students and research assistants at the Chair of Machine Learning of the HU Berlin, plus our alumni.";

export const People: Person[] = [
    {
        name: "Alan Akbik",
        title: "Professor of Machine Learning",
        image: "/people/alan.jpg",
        category: "Head of Lab",
        gitHubLink: "https://github.com/alanakbik",
        googleScholarLink: "https://scholar.google.com/citations?user=adKmg3IAAAAJ&hl=de",
        emailAddress: "alan.akbik@hu-berlin.de",
        linkedInLink: "https://de.linkedin.com/in/alan-akbik-9859b1122",
    }, {
        name: "Jonas Golde",
        title: "PhD Student",
        image: "/people/jonas.jpg",
        category: "Research Scientists",
    }, {
        name: "Susanna Rücker",
        title: "PhD Student",
        image: "/people/susanna.jpg",
        category: "Research Scientists",
    }, {
        name: "Max Ploner",
        title: "PhD Student",
        category: "Research Scientists",
    }, {
        name: "Elena Merdjanovska",
        title: "PhD Student",
        category: "Research Scientists",
    }, {
        name: "Patrick Haller",
        title: "PhD Student",
        category: "Research Scientists",
    }, {
        name: "Franziska Weeber",
        title: "Guest Researcher",
        image: "/people/franzi.jpg",
        category: "Research Scientists",
    }, {
        name: "Olia Toporkov",
        title: "Guest Researcher",
        category: "Research Scientists",
    }, {
        name: "Ansar Aynetdinov",
        title: "PhD Student",
        category: "Research Scientists",
    }, {
        name: "Konstantin Lukas",
        title: "Fullstack Developer",
        category: "Student Researchers",
        gitHubLink: "https://github.com/konstantin-lukas",
        emailAddress: "kontakt@konstantinlukas.de",
    }, {
        name: "Sebastian Pohl",
        title: "Research Assistant",
        category: "Student Researchers",
    }, {
        name: "Max Dallabetta",
        title: "Research Assistant",
        category: "Student Researchers",
    }, {
        name: "Conrad Dobberstein",
        title: "Research Assistant",
        category: "Student Researchers",
    }, {
        name: "Lukas Garbas",
        title: "Research Assistant",
        category: "Student Researchers",
    }, {
        name: "Teresa Löffelhardt",
        title: "Research Assistant",
        category: "Student Researchers",
    }, {
        name: "Adrian Breiding",
        title: "Research Assistant",
        category: "Student Researchers",
        gitHubLink: "https://github.com/addie9800",
    }
];