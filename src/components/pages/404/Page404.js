import ErrorMessage from "../../errorMessage/ErrorMessage";
import "./page404.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Page404 = () => {
    return (
        <div>
            <Helmet>
                <meta
                    name="404"
                    content={`404`} />
                <title>Page not found</title>
            </Helmet>
            <ErrorMessage />
            <p className="p-404">Page doesn't exist</p>
            <Link to="/" className="link-404" >Back to main page</Link>
        </div>
    );
}

export default Page404;