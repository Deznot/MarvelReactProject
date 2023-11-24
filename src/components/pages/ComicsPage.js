import { useState } from "react";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";


const ComicsPage = () => {
    const [selectedComics, setSelectedComics] = useState(null);
    const onComicsSelected = (id) => {
        setSelectedComics(id);
    }

    return (
        <>
            {/* <ErrorBoundary>
                <SingleComics selectedComics={selectedComics} />
            </ErrorBoundary> */}

            <AppBanner />
            <ErrorBoundary>
                <ComicsList onComicsSelected={onComicsSelected} />
            </ErrorBoundary>
        </>
    );

};

export default ComicsPage;