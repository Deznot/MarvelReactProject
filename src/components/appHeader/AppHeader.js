import "./AppHeader.scss";

const AppHeader = (props) => {

    return (
        <header class="header">
            <div class="header__logo">
                <a href="#" class="header__logo-link">
                    <span>Marvel</span> information portal
                </a>
            </div>
            <div class="header__menu">
                <nav class="header__menu-nav">
                    <ul class="header__menu-list">
                        <li class="header__menu-item"><a class="header__link" href="#"><span>Characters</span></a></li>
                        /
                        <li class="header__menu-item"><a class="header__link" href="#">Comics</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default AppHeader;