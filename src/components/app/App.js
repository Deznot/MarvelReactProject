import { Component } from "react";
import "../../style/variables.scss";
import "../../style/style.scss";
import AppHeader from "../appHeader/AppHeader";


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
            </div>
        )
    }
} 

export default App;