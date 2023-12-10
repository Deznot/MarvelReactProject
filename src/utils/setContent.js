import Spinner from "../components/spinner/Spinner";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import "../style/button.scss";

const setContent = ({ process, Component, data, WaitingComponent, waitingData = null, LoadingComponent}) => {
    if (LoadingComponent === 'spinner') {
        LoadingComponent = Spinner;
    }
    
    switch (process) {
        case "waiting":
            return WaitingComponent ? <WaitingComponent data={waitingData} /> : null;
        case "loading":
            return LoadingComponent? <LoadingComponent/> : null;
        case "loaded":
            return <Component data={data} />
        case "error":
            return <ErrorMessage />
        default:
            throw new Error('Unexpected process');
    }
}

export default setContent;