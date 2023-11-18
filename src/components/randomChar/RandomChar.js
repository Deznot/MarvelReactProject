import { useState,useEffect } from "react";
import "./randomChar.scss";
import mjolnir from '../../resources/img/mjolnir.png';
import "../../style/button.scss";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const RandomChar = (props) => {
    const [char,setChar] = useState({});
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(false);

    const marvelService = new MarvelService();

    useEffect(() => {
        updateChar();
    },[])

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const onCharLoaded = (char) => {
        setChar(char);
        setLoading(false);
    };

    const onCharLoading = () => {
        setLoading(true);
    }

    const updateChar = async () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        onCharLoading();
        marvelService
            .getCharacter(id)
            .then(onCharLoaded)
            .catch(onError);
    }

    const onClickButtonTry = () => {
        return updateChar();
    }

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || errorMessage) ? <View char={char} /> : null;

        return (
            <div className="randomChar">
                {errorMessage}
                {spinner}
                {content}
                <div className="randomChar__another">
                    <p className="randomChar__title">
                        Random character for today!<br />
                        Do you want to get to know him better?
                    </p>
                    <p className="randomChar__title">
                        Or choose another one
                    </p>
                    <button onClick={onClickButtonTry} className="button button__main">
                        <div className="inner">TRY IT</div>
                    </button>
                    <img src={mjolnir} alt="random character decoration" className="randomChar__decoration" />
                </div>
            </div>
        );
};

const View = ({ char }) => {
    const { thumbnail, name, description, homepage, wiki } = char;
    let objectFit = 'cover';
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        objectFit = 'contain';
    }
    return (
        <div className="randomChar__block">
            <img src={thumbnail} alt="thumbnail" style={{ objectFit: objectFit }} />
            <div className="randomChar__info">
                <p className="randomChar__title">{name}</p>
                <p className="randomChar__descr">
                    {description}
                </p>
                <div className="randomChar__buttons">
                    <a href={homepage} className="button button__main"><div className="inner">HOMEPAGE</div></a>
                    <a href={wiki} className="button button__secondary"><div className="inner">WIKI</div></a>
                </div>
            </div>
        </div>
    );
}

export default RandomChar;