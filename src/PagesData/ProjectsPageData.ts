import { rand } from "../Pages/utils";

export const projectHeader = {
  sectionName: "Projects",
  id: "Projects",
  tabs: ["Featured", "Web", "Classical ML", "Datascience", "Computer Vision", "NLP",  "Crossplatform", "Others"],
  activeTab: 'Featured',
  description: "Behind these skills are [various project] where I had [central or sole contributions]:",
  projectExtraLinkIcon: "FaGithub",
  projectsComment: "",
  buttonText: "View Project"
}

export const projectStyles = {
  "center": false,
  "tabUI": rand({ "true": 0.7, "false": 0.3 }),
  "showBottom": rand({ "true": 0.05, "false": 0.95 }),
  "theme": rand({ "ClassicGrid": 0.3, "ModernGrid": 0.7 }),
}

export const projectData = [
  {
    title: "Applied ML Tutorials",
    description: "Scikit-learn, PyTorch & Keras tutorials and other teaching material for the CMP3006 course taught at Cairo University",
    image: "https://i.imgur.com/R9aYXVi.png",
    link: "https://github.com/EssamWisam/Applied-Machine-Learning-CU",
    github_link: "https://github.com/EssamWisam/Applied-Machine-Learning-CU",
    categories: ["Classical ML", "Featured"],
    skills: ["Scikit-learn", "PyTorch", "Keras", "TensorFlow"]
  },
  // {
  //   title: "Stand-With-Palestine.org",
  //   description: "An initiative aimed at exposing the ongoing genocide and fostering support for Palestine.",
  //   image: "https://i.imgur.com/qu9JYV8.png",
  //   link: "https://stand-with-palestine.org",
  //   github_link: "https://github.com/PalestinianVoices/Stand-With-Palestine",
  //   categories: ["Web"],
  //   skills: ["TypeScript", "React", "SCSS", "Leadership"]
  // },
  {
    title: "Memoirify",
    description: "Memoirify can magically streamline text for easier understanding and logical analysis.",
    image: "https://i.imgur.com/6u4muLd.png",
    link: "https://github.com/EssamWisam/Memoirify",
    github_link: "https://github.com/EssamWisam/Memoirify",
    categories: ["Web", "Featured"],
    skills: ["React", "JavaScript", "SCSS", "NLTK"]

  },
  {
    title: "CMPDocs",
    description: "A guide for prospective and current students in the computer engineering department of Cairo university in the form of a static site generator",
    image: "https://i.imgur.com/w5CWej6.png",
    link: "https://cmp-docs.netlify.app/",
    github_link: "https://github.com/EssamWisam/cmp-docs",
    categories: ["Web"],
    skills: ["React", "JavaScript", "SCSS", "NLTK", "Writing"],
    special: "Open Source"
  },
  {
    title: "Mathemati",
    description: "Mathemati is a website featuring over 24 different numerical methods that tackle different problems in mathematics.",
    image: "https://i.imgur.com/CTFEnUe.gif",
    link: "https://github.com/abdullahalshawafi/Mathemati_",
    github_link: "https://github.com/abdullahalshawafi/Mathemati_",
    categories: ["Classical ML"],
    skills: ["Flask", "Python", "Math"]
  },
  {
    title: "Tumblr Replica",
    description: "A replica of the widely known Tumblr social website made as a school project.",
    image: "https://i.imgur.com/d1VP1KY.gif",
    link: "https://github.com/SE-Project-CMP-Tumbler/SE-Project-CMP-Front-end",
    github_link: "https://github.com/SE-Project-CMP-Tumbler/SE-Project-CMP-Front-end",
    categories: ["Web"],
    skills: ["React", "Redux", "SCSS", "Leadership"]
  },
  {
    title: "inStadium Reservation Site",
    description: "An online automated ticket reservation system for football matches (school project)",
    image: "https://i.imgur.com/1vu5QT2.png",
    link: "https://github.com/Makrion/WorldCup-2022-reservation-site",
    github_link: "https://github.com/Makrion/WorldCup-2022-reservation-site",
    categories: ["Web"],
    skills: ["React", "JavaScript", "SCSS", "ChatGPT"]
  },
  {
    title: "Daily Chronicle",
    description: "Your to-the-point diary, plan-ahead todo list and organized notes folder, all in one app.",
    image: "https://user-images.githubusercontent.com/49572294/215291071-c14e2ad0-c413-4848-a426-33d0eb00fb26.gif",
    link: "https://play.google.com/store/apps/details?id=com.essamos.diary&pli=1",
    github_link: "https://github.com/EssamWisam/Daily-Chronicle-ReactNative",
    categories: ["Crossplatform", "Featured"],
    skills: ["React Native", "CSS"]
  },
  {
    title: "Quizzery",
    description: "A quiz app that you really learn from by being able to go back to old questions and check explanation and references.",
    image: "https://i.imgur.com/btKi3tp.png",
    link: "https://keyteachingknowledge.github.io/",
    github_link: "https://github.com/KeyTeachingKnowledge/Quizzery-React-Native",
    categories: ["Crossplatform"],
    skills: ["React Native", "CSS"]
  },
  {
    title: "Galaxy Surfers",
    description: "A game where the spaceship has to capture golden monkeys and dodge asteroids",
    image: "https://i.imgur.com/fUJUvgN.png",
    link: "https://mega.nz/file/7OgABLSI#2_8Wnr3OMyXb-59oiJxyqYeTY9B2_gBFj2O1XRJRf8o",
    github_link: "https://github.com/AhmadJamal01/Galaxy-Surfers",
    categories: ["Others"],
    skills: ["C++", "OpenGL",]
  },
  {
    title: "Titanic Dispute",
    description: "Titanic Dispute is a game about two ships that keep shooting cannons while attempting to dodge cannons from the other ship using a shield.",
    image: "https://i.imgur.com/gD5Ish0.gif",
    link: "https://github.com/reem-atalah/Titanic-Dispute_Assembly",
    github_link: "https://github.com/reem-atalah/Titanic-Dispute_Assembly",
    categories: ["Others"],
    skills: ["Assembly",]
  },
  {
    title: "RSA World",
    description: "RSA World: Generate, validate, and use public security keys for encryption. Features an end-to-end encrypted chat module and the chosen-ciphertext attack.",
    image: "https://i.imgur.com/xjEdLhB.png",
    link: "https://github.com/EssamWisam/Breaking-RSA-With-Math",
    github_link: "https://github.com/EssamWisam/Breaking-RSA-With-Math",
    categories: ["Others"],
    skills: ["Flask", "Python", "RSA", "Security"]
  },
  {
    title: "Arabic COVID Tweets Classifier",
    description: "This project involves two sentiment classifiers that based on a given tweet decides its vaccination stance and its category.",
    image: "https://i.imgur.com/XdQG3nn.png",
    link: "https://github.com/EssamWisam/Sentiment-Classification-Arabic-COVID-Tweets",
    github_link: "https://github.com/EssamWisam/Sentiment-Classification-Arabic-COVID-Tweets",
    categories: ["NLP"],
    skills: ["PyTorch", "Sci-kit Learn", "Hyperparameter Tuning"]
  },
  {
    title: "Botiverse Chatbot Library",
    description: "Botiverse is Python package that bridges the gap between developers regardless of their machine learning expertise and building chatbots. ",
    image: "https://i.imgur.com/dVHQsCn.gif",
    link: "https://github.com/TheBotiverse/Botiverse",
    github_link: "https://github.com/TheBotiverse/Botiverse",
    categories: ["NLP", "Featured"],
    skills: ["PyTorch", "Exploring Literature", "Pip"],
    special: "Open Source"
  },
  {
    title: "Dstny Anonymizer and QA",
    description: "This involves work during my Dstny 2023 ML Internship: An anonymization model to mask sensitive entities in text and a question-answering model",
    image: "https://i.imgur.com/Dl6bcZZ.gif",
    link: "https://github.com/tactful-ai/Dstny-LLM",
    github_link: "https://github.com/tactful-ai/Dstny-LLM",
    categories: ["NLP"],
    skills: ["PyTorch", "HuggingFace", "Fine-tuning", "LLMs"]
  },
  {
    title: "TableToExcel",
    description: "This won't help you convert .doc, .pdf, .ppt to excel. It will help you convert the actual paper to excel! Be it a table or a bubble sheet just take a picture of it and watch it magically become the original excel file!",
    image: "https://i.imgur.com/QR6fwIz.gif",
    link: "https://github.com/radwaahmed2132000/Auto-Grader",
    github_link: "https://github.com/radwaahmed2132000/Auto-Grader",
    categories: ["Computer Vision"],
    skills: ["PyTorch", "Hyperparameter Tuning"]
  },
  {
    title: "Gender Classifier",
    description: "This is a gender classifier that based on a given sample of handwritten text decides if the origin of the text is male or female.",
    image: "https://i.imgur.com/vLorVnK.png",
    link: "https://github.com/radwaahmed2132000/Gender-Classification-ICDAR2013",
    github_link: "https://github.com/radwaahmed2132000/Gender-Classification-ICDAR2013",
    categories: ["Computer Vision"],
    skills: ["PyTorch", "Hyperparameter Tuning"]
  },
  {
    title: "Flood Detection Radar",
    description: "The project involves detecting images involving a flood and localizing the flooded areas within them.",
    image: "https://i.imgur.com/XU7c0j2.gif",
    link: "https://github.com/Halahamdy22/Flood-Detection-Radar",
    github_link: "https://github.com/Halahamdy22/Flood-Detection-Radar",
    categories: ["Computer Vision"],
    skills: ["PyTorch", "Hyperparameter Tuning", "Fine-tuning"]
  },
  {
    title: "Github Metadata Analytics",
    description: "Analytics on Github metadata of a huge number of Github repos.",
    image: "https://i.imgur.com/W7ujudf.png",
    link: "https://github.com/EssamWisam/Github-Metadata-Analytics",
    github_link: "https://github.com/EssamWisam/Github-Metadata-Analytics",
    categories: ["Datascience"],
    skills: ["Python", "Pandas", "Sci-kit Learn", "Organization"]
  },
  {
    title: "Airline Satisfaction Prediction",
    description: "Finding out a recipe for the perfect airline company by answering the paramount question “What makes airline customers satisfied?”.",
    image: "https://i.imgur.com/AJRoAqQ.png",
    link: "https://i.imgur.com/AJRoAqQ.png",
    github_link: "https://github.com/NouranHany/Airline-Satisfaction-Predictors",
    categories: ["Datascience"],
    skills: ["Python", "Pandas", "Spark", "Design"]
  },
  {
    title: "Imbalance.jl",
    description: "A Julia toolbox with resampling methods to correct for class imbalance.",
    image: "https://i.imgur.com/uVnDVgH.png",
    link: "https://juliaai.github.io/Imbalance.jl/dev/",
    github_link: "https://github.com/JuliaAI/Imbalance.jl",
    categories: ["Classical ML", "Featured"],
    skills: ["Julia", "MLJ", "Exploring Literature", "Design"],
    special: "Open Source"
  },
  {
    title: "MLPath",
    description: "An MLOPs Library for machine learning experiment tracking & directory structure",
    image: "https://i.imgur.com/i60Fz5G.png",
    link: "https://github.com/EssamWisam/MLPath",
    github_link: "https://github.com/EssamWisam/MLPath",
    categories: ["Classical ML", "Featured"],
    skills: ["Python", "Pip", "MLOPs", "Wrappers", "Design"],
    special: "Open Source"
  },
  {
    title: "Bing-Bang-Bodylevel",
    description: "The project comprises tackling the supervised problem of body level classification",
    image: "https://i.imgur.com/9xtEWKP.gif",
    link: "https://github.com/Marim1611/Bing-Bang-BodyLevel",
    github_link: "https://github.com/Marim1611/Bing-Bang-BodyLevel",
    categories: ["Classical ML"],
    skills: ["Python", "Sci-kit Learn", "Organization", "Design"]
  },
  {
    title: "Learn Quran App",
    description: "An app to listen, read and learn Quran.",
    image: "https://i.imgur.com/ROof9j0.png",
    link: "https://github.com/EssamWisam/Learn-Quran-App",
    github_link: "https://github.com/EssamWisam/Learn-Quran-App",
    categories: ["Crossplatform"],
    skills: ["React Native", "CSS"]
  },
  {
    title: "Portfolio Distribution",
    description: "A Probability Distribution Over Portfolios",
    image: "https://i.imgur.com/EQmkNXm.png",
    link: "portfolio-distribution.pages.dev",
    github_link: "https://github.com/EssamWisam/Portfolio-Distribution",
    categories: ["Web"],
    skills: ["React", "CSS"]
  },


]
