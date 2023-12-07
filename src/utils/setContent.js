import Spinner from "../components/spinner/Spinner";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import SelectChar from "../components/selectChar/SelectChar";

const setContent = ( process, Component, data ) => {

    switch(process){
        case "waiting":
            return <SelectChar />;
        case "loading":
            return <Spinner />;
        case "loaded":
            return <Component data={data}/>
        case "error" :
            return <ErrorMessage/>
        default :
            throw new Error('Unexpected process');
    }
}

export default setContent;