import "../../style/variables.scss";
import "../../style/style.scss";
import AppHeader from "../appHeader/AppHeader";
import vision from "../../resources/img/vision.png"
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { MainPage, ComicsPage } from "../pages";

const App = () => {
    return (
        <Router basename="/MarvelReactProject">
            <div className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/comics" element={<ComicsPage />} />
                    </Routes>
                    <img className="vision" src={vision} alt="vision" />
                </main>
            </div>
        </Router>
    );
}

export default App;