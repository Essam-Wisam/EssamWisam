import { rand } from "../Pages/utils";

export const recommendationsHeader = {
    sectionName: "Recommendations",
    id: "Recommendations",
    description:
      "See what others that [I have worked with think about me]",
    recommendationsComment:
      "You can see more by heading to my [<a href='https://www.linkedin.com/in/essamwisam/'>LinkedIn profile</a>]",
  };
  

  export const recommendationsStyles = {
    "center": false,
    "theme": rand({"BasicRecommendation":0.5, "FancyRecommendation":0.5}),
  }

  export const recommendationsData = [
    {
      "name": "Ahmed Ihab",
      "role": "DevOps Engineer @_VOIS",
      "date": "February 2024",
      "quote": "Essam operates in a realm where the concept of 'impossible' holds no sway. When working alongside Essam, one can rest assured that every task will be expertly managed, surpassing expectations effortlessly.",
      "link": "https://www.linkedin.com/in/essamwisam/details/recommendations/?detailScreenTabIndex=0",
      "img": ""
    },
    {
      "name": "Mohamed Saad",
      "role": "Research Asistant @ DFKI",
      "date": "October 2022",
      "quote": "Essam is one of the few people that has a direct connection to the innovation wonderland, and believe me it is surprising to see that machinery works in front of you, he just never runout of good ideas.",
      "link": "https://www.linkedin.com/in/essamwisam/details/recommendations/?detailScreenTabIndex=0",
      "img": ""
    },
    {
      "name": "Taher Mohamed",
      "role": "Backend Engineer @ Coformatique",
      "date": "March 2023",
      "quote": "It was a great chance to work with him and witness firsthand the incredible expertise and dedication that he brings to the table.",
      "link": "https://www.linkedin.com/in/essamwisam/details/recommendations/?detailScreenTabIndex=0",
      "img": ""
    },
  ]
  