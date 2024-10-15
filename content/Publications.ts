/**
 * This file contains the publications which are displayed on the /publications page
 */
import type { Publication } from "@/content/types";

const Publications: Publication[] = [
    {
        year: 2024,
        conference: "EMNLP 2025",
        title: "TransformerRanker: A Tool for Efficiently Finding the Best-Suited Language Models for Downstream Classification Tasks.",
        authors: "Lukas Garbas, Max Ploner and Alan Akbik.",
        links: [
            { label: "PDF", url: "/" },
        ],
    },
];

export default Publications;