import { useState } from "react";
import "../../style/variables.scss";
import "../../style/style.scss";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import vision from "../../resources/img/vision.png"
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import SingleComics from "../singleComics/SingleComics";
import SelectChar from "../selectChar/SelectChar";
import CharAbout from "../charAbout/CharAbout";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const App = () => {
    const [selectedChar, setSelectedChar] = useState(null);

    const onCharSelected = (id) => {
        setSelectedChar(id);
    }
 
    return (
        <div className="app">
            <AppHeader />
            <main>
                <ErrorBoundary>
                    <RandomChar />
                </ErrorBoundary>
                <div className="char__wrapper">
                    <ErrorBoundary>
                        <CharList onCharSelected={onCharSelected} selectedCharId={selectedChar}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar} />
                    </ErrorBoundary>
                </div>
                <img className="vision" src={vision} alt="vision" />
            </main>
        </div>
    );
}

export default App;