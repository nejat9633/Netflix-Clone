import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import style from './Header.module.css'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.leftNavContainer}>
          <ul className={style.links}>
            <li>
              <img
                className={style.logo}
                src={logo}
                alt="Netflix Logo"
              />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>

        <div className={style.rightNavContainer}>
          <ul className={style.links}>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header