import { Component } from "react";
import "../../style/variables.scss";
import "../../style/style.scss";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <RandomChar />
                </main>
            </div>
        )
    }
} 

export default App;