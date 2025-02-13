import { rand } from "../Pages/utils";

export const heroData = {
  id: "Home",

  images: ["https://i.imgur.com/QNxLMh4.jpg", "https://i.imgur.com/epiM9fg.png"],

  title: rand({ "Hey, I am Essam Wisam": 0.5, "Hello! I am Essam Wisam": 0.5 }),

  roles: ["Machine Learning Engineer", "Machine Learning Researcher", "Front-end Developer", "Cross-platform Developer", "Teaching Assistant", "PhD Student"],

  roleDuration: 1600,

  about: "I'm a [computer engineer graduate from Cairo University] with a strong academic background and hands-on experience in machine learning, deep learning and data science. I have a deep aspiration to make things as flawless, useful and beautiful as possible and I greatly value [spreading knowledge, collaborating and communicating with others].",

  reachOutBText: rand({ "Reach Out": 0.6, "Connect": 0.4 }),

  email: "essamwisam@outlook.com",

  downloadBText: "Download CV",

  CV: "https://drive.google.com/uc?id=1EgEKE6yJhOl5sEL9n7D0mna_FlTlD4BV",

  extraBText: "",

  extraLink: "",

  buttonBorderRadius: '3rem',

  social: ["FaGithub", "FaLinkedin", "FaTwitter", "FaDiscord",],

  socialLinks: ["https://github.com/EssamWisam", "https://www.linkedin.com/in/essamwisam/", "https://twitter.com/essam_wisam", "https://discordapp.com/users/831916875453300847"],

  socialText: "Connect with me ",

  quotes: ["\"We have some catching up to do in the area of machine learning and artificial intelligence.\" -Klaus Froehlich",
    "\"A ship in harbor is safe, but that is not what ships are built for.\" - John A. Shedd",
    "\"Good things take time\" — John Wooden"

  ],

}

export const heroStyles = {
  fontSizes: ["2.9rem", "2.0rem", "1.0rem"],

  imageOnLeft: rand({ "true": 0.4, "false": 0.6 }),

  imgDim: '400px',

  roundness: "50%",

  hideImage: false,

  center: rand({ "false": 0.7, "true": 0.3 }),

  buttonRoundness: "3rem"
}
