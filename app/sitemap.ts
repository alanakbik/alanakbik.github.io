import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://alanakbik.github.io/",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        }, {
            url: "https://alanakbik.github.io/research/",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.9,
        }, {
            url: "https://alanakbik.github.io/research/flair",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        }, {
            url: "https://alanakbik.github.io/research/zitatsuchmaschine",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        }, {
            url: "https://alanakbik.github.io/research/fundus",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        }, {
            url: "https://alanakbik.github.io/research/transformer-ranker",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        }, {
            url: "https://alanakbik.github.io/research/cleanconll",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        }, {
            url: "https://alanakbik.github.io/research/opiniongpt",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        }, {
            url: "https://alanakbik.github.io/research/lm-pub-quiz",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        }, {
            url: "https://alanakbik.github.io/research/noisebench",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        }, {
            url: "https://alanakbik.github.io/research/zelda",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.6,
        }, {
            url: "https://alanakbik.github.io/publications/",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        }, {
            url: "https://alanakbik.github.io/chair/",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        }, {
            url: "https://alanakbik.github.io/travel/",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
    ];
}