import React from "react";
import "../styles/Widjet.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function Widjet() {
  const newsArticle = (heading, subtitle) => (
    <div className="widjetArticle">
      <div className="widjetLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widjetRight">
        <h1>{heading}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widjet">
      <div className="widjetNews">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Albin Sabu is online", "just posted a minute ago")}
      {newsArticle("React", "mostly for frontend")}
      {newsArticle("Google ", "hiring intern for 2024")}
      {newsArticle("zoho", "plaaned to hire 20k employes")}
    </div>
  );
}

export default Widjet;
