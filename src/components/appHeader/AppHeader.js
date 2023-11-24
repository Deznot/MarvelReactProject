import "./appHeader.scss";
import { NavLink, Link } from "react-router-dom";

const AppHeader = (props) => {

    return (
        <header className="header">
            <div className="header__logo">
                <Link
                    to="/"
                    className="header__logo-link">
                    <span>Marvel</span> information portal
                </Link>
            </div>
            <div className="header__menu">
                <nav className="header__menu-nav">
                    <ul className="header__menu-list">
                        <li className="header__menu-item">
                            <NavLink
                                className="header__link"
                                end
                                to="/"
                                styles={({ isActive }) => ({ color: isActive ? "#9F0013" : "inherit" })}
                            >
                                <span>Characters</span>
                            </NavLink>
                        </li>
                        /
                        <li className="header__menu-item">
                            <NavLink
                                end
                                className="header__link"
                                styles={({ isActive }) => ({ color: isActive ? "#9F0013" : "inherit" })}
                                to="/comics"
                            >
                                Comics
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default AppHeader;