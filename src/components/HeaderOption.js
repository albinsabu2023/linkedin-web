import React from "react";
import "../styles/HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/UserSlice";
function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOptionIcon" />}
      {avatar && (
        <Avatar className="headerOptionAvatar" alt="Albin" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOptionTitle">{title}</h3>
    </div>
  );
}

export default HeaderOption;
