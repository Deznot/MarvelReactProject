import { Component } from "react";
import "../../style/variables.scss";
import "../../style/style.scss";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import vision from "../../resources/img/vision.png"
import AppBanner from "../appBanner/AppBanner";


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <AppBanner/>
                    {/* <RandomChar />
                    <div className="char__wrapper">
                        <CharList />
                        <CharInfo />
                    </div>
                    <img className="vision" src={vision} alt="vision"/> */}
                </main>
            </div>
        )
    }
} 

export default App;