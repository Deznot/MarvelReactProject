import { useState } from "react";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import FindCharacter from "../findCharacter/FindCharacter";


const MainPage = () => {
    const [selectedChar, setSelectedChar] = useState(null);
    const onCharSelected = (id) => {
        setSelectedChar(id);
    }

    return (
        <>
            <ErrorBoundary>
                <RandomChar />
            </ErrorBoundary>
            <div className="char__wrapper">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected} selectedCharId={selectedChar} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <CharInfo charId={selectedChar} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <FindCharacter />
                </ErrorBoundary>
            </div>
        </>
    )

};

export default MainPage;