import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BlizzardLogo } from '../images/blizzard-logo.svg';
import NexonLogo from '../images/nexon-logo.png';

function Header(props) {

    let theme = props.theme;
    let toggleText = "";
    let logo = "";

    if (theme === "overwatch") {
      toggleText = "Toggle MapleStory Mode";
      logo = <BlizzardLogo/>;
    } else if (theme === "nexon") {
      toggleText = "Toggle Overwatch Mode";
      logo = <img src={NexonLogo} alt="nexon logo" />;
    }

    return (
        <header className="header">
            <div className="header-left">
                <div className="logo">
                <Link to="/">
                    {logo}
                </Link>
                </div>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Character Slider</Link>
                    <Link to="/video" className="nav-link">Video Slider</Link>
                </div>
            </div>
            <div className="header-right">
                <div className="nav-links">
                    <div className="nav-link cta" onClick={props.toggleTheme}>{toggleText}</div>
                </div>
            </div>
        </header>
    );
}
export default Header;