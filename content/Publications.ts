/**
 * This file contains the publications which are displayed on the /publications page.
 * They are automatically grouped by year. Values closer to the beginning of the array will be displayed closer
 * to the top of their group.
 */
import type { Publication } from "@/content/types";

const Publications: Publication[] = [
    {
        year: 2024,
        conference: "EMNLP 2024",
        title: "Less is More: Parameter-Efficient Selection of Intermediate Tasks for Transfer Learning",
        authors: "David Schulte, Felix Hamborg and Alan Akbik",
        links: [
            { label: "PDF", url: "/" },
        ],
    },
];

export default Publications;