import { Component } from "react";
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

class App extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({ selectedChar: id });
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <main>
                    <RandomChar />
                    <div className="char__wrapper">
                        <CharList onCharSelected={this.onCharSelected} />
                        <CharInfo charId={this.state.selectedChar} />
                    </div>
                    <img className="vision" src={vision} alt="vision" />
                </main>
            </div>
        )
    }
}

export default App;