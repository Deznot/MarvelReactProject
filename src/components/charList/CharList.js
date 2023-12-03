import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./charList.scss";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const CharList = (props) => {
    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [charEnded, setCharEnded] = useState(false);

    const { loading, getAllCharacters, error, clearError } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
        // window.addEventListener('scroll',  onScrollLoading);
        // return () => {
        //     window.removeEventListener('scroll', onScrollLoading);
        // };
    }, []);

    const onScrollLoading = () => {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            onRequest(offset);
        }
    }

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded);
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList((charList) => [...charList, ...newCharList]);
        setOffset((offset) => offset + 9);
        setNewItemLoading(false);
        setCharEnded(ended);
    }

    const cardRefs = useRef([]);

    const onCardFocus = (i, id, e) => {
        if (e.code === "Enter" || e.code === " ") {
            props.onCharSelected(id);
            //через рефы и перебор
            // this.cardRefs.forEach(el => {
            //     el.classList.remove('char__card-active');
            // });
            // this.cardRefs[i].classList.add('char__card-active');
            // this.cardRefs[i].focus();
        }

        if (e.target.closest('.char__grid')) {
            switch (e.code) {
                case 'ArrowLeft':
                    if (i - 1 < 0) {
                        console.log(cardRefs.current.length);
                        cardRefs.current[cardRefs.current.length - 1].focus();
                    } else {
                        cardRefs.current[i - 1].focus();
                    }
                    break;
                case "ArrowRight":
                    if (i + 1 >= cardRefs.current.length) {
                        cardRefs.current[0].focus();
                    } else {
                        cardRefs.current[i + 1].focus();
                    }
                    break;
                default: { }
            }
        }

    }

    const renderCard = (charList) => {
        let chars = charList.map((char, i) => {
            const { thumbnail, name, id } = char;
            let objectFit = 'cover';
            if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                objectFit = 'unset';
            }
            const selected = id === props.selectedCharId ? "char__card-active" : null;

            return (
                <CSSTransition
                    key={id}
                    classNames="char__card"
                    timeout={500}
                >
                    <li key={id}
                        onClick={() => {
                            props.onCharSelected(id);
                        }}
                        className={`char__card ${selected}`}
                        ref={(el) => cardRefs.current[i] = el}
                        tabIndex={0}
                        onKeyDown={(e) => {
                            onCardFocus(i, id, e);
                        }}>
                        <img src={thumbnail} alt={name} className="char__img" style={{ objectFit: objectFit }} />
                        <div className="char__name">{name}</div>
                    </li>
                </CSSTransition>
            );
        });

        return (
            <ul className="char__grid">
                <TransitionGroup component={null}>
                    {chars}
                </TransitionGroup>
            </ul>
        )
    }


    const dataLoaded = loading && !newItemLoading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    const cards = renderCard(charList);

    return (
        <div className="char__list">
            {dataLoaded}
            {cards}
            {errorMessage}
            <button
                className="button button__long button__main"
                disabled={newItemLoading}
                onClick={() => onRequest(offset)}>
                <div className="inner">LOAD MORE</div>
            </button>
        </div>
    );


}

CharList.propTypes = {
    onCharSelected: PropTypes.func
}

export default CharList;