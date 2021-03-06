import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import Logo from "./img/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { logout, selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "./firebase";

function Header() {
  const user = useSelector(selectUser);
  const signOut = () => {
    auth.signOut().then(() => {
      dispatchEvent(logout());
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={Logo} alt="AGmail Logo" />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search Mail" type="text" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <Avatar onClick={signOut} src={user?.photoUrl} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
