import "./comicsList.scss";
import comics from "../../resources/img/UW.png"
import useMarvelService from "../../services/MarvelService";
import { useState, useEffect } from "react";

const ComicsList = () => {
    const [comics, setComics] = useState([]);
    const { loading, error, getAllComics } = useMarvelService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getAllComics()
            .then(onComicsListLoaded);
    }

    const onComicsListLoaded = (newComics) => {
        setComics((comics) => [...newComics]);
    }

    const renderComics = (comicsList) => {
        let comList = comicsList.map((item, i) => {
            return (
                <li key={item.id} className="comics__item">
                    <a href="#">
                        <img className="comics__item-img" src={item.thumbnail} alt={item.title} />
                        <div className="comics__item-title">
                            {item.title}
                        </div>
                        <div className="comics__item-price">
                            {item.price}
                        </div>
                    </a>
                </li>
            );
        });

        console.log(comList);

        return (
            <ul className="comics__grid">
                {comList}
            </ul>
        );
    }

    const rendComics = renderComics(comics);

    return (
        <div className="comics__list">
            {rendComics}
            <button className="button button__main button__long">
                <div className="inner">LOAD MORE</div>
            </button>
        </div>
    );
};

export default ComicsList;