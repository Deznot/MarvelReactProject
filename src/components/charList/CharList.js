import { Component } from "react";
import "./charList.scss";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

class CharList extends Component {
    state = {
        chars : [],
        loading: true,
        error: false
    };

    MarvelService = new MarvelService();

    componentDidMount() {
        this.dataLoading();
    }

    onCardLoaded = (chars) => {
       this.setState({chars,loading: false});
    }

    onError = () => {
        this.setState({error: true})
    }

    dataLoading = () => {
        this.MarvelService
                .getAllCharacters()
                .then(this.onCardLoaded)
                .catch(this.onError);
    }

    renderCard = (chars) => {
       chars = chars.map(char => {
            const {thumbnail,name,id} = char;
            let objectFit = 'cover';
            if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                objectFit = 'unset';
            }
            return (
                <li key={id} className="char__card">
                    <img src={thumbnail} alt={name} className="char__img" style={{objectFit: objectFit}}/>
                    <div className="char__name">{name}</div>
                </li>
            );
        });

        return (
            <ul className="char__grid">
                {chars}
            </ul>
        )
    }    

    render () {
        const {chars,loading,error} = this.state;
        const dataLoaded = loading?<Spinner/>:null;
        const errorMessage = error?<ErrorMessage />: null; 
        const cards = !(loading || errorMessage) ? this.renderCard(chars) : null;
        return (
            <div className="char__list">
                {dataLoaded}
                {cards}
                {errorMessage}
                
                <button className="button button__long button__main"><div className="inner">LOAD MORE</div></button>
            </div>
        );
    }
   
}


export default CharList;