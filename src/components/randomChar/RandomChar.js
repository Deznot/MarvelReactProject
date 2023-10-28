import "./RandomChar.scss";
import thor from '../../resources/img/thor.jpeg';
import mjolnir from '../../resources/img/mjolnir.png';
import "../../style/button.scss";

const RandomChar = (props) => {
    
    return (
        <div className="randomChar">
            <div className="randomChar__block">
                <img src={thor} alt="avatar thor" />
                <div className="randomChar__info">
                    <p className="randomChar__title">THOR</p>
                    <p className="randomChar__descr">
                        As the Norse God of thunder and lightning,
                        Thor wields one of the greatest weapons ever made,
                        the enchanted hammer Mjolnir. While others have
                        described Thor as an over-muscled, oafish imbecile,
                        he's quite smart and compassionate...
                    </p>
                    <div className="randomChar__buttons">
                        <button className="button button__main"><div className="inner">HOMEPAGE</div></button>
                        <button className="button button__secondary"><div className="inner">WIKI</div></button>
                    </div>
                </div>
            </div>
            <div className="randomChar__another">
                <p className="randomChar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomChar__title">
                    Or choose another one
                </p>
                <button className="button button__main">
                    <div className="inner">TRY IT</div>
                </button>
                <img src={mjolnir} alt="random character decoration" className="randomChar__decoration" />
            </div>
        </div>
    );
};

export default RandomChar;