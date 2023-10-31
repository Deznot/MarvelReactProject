import { Component } from "react";
import "./charInfo.scss";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import MarvelService from "../../services/MarvelService";
import SelectChar from "../selectChar/SelectChar";
import thor from "../../resources/img/thor.jpeg";

class CharInfo extends Component {
    state = {
        char: {},
        loading: false,
        error: false,
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    onError = () => {
        this.setState({ error: true, loading: false });
    }

    onCharLoaded = (char) => {
        this.setState({ char, loading: false });
    };

    onCharLoading = () => {
        this.setState({ loading: true });
    }

    updateChar() {
        const { charId } = this.props;
        if (!charId) return;

        this.onCharLoading();

        this.MarvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError)

    }

    render() {
        const { char, loading, error } = this.state;
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
    }
};

const View = ({ char }) => {
    // const { id, name, description, thumbnail, homepage, wiki } = this.state;
    return (
        <>
            <div className="char__basics">
                <img src={thor} alt="hero img" />
                <div>
                    <div className="char__name">LOKI</div>
                    <div className="char__buttons">
                        <button className="button button__main">
                            <div className="inner">HOMEPAGE</div>
                        </button>
                        <button className="button button__secondary">
                            <div className="inner">WIKI</div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                <p>
                    In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and
                    Laufey,
                    and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of
                    Hel,
                    the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari
                    and/or
                    Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a
                    mare—to the
                    eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the
                    Prose Edda.
                </p>
            </div>
            <div className="char__comics">
                <div className="char__comics-title">
                    Comics:
                </div>
                <ul className="char__comics-list">
                    <li className="char__comics-item">All-Winners Squad: Band of Heroes (2011) #3</li>
                    <li className="char__comics-item">Alpha Flight (1983) #50</li>
                    <li className="char__comics-item">Amazing Spider-Man (1999) #503</li>
                    <li className="char__comics-item">Amazing Spider-Man (1999) #504</li>
                    <li className="char__comics-item">AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade
                        Paperback)</li>
                    <li className="char__comics-item">Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</li>
                    <li className="char__comics-item">Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade
                        Paperback)</li>
                    <li className="char__comics-item">Vengeance (2011) #4</li>
                    <li className="char__comics-item">Avengers (1963) #1</li>
                    <li className="char__comics-item">Avengers (1996) #1</li>
                </ul>
            </div>
        </>
    )
}

export default CharInfo;