import { rand } from "../Pages/utils";

export const timelineHeader = {
  sectionName: "Roles",
  id: "Roles",
  description: "Throughout my career, I've immersed myself in [diverse roles] that have shaped my [professional journey]."
}

export const timelineStyles = {
  "center": false,
  "theme": rand({ "HorizontalTimeline": 0.85, "LongtidunalTimeline": 0.15 }),
}

export const timelineData = [
  {
    id: 1,
    role: "Technical Writer",
    company: "Towards Data Science",
    date: "Jul 2021-Now",
    description: [
      "Writing articles featuring natural language processing, deep learning, machine learning, mathematics and programming.",
    ],
    buttonText: "See Articles ▶",
    buttonLink: "https://medium.com/@essamwissam",
  },
  {
    id: 2,
    role: "Deep Learning Engineer",
    company: "Dstny Engage",
    date: "Aug-Sep 2023",
    description: [
      "Fine-tuned several LMs to mask sensitive information in user messages sent to chatbots in English, Dutch, Standard and Cairene Arabic. This includes over 27 entities as defined by the GDPR. Our best model had an F1 of 92.5%.",
      "Fine-tuned LMs for extractive QA in English, Dutch and Arabic. Ported 7B and 13B Llama 2 models to run in-house with GPTQ optimization for efficiency and prompt-engineered it for abstractive QA and validated both using Squadv1 dataset.",
    ],
    buttonText: "See Demo ▶",
    buttonLink: "https://github.com/tactful-ai/Dstny-LLM",
  },
  {
    id: 3,
    role: "Machine Learning Engineer",
    company: "The Julia Language (GSoC)",
    date: "Jun-Oct 2023",
    description: [
      "Created the Imbalance.jl and MLJBalancing.jl packages for JuliaAI and implemented over 11 oversampling and undersampling algorithms from the literature to address class imbalance.",
      "Wrote unit and end-to-end tests, extensive documentation, illustrative and practical guides, explanatory articles for the implemented techniques.",
      "Implemented MLJ.jl and TableTransforms.jl interfaces for each of the techniques, aside from the default pure functional interface",
      "Implemented wrappers that facilitate sequential and parallel combination of resamplers with MLJ classification models.",
    ],
    buttonText: "See Code and Docs ▶",
    buttonLink: "https://github.com/JuliaAI/Imbalance.jl",
  },
  {
    id: 4,
    role: "Research Assistant",
    company: "German Research Center of AI",
    date: "Nov 2023-Now",
    description: [
      "Served as a teaching assistant for an Engineering with Large Language Models course where I assisted in creating slides, exercises and semester project for students.",
      "Assisted in LLM research in the scope of automating the creation of MCQ tests",
      "Conducted research experiments for the use of Vision Transformer autoencoder models on tabular survey data",
      "Collaborated in JuliaAI by redesigning the website for DataScienceTutorials.jl and improving the datascience tutorials therein."
    ],
    buttonText: "",
    buttonLink: "",
  },
  {
    id: 5,
    role: "Teaching Assistant",
    company: "Cairo University Faculty of Engineering",
    date: "Feb-May 2024",
    description: [
      "Created over six lab assignments that cover implementing over ten machine learning algorithms from scratch (including generic backpropagation)",
      "Made and taught complete series of tutorials on machine learning toolboxes used in research and industry including Scikit-learn, PyTorch, TensorFlow/Keras* as well as other tutorials to illustrate crucial concepts from the lectures",
      "Grading and discusses quizzes, lab assignments and exams and other TA duties",
    ],
    buttonText: "See Some Material ▶",
    buttonLink: "https://github.com/EssamWisam/Applied-Machine-Learning-CU",
  },
  {
    id: 6,
    role: "Machine Learning Engineer",
    company: "The Julia Language (GSoC)",
    date: "May 2024-Now",
    description: [
      "Developed MLJTransforms.jl, extending MLJ with contrast categorical, ordinal, frequency, and target encoding. Built transformers for high-cardinality and missing data.",
      "Implemented EntityEmbedding in MLJFlux.jl and revamped its documentation."
    ],
    buttonText: "",
    buttonLink: "",
  },
  {
    id: 7,
    role: "LLMs Engineer",
    company: "HyperSolutions",
    date: "July 2024-Now",
    description: [
      "Designing and developing large language models systems including various retrieval augmented generation techniques, high-order agentic models, voice models, computer-use models, and classification systems.",
      "Occasionally developing frontends to serve the LLM systems and in some instances, aiding in demonstrating them to customers"
    ],
    buttonText: "",
    buttonLink: "",
  },
];
