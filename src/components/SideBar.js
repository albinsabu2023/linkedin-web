import { Avatar } from "@mui/material";
import React from "react";
import "../styles/Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/UserSlice";
function SideBar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sideBarRecentItem">
      <span className="sideBarHashItem">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sideBar">
      <div className="sideBarTop">
        <img
          src="https://media.licdn.com/dms/image/D5616AQEp5vE8y4inMA/profile-displaybackgroundimage-shrink_350_1400/0/1721976826696?e=1728518400&v=beta&t=293tEvDMGcTJPdThh938F1dGKZcQkk8U9ZG9tCMEKjY"
          alt=""
        />
        <Avatar src={user.photoUrl}>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h5>{user.email}</h5>
      </div>

      <div className="sidebarStats">
        <div className="sideBarStat">
          <p>
            who viewed you <span>2.34k</span>
          </p>
          <p>
            views on post <span>9.34k</span>
          </p>
        </div>
        <div className="sideBarStat"></div>
      </div>

      <div className="sideBarBottom">
        <p>Recent</p>
        {recentItem("react.js")}
        {recentItem("software engineering")}
        {recentItem("software developer")}
        {recentItem("springboot")}
        {recentItem("mern stack dev")}
      </div>
    </div>
  );
}

export default SideBar;
