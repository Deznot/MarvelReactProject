import "./singleComicsLayout.scss";
import { Link } from "react-router-dom";

const SingleComicsLayout = ({data}) => {

    const { title, description, pageCount, thumbnail, language, price } = data;
    const objectFit = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? "unset" : "cover";

    return (
        <div className="singleComics">
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
        </div>
    );
};

export default SingleComicsLayout;