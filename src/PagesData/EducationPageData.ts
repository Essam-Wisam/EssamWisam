import { rand } from "../Pages/utils";

export const educationHeader = {
    sectionName: "Education",
    id: "Education",
    description: "Besides this work is [great deal] of [education and autodidactisim]:",
    educationComment: "",
    sliderTitle: "Certificates",
}

export const educationStyles = {
    "center": false,
    "scrollDirection": rand({ "rtl": 0.2, "ltr": 0.8 }),
}

export const educationData = {
    journey: [
        {
            degree: "PhD in Computer Engineering",
            img: "https://utamavs.com/images/2021/5/20/UT_Arlington_Campus_Tower_Entrance_Sign.jpg?width=1884&quality=80&format=jpg",
            university: "The University of Texas at Arlington",
            universityLink: "https://www.uta.edu/",
            year: "2024 - Present",
            gpa: "4.0",
            bonus: ["Researcher in NLP and Speech Processing", "Teaching Assistant in ML and NLP"]
        },
        {
            degree: "Bacherlors of Computer Engineering",
            img: "https://i.imgur.com/utt3SE5.jpeg",
            university: "Cairo University",
            universityLink: "https://cu.edu.eg/Home",
            year: "2018 - 2023",
            gpa: "4.0",
            bonus: ["Valedictorian of the Class", "Granted A in just about all courses covered"]
        },
    ],
    certificates: [
        {
            img: "https://i.imgur.com/XdzDTHq.png",
            link: "https://www.linkedin.com/in/essamwisam/details/certifications/",
            name: "Generative AI with LLMs",
            provider: "AWS & Deep Learning AI",
            date: "Jan. 2024"
        },
        {
            img: "https://i.imgur.com/3F4fIlO.png",
            link: "https://www.linkedin.com/in/essamwisam/details/certifications/",
            name: "Introduction to Machine Learning in Production",
            provider: "Deep Learning AI",
            date: "Sep. 2022"
        },
        {
            img: "https://i.imgur.com/LClrXEe.png",
            link: "https://www.linkedin.com/in/essamwisam/details/certifications/",
            name: "Recommenders & RL",
            provider: "Deep Learning AI",
            date: "Sep. 2022"
        },
        {
            img: "https://i.imgur.com/6dlIxUI.png",
            link: "https://www.linkedin.com/in/essamwisam/details/certifications/",
            name: "Writing in the Sciences",
            provider: "Deep Learning AI",
            date: "Sep. 2022"
        },
        {
            img: "https://i.imgur.com/tzPIQRE.png",
            link: "https://www.linkedin.com/in/essamwisam/details/certifications/",
            name: "Deep Learning Specialization",
            provider: "Deep Learning AI",
            date: "Aug. 2022"
        },
        {
            img: "https://i.imgur.com/rg3mXHS.png",
            link: "https://www.linkedin.com/in/essamwisam/details/certifications/",
            name: "Differential Equations for Engineers",
            provider: "Hong Kong University of Science and Technology",
            date: "2020"
        },
    ]

}
