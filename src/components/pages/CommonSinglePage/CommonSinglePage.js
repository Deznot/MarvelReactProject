import "./CommonSinglePage.scss";
import { useEffect, useState } from "react";
import useMarvelService from "../../../services/MarvelService";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import Spinner from "../../spinner/Spinner";
import { Link, useParams } from "react-router-dom";

const CommonSinglePage = ({Component, dataType}) => {
    const [data, setData] = useState([]);
    const { loading, error, clearError, getComics, getCharacter } = useMarvelService();
    const { id } = useParams();

    useEffect(() => {
        onRequest(id);
    }, [id]);

    const onRequest = (id) => {
        clearError();

        switch (dataType) {
            case "comics":
                getComics(id)
                .then(onDataLoaded);
                break;
            case "character":
                getCharacter(id)
                .then(onDataLoaded);
            break;
        }
    }

    const onDataLoaded = (data) => {
        setData(data);
    }

    const renderComics = () => {
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
    const content = !(loading || errorMessage || !comics) ? singleComics : null;

    return (
        <div className="singleComics">
            {errorMessage}
            {spinner}
            {content}
        </div>
    );
};

export default CommonSinglePage;