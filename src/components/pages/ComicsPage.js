import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import { Helmet } from "react-helmet";

const ComicsPage = () => {
    // let location = useLocation(); show current route 
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with List of comics" />
                <title>Comics Page</title>
            </Helmet>
            <AppBanner />
            <ErrorBoundary>
                <ComicsList />
            </ErrorBoundary>
        </>
    );
};

export default ComicsPage;