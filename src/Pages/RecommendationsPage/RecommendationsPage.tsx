import React from "react";
import { formatText } from "../utils";
import BasicRecommendations from "./BasicRecommendations";
import  SectionHeader  from "../../Common/SectionHeader";
import FancyRecommendations from "./FancyRecommendations";

interface RecommendationsPageProps {
    recommendationsData: any;
    recommendationsHeader: any;
    recommendationsStyles: any;
}


const RecommendationsPage:  React.FC<RecommendationsPageProps> = ({recommendationsData, recommendationsHeader, recommendationsStyles}) => {

    return (
      <section className="skills" id={recommendationsHeader.sectionName}>
        <SectionHeader sectionName={recommendationsHeader.sectionName}  description={recommendationsHeader.description} isCentered={recommendationsStyles.center}/>
        <div >
          {/* <BasicRecommendations recommendationsData={recommendationsData} /> */}
          <FancyRecommendations  recommendationsData={recommendationsData} />
        </div>
        {recommendationsHeader.recommendationsComment !=="" && <p style={{textAlign: (recommendationsStyles.center) ? "center" : "justify", marginBottom: '2rem', fontStyle:'normal'}} className="description" dangerouslySetInnerHTML={{__html: formatText(recommendationsHeader.recommendationsComment)}}/>}
      </section>
    )
  
  }
  
  export default RecommendationsPage;