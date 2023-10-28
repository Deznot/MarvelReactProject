import "./AppHeader.scss";

const AppHeader = (props) => {

    return (
        <header className="header">
            <div className="header__logo">
                <a href="#" className="header__logo-link">
                    <span>Marvel</span> information portal
                </a>
            </div>
            <div className="header__menu">
                <nav className="header__menu-nav">
                    <ul className="header__menu-list">
                        <li className="header__menu-item"><a className="header__link" href="#"><span>Characters</span></a></li>
                        /
                        <li className="header__menu-item"><a className="header__link" href="#">Comics</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default AppHeader;