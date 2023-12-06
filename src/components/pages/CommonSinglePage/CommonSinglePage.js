import "./CommonSinglePage.scss";
import { useEffect, useState } from "react";
import useMarvelService from "../../../services/MarvelService";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import Spinner from "../../spinner/Spinner";
import { useParams } from "react-router-dom";

const CommonSinglePage = ({ Component, dataType }) => {
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
            default:
        }
    }

    const onDataLoaded = (data) => {
        setData(data);
    }

    const renderData = data ? <Component data={data} /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || errorMessage || !data) ? renderData : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    );
};

export default CommonSinglePage;