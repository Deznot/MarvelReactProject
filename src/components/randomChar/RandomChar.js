import { Component } from "react";
import "./randomChar.scss";
import mjolnir from '../../resources/img/mjolnir.png';
import "../../style/button.scss";
import MarvelService from "../../services/MarvelService";


class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.updateChar();
    }

    marvelService = new MarvelService();

    state = {
       char : {}
    }

    onCharLoaded = (char) => {
        this.setState({char});
    };

    updateChar = async () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded);
    }
    
    render() {
        const {char : {name,description,thumbnail,homepage,wiki}} = this.state;
        return (
            <div className="randomChar">
                <div className="randomChar__block">
                    <img src={thumbnail} alt="thumbnail" />
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
    }
    
};

export default RandomChar;