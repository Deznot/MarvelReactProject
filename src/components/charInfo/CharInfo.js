import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./charInfo.scss";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import MarvelService from "../../services/MarvelService";
import SelectChar from "../selectChar/SelectChar";

const CharInfo = (props) => {
    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const marvelService = new MarvelService();

    useEffect(() => {
        updateChar();
    }, [props.charId]);

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

    const updateChar = () => {
        const { charId } = props;
        if (!charId) return;

        onCharLoading();

        marvelService
            .getCharacter(charId)
            .then(onCharLoaded)
            .catch(onError)

    }

    const selectChar = char || loading || error ? null : <SelectChar />;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || errorMessage || !char) ? <View char={char} /> : null;

    return (
        <div className="char__info">
            {selectChar}
            {errorMessage}
            {spinner}
            {content}
        </div>
    );
    
};

const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki, comics } = char;
    const comicsListHandler = (comics) => {
        const maxList = 10;
        let comicsRes = comics.map((item,i) => {
            return  <li key={i} className="char__comics-item">{item.name}</li>;
        });
        comicsRes = comicsRes.filter(item => item.key < maxList );
        return comicsRes.length > 0? comicsRes: "No comics";
    };
    let objectFit = 'cover';
    if (thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
        objectFit = 'unset';
    }

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={{objectFit : objectFit}}/>
                <div>
                    <div className="char__name">{name}</div>
                    <div className="char__buttons">
                        <a href={homepage} className="button button__main">
                            <div className="inner">HOMEPAGE</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">WIKI</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                <p>
                    {description}
                </p>
            </div>
            <div className="char__comics">
                <div className="char__comics-title">
                    Comics:
                </div>
                <ul className="char__comics-list">
                    {comicsListHandler(comics)}
                </ul>
            </div>
        </>
    )
}

CharInfo.propTypes = {
    charId : PropTypes.number
}

export default CharInfo;