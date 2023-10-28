import "./comicsList.scss";
import comics from "../../resources/img/UW.png"

const ComicsList = () => {

    return (
        <div className="comics__list">
            <ul className="comics__grid">
                <li className="comics__item">
                    <a href="#">
                        <img className="comics__item-img" src={comics} alt="" />
                        <div className="comics__item-title">
                            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                        </div>
                        <div className="comics__item-price">
                            5$
                        </div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={comics} alt="" />
                        <div className="comics__item-title">
                            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                        </div>
                        <div className="comics__item-price">
                            5$
                        </div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={comics} alt="" />
                        <div className="comics__item-title">
                            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                        </div>
                        <div className="comics__item-price">
                            5$
                        </div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={comics} alt="" />
                        <div className="comics__item-title">
                            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                        </div>
                        <div className="comics__item-price">
                            5$
                        </div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={comics} alt="" />
                        <div className="comics__item-title">
                            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                        </div>
                        <div className="comics__item-price">
                            5$
                        </div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={comics} alt="" />
                        <div className="comics__item-title">
                            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                        </div>
                        <div className="comics__item-price">
                            5$
                        </div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={comics} alt="" />
                        <div className="comics__item-title">
                            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                        </div>
                        <div className="comics__item-price">
                            5$
                        </div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={comics} alt="" />
                        <div className="comics__item-title">
                            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                        </div>
                        <div className="comics__item-price">
                            5$
                        </div>
                    </a>
                </li>
            </ul>
            <button className="button button__main button__long">
                <div className="inner">LOAD MORE</div>
            </button>
        </div>
    );
};

export default ComicsList;