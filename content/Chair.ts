import type { Person } from "@/content/types";

/**
 * This text is shown below the banner image and before the people working at the chair.
 */
export const Introduction: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has " +
    "been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and " +
    "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into " +
    "electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of " +
    "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus " +
    "PageMaker including versions of Lorem Ipsum.";

export const People: Person[] = [
    {
        name: "Alan Akbik",
        title: "Professor of Machine Learning",
        image: "/alan.jpg",
        category: "Principal Researchers",
        gitHubLink: "https://github.com/alanakbik",
        googleScholarLink: "https://scholar.google.com/citations?user=adKmg3IAAAAJ&hl=de",
        emailAddress: "alan.akbik@hu-berlin.de",
        linkedInLink: "https://de.linkedin.com/in/alan-akbik-9859b1122",
    }, {
        name: "Konstantin Lukas",
        title: "Fullstack Developer",
        category: "Student Researchers",
        gitHubLink: "https://github.com/konstantin-lukas",
        emailAddress: "kontakt@konstantinlukas.de",
    },
];