import "./CharList.scss";
import char from "../../resources/img/abyss.jpg";

const CharList = (props) => {
    return (
        <div className="char__list">
            <ul className="char__grid">
                <li className="char__card">
                    <img src={char} alt="character avatar" className="char__img"/>
                    <div className="char__name">ABYSS</div>
                </li>
                <li className="char__card char__card-active">
                    <img src={char} alt="character avatar" className="char__img"/>
                    <div className="char__name">ABYSS</div>
                </li>
                <li className="char__card">
                    <img src={char} alt="character avatar" className="char__img"/>
                    <div className="char__name">ABYSS</div>
                </li>
                <li className="char__card">
                    <img src={char} alt="character avatar" className="char__img"/>
                    <div className="char__name">ABYSS</div>
                </li>
                <li className="char__card">
                    <img src={char} alt="character avatar" className="char__img"/>
                    <div className="char__name">ABYSS</div>
                </li>
                <li className="char__card">
                    <img src={char} alt="character avatar" className="char__img"/>
                    <div className="char__name">ABYSS</div>
                </li>
                <li className="char__card">
                    <img src={char} alt="character avatar" className="char__img"/>
                    <div className="char__name">ABYSS</div>
                </li>
                <li className="char__card">
                    <img src={char} alt="character avatar" className="char__img"/>
                    <div className="char__name">ABYSS</div>
                </li>
                <li className="char__card">
                    <img src={char} alt="character avatar" className="char__img"/>
                    <div className="char__name">ABYSS</div>
                </li>
            </ul>
            <button className="button button__long button__main"><div className="inner">LOAD MORE</div></button>
        </div>
    );
}

export default CharList;