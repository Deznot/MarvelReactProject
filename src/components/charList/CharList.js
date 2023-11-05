import { Component } from "react";
import PropTypes from "prop-types";
import "./charList.scss";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 0,
        charEnded: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
        // window.addEventListener('scroll', this.onScrollLoading);
    }

    componentWillUnmount() {    
        // window.removeEventListener('scroll', this.onScrollLoading);
    }

    onScrollLoading = () => {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            this.onRequest(this.state.offset);
        }
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError);
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        if (this.state.charList.length !== 0) {
            if (this.state.charList[0].id === newCharList[0].id) {
                newCharList = [];
            }
        }

        this.setState(({offset, charList}) => ({
            charList: [...charList, ...newCharList],
            offset: offset + 9,
            loading: false,
            newItemLoading: false,
            charEnded: ended
        }));
    }

    cardRefs = [];

    setCardRef = (elem) => {
        this.cardRefs.push(elem);
    }

    onCardFocus = (i,id,e) => {
        if (e.code === "Enter" || e.code === " ") {
            this.props.onCharSelected(id)
            //через рефы и перебор
            // this.cardRefs.forEach(el => {
            //     el.classList.remove('char__card-active');
            // });
            // this.cardRefs[i].classList.add('char__card-active');
            // this.cardRefs[i].focus();
        } 

        if (e.target.closest('.char__grid')) {
            switch (e.code) {
                case 'ArrowLeft' :
                    if (i-1 < 0) {
                        this.cardRefs[this.cardRefs.length - 1].focus(); 
                    } else {
                        this.cardRefs[i - 1].focus();
                    }
                break;
                case "ArrowRight" :
                    if (i + 1 >= this.cardRefs.length) {
                        this.cardRefs[0].focus();
                    } else {
                        this.cardRefs[i + 1].focus();
                    }
                break;
                default : {}
            } 
        }
        
    }

    renderCard = (charList) => {
        let chars = charList.map((char,i) => {
            const { thumbnail, name, id } = char;
            let objectFit = 'cover';
            if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                objectFit = 'unset';
            }
            const selected = id === this.props.selectedCharId?"char__card-active": null;
            
            return (
                <li key={id}
                    onClick={() => {
                        this.props.onCharSelected(id);
                    }}
                    className= {`char__card ${selected}`}
                    ref={this.setCardRef}
                    tabIndex={0}
                    onKeyDown={(e) => {
                        this.onCardFocus(i,id, e);
                    }}>
                    <img src={thumbnail} alt={name} className="char__img" style={{ objectFit: objectFit }} />
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

    render() {
        const { charList, loading, error, newItemLoading, offset } = this.state;
        const dataLoaded = loading ? <Spinner /> : null;
        const errorMessage = error ? <ErrorMessage /> : null;
        const cards = !(loading || errorMessage) ? this.renderCard(charList) : null;

        return (
            <div className="char__list">
                {dataLoaded}
                {cards}
                {errorMessage}

                <button 
                    className="button button__long button__main"
                    disabled={newItemLoading}
                    onClick={() => this.onRequest(offset)}>
                    <div className="inner">LOAD MORE</div>
                </button>
            </div>
        );
    }
   
}

 CharList.propTypes = {
    onCharSelected : PropTypes.func
 }

export default CharList;