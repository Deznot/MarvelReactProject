import "./comicsList.scss";
import useMarvelService from "../../services/MarvelService";
import { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ComicsList = () => {
    const [comics, setComics] = useState([]);
    const [offset, setOffset] = useState(0);
    const [comicsEnded, setComicsEnded] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const { loading, error, getAllComics,process,setProcess } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
            .then(setProcess('loaded'));
    }

    const onComicsListLoaded = (newComics) => {
        let ended = false;
        if (newComics.length < 8) {
            ended = true;
        }

        setComics((comics) => [...comics, ...newComics]);
        setOffset((offset) => offset + 8);
        setNewItemLoading(false);
        setComicsEnded(ended);
    }

    const renderComics = (comicsList) => {
        let comList = comicsList.map((item, i) => {
            const objectFit = (item.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") ? "unset" : "cover";
            return (
                <CSSTransition 
                    classNames="comics__item"
                    key={item.id + i}
                    timeout={500}
                >
                    <li key={item.id + i} className="comics__item">
                        <Link to={`${item.id}`}>
                            <img className="comics__item-img" src={item.thumbnail} alt={item.title} style={{ objectFit: objectFit }} />
                            <div className="comics__item-title">
                                {item.title}
                            </div>
                            <div className="comics__item-price">
                                {item.price}
                            </div>
                        </Link>
                    </li>
                </CSSTransition>
            );
        });

        return (
            <ul className="comics__grid">
                <TransitionGroup component={null}>
                    {comList}
                </TransitionGroup>
            </ul>
        );
    }

    const spinner = loading && !newItemLoading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    const rendComics = renderComics(comics);

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {rendComics}
            <button
                disabled={newItemLoading}
                style={{ 'display': comicsEnded ? 'none' : 'block' }}
                className="button button__main button__long"
                onClick={() => onRequest(offset)}>
                <div className="inner">LOAD MORE</div>
            </button>
        </div>
    );
};

export default ComicsList;