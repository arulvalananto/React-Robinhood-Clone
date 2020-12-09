import { Clear, Dehaze, Search } from "@material-ui/icons";
import React, { Fragment, useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <div className="header">
        <div className="header__logoBox">
          <img
            src="https://www.jing.fm/clipimg/full/104-1047295_robinhood-logo-robinhood-app-logo.png"
            alt="Robinhood Logo"
            className="header__logo"
            width={100}
          />
        </div>
        <div className="header__search">
          <Search className="header__searchIcon" />
          <input
            type="text"
            placeholder="Search"
            className="header__searchInput"
          />
        </div>
        <div className="header__menuItems">
          <a href="/" className="header__menuLink header__menuLink--first">
            Free Stocks
          </a>
          <a href="/" className="header__menuLink">
            Portfolio
          </a>
          <a href="/" className="header__menuLink">
            Cash
          </a>
          <a href="/" className="header__menuLink">
            Messages
          </a>
          <a href="/" className="header__menuLink">
            Account
          </a>
        </div>
        <button
          className="header__toggleButton"
          onClick={() => setIsOpen(true)}
        >
          <Dehaze />
        </button>
      </div>
      {isOpen && (
        <div
          className="header__toggleBackground"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      {isOpen && (
        <div className="header__toggle">
          <Clear
            fontSize="large"
            className="header__toggleIcon"
            onClick={() => setIsOpen(false)}
          />
          <hr color="lightgray" />
          <div className="header__toggleSearch">
            <Search className="header__searchIcon" />
            <input
              type="text"
              placeholder="Search"
              className="header__searchInput"
            />
          </div>
          <div className="header__toggleMenuItems">
            <a href="/yarn.lock" className="header__toggleMenuLink">
              Free Stocks
            </a>
            <a href="/" className="header__toggleMenuLink">
              Portfolio
            </a>
            <a href="/" className="header__toggleMenuLink">
              Cash
            </a>
            <a href="/" className="header__toggleMenuLink">
              Messages
            </a>
            <a href="/" className="header__toggleMenuLink">
              Account
            </a>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Header;
