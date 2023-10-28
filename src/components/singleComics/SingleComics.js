import "./singleComics.scss";
import single from "../../resources/img/x-men.png"

const SingleComics = () => {

    return (
        <div className="singleComics">
            <img src={single} alt="Comics image" className="singleComics__img" />
            <div className="singleComics__info">
                <p className="singleComics__title">X-Men: Days of Future Past</p>
                <p className="singleComics__descr">
                    Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, 
                    and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, 
                    the history of the X-Men from Cyclops himself...and a demon for Christmas!?
                </p>
                <p className="singleComics__pages">144 pages</p>
                <p className="singleComics__lang">Language: en-us</p>
                <p className="singleComics__price">9.99$</p>
            </div>
            <a href="#" className="singleComics__back">Back to all</a>
        </div>
    );
};

export default SingleComics;