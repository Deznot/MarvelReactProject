import "./singleComicsPage.scss";
import { useEffect, useState } from "react";
import useMarvelService from "../../../services/MarvelService";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import Spinner from "../../spinner/Spinner";
import { Link, useParams } from "react-router-dom";


const SingleComicsPage = () => {
    const [comics, setComics] = useState([]);
    const { loading, getComics, error, clearError } = useMarvelService();
    const { comicsId } = useParams();
    console.log(comicsId);

    useEffect(() => {
        onRequest(comicsId);
    }, [comicsId]);

    const onRequest = (id) => {
        clearError();
        getComics(id)
            .then(onComicsLoaded);
    }

    const onComicsLoaded = (comics) => {
        setComics(comics);
    }

    const renderComics = (newComics) => {
        if (newComics.length === 0) return;
        const { title, description, pageCount, thumbnail, language, price } = newComics;
        const objectFit = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? "unset" : "cover";

        return (
            <>
                <img src={thumbnail} alt={title} className="singleComics__img" style={{ objectFit: objectFit }} />
                <div className="singleComics__info">
                    <p className="singleComics__title">{title}</p>
                    <p className="singleComics__descr">
                        {description}
                    </p>
                    <p className="singleComics__pages">{pageCount}</p>
                    <p className="singleComics__lang">{language}</p>
                    <p className="singleComics__price">{price}</p>
                </div>
                <Link to={'/comics'} className="singleComics__back">Back to all</Link>
            </>
        );
    }

    const singleComics = renderComics(comics);
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || errorMessage ||!comics) ? singleComics : null;

    return (
        <div className="singleComics">
            {errorMessage}
            {spinner}
            {content}
        </div>
    );
};

export default SingleComicsPage;