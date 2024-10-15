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
        links: [],
    }, {
        year: 2024,
        conference: "EMNLP 2024",
        title: "NoiseBench: Benchmarking the Impact of Real Label Noise on Named Entity Recognition",
        authors: "Elena Merdjanovska, Ansar Aynetdinov and Alan Akbik",
        links: [{ label: "PDF", url: "https://arxiv.org/abs/2405.07609" }],
    }, {
        year: 2024,
        title: "TransformerRanker: A Tool for Efficiently Finding the Best-Suited Language Models for Downstream Classification Tasks",
        authors: "Lukas Garbas, Max Ploner and Alan Akbik",
        links: [{ label: "PDF", url: "https://arxiv.org/abs/2409.05997" }],
    }, {
        year: 2024,
        title: "LM-Pub-Quiz: A Comprehensive Framework for Zero-Shot Evaluation of Relational Knowledge in Language Models",
        authors: " Max Ploner, Jacek Wiland, Sebastian Pohl and Alan Akbik",
        links: [{ label: "PDF", url: "https://arxiv.org/abs/2408.15729" }],
    }, {
        year: 2024,
        conference: "ACL 2024",
        title: "Fundus: A Simple-to-Use News Scraper Optimized for High Quality Extractions",
        authors: "Max Dallabetta, Conrad Dobberstein, Adrian Breiding and Alan Akbik",
        links: [{ label: "PDF", url: "https://aclanthology.org/2024.acl-demos.29/" }],
    }, {
        year: 2024,
        conference: "ACL 2024",
        title: "Choose Your Transformer: Improved Transferability Estimation of Transformer Models on Classification Tasks",
        authors: "Lukas Garbaciauskas, Max Ploner and Alan Akbik",
        links: [{ label: "PDF", url: "https://aclanthology.org/2024.findings-acl.757/" }],
    }, {
        year: 2024,
        conference: "NAACL 2024",
        title: "OpinionGPT: Modelling Explicit Biases in Instruction-Tuned LLMs",
        authors: "Patrick Haller, Ansar Aynetdinov and Alan Akbik",
        links: [{ label: "PDF", url: "https://aclanthology.org/2024.naacl-demo.8/" }],
    }, {
        year: 2024,
        conference: "NAACL 2024",
        title: "BEAR: A Unified Framework for Evaluating Relational Knowledge in Causal and Masked Language Models",
        authors: "Jacek Wiland, Max Ploner and Alan Akbik",
        links: [{ label: "PDF", url: "https://aclanthology.org/2024.findings-naacl.155/" }],
    }, {
        year: 2024,
        conference: "Bioinformatics 2024",
        title: "HunFlair2 in a cross-corpus evaluation of named entity recognition and normalization tools",
        authors: "Mario Sänger, Samuele Garda, Xing David Wang, Leon Weber-Genzel, Pia Droop, Benedikt Fuchs, Alan Akbik, Ulf Leser",
        links: [{ label: "PDF", url: "https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/btae564/7762634?utm_source=authortollfreelink&utm_campaign=bioinformatics&utm_medium=email&guestAccessKey=b3f76885-762b-4417-ab20-f973a56c83bc&login=false" }],
    }, {
        year: 2024,
        conference: "COLING-LREC 2024",
        title: "PECC: Problem Extraction and Coding Challenges",
        authors: "Patrick Haller, Jonas Golde and Alan Akbik",
        links: [{ label: "PDF", url: "https://aclanthology.org/2024.lrec-main.1111/" }],
    }, {
        year: 2024,
        title: "SemScore: Automated Evaluation of Instruction-Tuned LLMs based on Semantic Textual Similarity",
        authors: "Ansar Aynetdinov and Alan Akbik",
        links: [{ label: "PDF", url: "https://arxiv.org/pdf/2401.17072.pdf" }],
    }, {
        year: 2024,
        conference: "EACL 2024",
        title: "Large-Scale Label Interpretation Learning for Few-Shot Named Entity Recognition",
        authors: "Jonas Golde, Felix Hamborg and Alan Akbik",
        links: [{ label: "PDF", url: "https://aclanthology.org/2024.eacl-long.178" }],
    }, {
        year: 2024,
        conference: "EACL 2024",
        title: "Parameter-Efficient Fine-Tuning: Is There An Optimal Subset of Parameters to Tune?",
        authors: "Max Ploner and Alan Akbik",
        links: [{ label: "PDF", url: "https://aclanthology.org/2024.findings-eacl.122/" }],
    }, {
        year: 2023,
        conference: "EMNLP 2023",
        title: "CleanCoNLL: A Nearly Noise-Free Named Entity Recognition Dataset",
        authors: "Susanna Rücker and Alan Akbik",
        links: [{ label: "PDF", url: "https://arxiv.org/pdf/2310.16225" }],
    }, {
        year: 2023,
        conference: "EMNLP 2023",
        title: "Fabricator: An Open Source Toolkit for Generating Labeled Training Data with Teacher LLMs",
        authors: "Jonas Golde, Patrick Haller, Felix Hamborg, Julian Risch and Alan Akbik",
        links: [],
    }, {
        year: 2023,
        title: "OpinionGPT: Modelling Explicit Biases in Instruction-Tuned LLMs",
        authors: "Patrick Haller, Ansar Aynetdinov and Alan Akbik",
        links: [{ label: "PDF", url: "https://arxiv.org/pdf/2309.03876.pdf" }],
    }, {
        year: 2023,
        conference: "EACL 2023",
        title: "ZELDA: A Comprehensive Benchmark for Supervised Entity Disambiguation",
        authors: "Marcel Milich and Alan Akbik",
        links: [{ label: "PDF", url: "https://aclanthology.org/2023.eacl-main.151.pdf" }],
    }, {
        year: 2022,
        title: "Task-Specific Embeddings for Ante-Hoc Explainable Text Classification",
        authors: "Kishaloy Halder, Josip Krapac, Alan Akbik, Anthony Brew, Matti Lyra",
        links: [{ label: "PDF", url: "https://arxiv.org/pdf/2212.00086.pdf" }],
    }, {
        year: 2022,
        conference: "NAACL 2022",
        title: "Medical Coding with Biomedical Transformer Ensembles and Zero/Few-shot Learning",
        authors: "Angelo Ziletti, Alan Akbik, Christoph Berns, Thomas Herold, Marion Legler, Martina Viell",
        links: [{ label: "PDF", url: "https://aclanthology.org/2022.naacl-industry.21.pdf/" }],
    }, {
        year: 2021,
        conference: "ACL-IJCNLP 2021",
        title: "Early Detection of Sexual Predators in Chats",
        authors: "Matthias Vogt, Ulf Leser and Alan Akbik",
        links: [{ label: "PDF", url: "https://aclanthology.org/2021.acl-long.386/" }],
    }, {
        year: 2021,
        conference: "Bioinformatics 2021",
        title: "HunFlair: An easy-to-use tool for state-of-the-art biomedical named entity recognition",
        authors: "Leon Weber, Mario Sänger, Jannes Münchmeyer, Maryam Habibi, Ulf Leser and Alan Akbik",
        links: [{ label: "PDF", url: "https://academic.oup.com/bioinformatics/advance-article-abstract/doi/10.1093/bioinformatics/btab042/6122692" }],
    }, {
        year: 2020,
        title: "FLERT: Document-Level Features for Named Entity Recognition",
        authors: "Stefan Schweter and Alan Akbik",
        links: [{ label: "PDF", url: "https://arxiv.org/abs/2011.06993" }],
    }, {
        year: 2020,
        conference: "COLING 2020",
        title: "Task-Aware Representation of Sentences for Generic Text Classification",
        authors: "Kishaloy Halder, Alan Akbik, Josip Krapac and Roland Vollgraf",
        links: [{ label: "PDF", url: "https://aclanthology.org/2020.coling-main.285.pdf" }],
    }, {
        year: 2019,
        conference: "NAACL 2019",
        title: "FLAIR: An Easy-to-Use Framework for State-of-the-Art NLP",
        authors: "Alan Akbik, Tanja Bergmann, Duncan Blythe, Kashif Rasul, Stefan Schweter and Roland Vollgraf",
        links: [{ label: "PDF", url: "https://www.aclweb.org/anthology/N19-4010.pdf" }],
    }, {
        year: 2019,
        conference: "NAACL 2019",
        title: "Pooled Contextualized Embeddings for Named Entity Recognition",
        authors: "Alan Akbik, Tanja Bergmann and Roland Vollgraf",
        links: [{ label: "PDF", url: "https://www.aclweb.org/anthology/N19-1078.pdf" }],
    }, {
        year: 2019,
        conference: "NLDL 2019",
        title: "Multilingual Sequence Labeling With One Model",
        authors: "Alan Akbik, Tanja Bergmann and Roland Vollgraf",
        links: [],
    }, {
        year: 2018,
        conference: "COLING 2018",
        title: "Contextual String Embeddings for Sequence Labeling",
        authors: "Alan Akbik, Duncan Blythe and Roland Vollgraf",
        links: [],
    }, {
        year: 2018,
        conference: "LREC 2018",
        title: "ZAP: An Open-Source Multilingual Annotation Projection Framework",
        authors: "Alan Akbik and Roland Vollgraf",
        links: [{ label: "PDF", url: "" }],
    }, {
        year: 2018,
        conference: "LREC 2018",
        title: "FEIDEGGER: A Multi-modal Corpus of Fashion Images and Descriptions in German",
        authors: "Leonidas Lefakis, Alan Akbik and Roland Vollgraf",
        links: [],
    }, {
        year: 2017,
        conference: "EMNLP 2017",
        title: "The Projector: An Interactive Annotation Projection Visualization Tool",
        authors: "Alan Akbik and Roland Vollgraf",
        links: [
            { label: "Video", url: "https://vimeo.com/217035646" },
        ],
    }, {
        year: 2017,
        conference: "EMNLP 2017",
        title: "CROWD-IN-THE-LOOP: A Hybrid Approach for Annotating Semantic Roles",
        authors: "Chenguang Wang, Alan Akbik, Laura Chiticariu, Yunyao Li, Fei Xia, Anbang Xu",
        links: [],
    }, {
        year: 2016,
        conference: "COLING 2016",
        title: "Multilingual Information Extraction with PolyglotIE",
        authors: " Alan Akbik, Laura Chiticariu, Marina Danilevsky, Yonas Kbrom, Yunyao Li and Huaiyu Zhu",
        links: [{ label: "Video", url: " Alan Akbik, Laura Chiticariu, Marina Danilevsky, Yonas Kbrom, Yunyao Li and Huaiyu Zhu" }],
    }, {
        year: 2016,
        conference: "COLING 2016",
        title: "K-SRL: Instance-based Learning for Semantic Role Labeling",
        authors: "Alan Akbik and Yunyao Li",
        links: [],
    }, {
        year: 2016,
        conference: "COLING 2016",
        title: "Multilingual Aliasing for Auto-Generating Proposition Banks",
        authors: "Alan Akbik, Xinyu Guan and Yunyao Li",
        links: [{ label: "PDF", url: "" }],
    }, {
        year: 2016,
        conference: "ICIQ 2016",
        title: "Improving Data Quality by Leveraging Statistical Relational Learning",
        authors: "Larysa Visengeriyeva, Alan Akbik and Manohar Kaul",
        links: [],
    }, {
        year: 2016,
        conference: "EMNLP 2016",
        title: "Towards Semi-Automatic Generation of Proposition Banks for Low-Resource Languages",
        authors: "Alan Akbik, Vishwajeet Kumar and Yunyao Li",
        links: [{ label: "PDF", url: "" }],
    }, {
        year: 2016,
        conference: "ACL 2016",
        title: "Polyglot: Multilingual Semantic Role Labeling with Unified Labels",
        authors: "Alan Akbik and Yunyao Li",
        links: [],
    }, {
        year: 2016,
        title: "Exploratory Relation Extraction in Large Multilingual Data",
        authors: "Alan Akbik",
        links: [],
    }, {
        year: 2015,
        conference: "ACL 2015",
        title: "Generating High Quality Proposition Banks for Multilingual Semantic Role Labeling",
        authors: "Alan Akbik, Laura Chiticariu, Marina Danilevsky, Yunyao Li, Shivakumar Vaithyanathan and Huaiyu Zhu",
        links: [],
    }, {
        year: 2015,
        conference: "ACL 2015",
        title: "SCHNÄPPER: A Web Toolkit for Exploratory Relation Extraction",
        authors: "Thilo Michael and Alan Akbik",
        links: [],
    }, {
        year: 2014,
        conference: "COLING 2014",
        title: "Proceedings of the First AHA!-Workshop on Information Discovery in Text",
        authors: "Alan Akbik and Larysa Visengeriyeva",
        links: [],
    }, {
        year: 2014,
        conference: "COLING 2014",
        title: "Extracting a Repository of Events and Event References from News Clusters",
        authors: "Silvia Julinda, Christoph Boden and Alan Akbik",
        links: [],
    }, {
        year: 2014,
        conference: "COLING 2014",
        title: "Nerdle: Topic-Specific Question Answering Using Wikia Seeds",
        authors: "Umar Maqsud, Sebastian Arnold, Michael Hülfenhaus and Alan Akbik",
        links: [],
    }, {
        year: 2014,
        conference: "COLING 2014",
        title: "Exploratory Relation Extraction from Large Text Corpora",
        authors: "Alan Akbik, Thilo Michael and Christoph Boden",
        links: [],
    }, {
        year: 2014,
        conference: "LREC 2014",
        title: "The Weltmodell: A Data-Driven Commonsense Knowledge Base",
        authors: "Alan Akbik and Thilo Michael",
        links: [],
    }, {
        year: 2014,
        conference: "LREC 2014",
        title: "Freepal: A Large Collection of Deep Lexico-Syntactic Patterns for Relation Extraction",
        authors: "Johannes Kirschnick, Alan Akbik, Holmer Hemsen",
        links: [],
    }, {
        year: 2013,
        conference: "IJCNLP 2013",
        title: "Effective Selectional Restrictions for Unsupervised Relation Extraction",
        authors: "Alan Akbik, Larysa Visengeriyeva, Johannes Kirschnick, Alexander Löser",
        links: [],
    }, {
        year: 2013,
        conference: "ACL 2013",
        title: "Propminer: A Workflow for Interactive Information Extraction and Exploration using Dependency Trees",
        authors: "Alan Akbik, Oresti Konomi and Michail Melnikov",
        links: [],
    }, {
        year: 2013,
        conference: "iPres 2013",
        title: "Automatic Preservation Watch using Information Extraction on the Web",
        authors: "Luis Faria, Alan Akbik, Barbara Sierman, Marcel Ras, Miguel Ferreira and Jose Carlos Ramalho",
        links: [],
    }, {
        year: 2013,
        conference: "GSCL 2013",
        title: "QuoteMine: A Repository of Newsworthy Quotes",
        authors: "Alan Akbik, Martin Schenck",
        links: [],
    }, {
        year: 2012,
        conference: "COLING 2012",
        title: "Unsupervised Discovery of Relations and Discriminative Extraction Patterns",
        authors: "Alan Akbik, Larysa Visengeriyeva, Priska Herger, Holmer Hemsen, Alexander Löser",
        links: [],
    }, {
        year: 2012,
        conference: "NAACL-HLT 2012",
        title: "KrakeN: N-ary Facts in Open Information Extraction",
        authors: "Alan Akbik, Alexander Löser",
        links: [],
    }, {
        year: 2012,
        conference: "WWW 2009",
        title: "Wanderlust: Extracting Semantic Relations from Natural Language Text Using Dependency Grammar Patterns",
        authors: "Alan Akbik, Jürgen Broß",
        links: [],
    },
];

export default Publications;