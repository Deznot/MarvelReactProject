import { lazy, Suspense } from "react";
import "../../style/variables.scss";
import "../../style/style.scss";
import AppHeader from "../appHeader/AppHeader";
import vision from "../../resources/img/vision.png"
import Spinner from "../spinner/Spinner";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
// import { MainPage, ComicsPage, SingleComicsPage } from "../pages"; //for static import
// import Page404 from "../pages/404/Page404";
const Page404 = lazy(() => import('../pages/404/Page404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicsPage = lazy(() => import('../pages/SingleComicsPage/SingleCimicsPage'));

const App = () => {
    return (
        <Router basename="/MarvelReactProject">
            <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="comics">
                                <Route path="/comics" element={<ComicsPage />} />
                                <Route path=':comicsId' element={<SingleComicsPage />} />
                            </Route>
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                        <img className="vision" src={vision} alt="vision" />
                    </Suspense>
                </main>
            </div>
        </Router>
    );
}

export default App;