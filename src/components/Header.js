import React from "react";
import "../styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/UserSlice";
import { auth } from "../backend/firebase";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logOutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="headerLeft">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="headerSearch">
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="headerRight">
        <HeaderOption Icon={HomeIcon} title={"Home"} />
        <HeaderOption Icon={SupervisorAccountIcon} title={"My Network"} />
        <HeaderOption Icon={WorkIcon} title={"Jobs"} />
        <HeaderOption Icon={ChatIcon} title={"Messaging"} />
        <HeaderOption Icon={NotificationsActiveIcon} title={"Notifications"} />
        <HeaderOption
          avatar={true}
          title={user?.displayName}
          onClick={logOutApp}
        />
      </div>
    </div>
  );
}

export default Header;
