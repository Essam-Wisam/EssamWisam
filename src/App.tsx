import React from 'react';
import './App.scss'; 
// import components
import NavigationBar from './Common/NavigationBar/NavigationBar';
import HeroPage from './Pages/HeroPage/HeroPage';
import TimelinePage from './Pages/TimelinePage/TimelinePage';
import SkillsPage from './Pages/SkillsPage/SkillsPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectPage';
import FeaturedPage from './Pages/FeaturedPage/FeaturedPage';
import EducationPage from './Pages/EducationPage/EducationPage';
import RecommendationsPage from './Pages/RecommendationsPage/RecommendationsPage';
import Footer from './Common/Footer/Footer';
import { Fade } from "react-swift-reveal";
//import data
import { generalSetup } from './PagesData/GeneralData';
import { navbarData, navbarStyles } from './PagesData/NavigationBarData';
import { heroData, heroStyles } from './PagesData/HeroPageData';
import { timelineHeader, timelineStyles, timelineData } from './PagesData/TimelinePageData';
import { softSkillsData, techSkillsData, skillsHeader, skillsStyles } from './PagesData/SkillsPageData';
import { projectData, projectHeader, projectStyles } from './PagesData/ProjectsPageData';
import { blogData, blogHeader, blogStyles } from './PagesData/BlogsPageData';
import { featuredData, featuredHeader, featuredStyles } from './PagesData/FeaturedPageData';
import { educationData, educationHeader, educationStyles } from './PagesData/EducationPageData';
import { recommendationsData, recommendationsHeader, recommendationsStyles } from './PagesData/RecommendationsPageData';

const App: React.FC = () => {
  // set theme
  React.useEffect(() => {
    document.documentElement.style.setProperty('--background-color', generalSetup.backgroundColor);
    document.documentElement.style.setProperty('--secondary-color', generalSetup.secondaryColor);
    document.documentElement.style.setProperty('--tertiary-color', generalSetup.tertiaryColor);
    document.documentElement.style.setProperty('--theme', generalSetup.theme);
    document.documentElement.style.setProperty('--inverse-theme', generalSetup.inverseTheme);

      // Set page title
      document.title = generalSetup.title.toString();

      // Set favicon
      const faviconLink = document.querySelector("link[rel~='icon']");
      if (faviconLink) {
        //@ts-ignore
        faviconLink.href = generalSetup.favicon;
        }

  }, []);
  return (
    <div>
      <NavigationBar navbarData={navbarData} navbarStyles={navbarStyles} />
      <Fade><HeroPage heroData={heroData} heroStyles={heroStyles}/></Fade>
      <Fade><TimelinePage timelineData={timelineData} timelineHeader={timelineHeader} timelineStyles={timelineStyles} /></Fade>
      <Fade><SkillsPage skillsStyles={skillsStyles} skillsHeader={skillsHeader} softSkillsData={softSkillsData} techSkillsData={techSkillsData}/></Fade>
      <Fade><ProjectsPage projectHeader={projectHeader} projectStyles={projectStyles} projectData={projectData}  /></Fade>
      <Fade><EducationPage educationData={educationData} educationHeader={educationHeader} educationStyles={educationStyles} /></Fade>
      <Fade><ProjectsPage projectHeader={blogHeader} projectStyles={blogStyles} projectData={blogData}  /></Fade>
      <Fade><FeaturedPage featuredData={featuredData} featuredHeader={featuredHeader} featuredStyles={featuredStyles} /></Fade>
      <Fade><RecommendationsPage recommendationsData={recommendationsData} recommendationsHeader={recommendationsHeader} recommendationsStyles={recommendationsStyles} /></Fade>
      <Footer heroData={heroData}/>
    </div>
  );
};



export default App;