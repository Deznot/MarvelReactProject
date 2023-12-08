import "./findCharacter.scss";
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import useMarvelService from "../../services/MarvelService";
import { useState } from "react";
import { Link } from "react-router-dom";
import setContent from "../../utils/setContent";

const FindCharacter = () => {
    const { getCharacterByName, clearError, process, setProcess } = useMarvelService();
    const [character, setCharacter] = useState(null);

    const onRequest = (name) => {
        clearError();
        if (!name) return;
        getCharacterByName(name)
            .then(onCharacterLoaded)
            .then(() => setProcess('loaded'));
    }

    const onCharacterLoaded = (character) => {
        setCharacter(character);
    }

    const content = !character ? null : character.length > 0 ?
        <div className="char__search-wrapper">
            <div className="char__search-success">There is! Visit {character[0].name} page?</div>
            <Link to={`character/${character[0].id}`} className="button button__secondary">
                <div className="inner">To page</div>
            </Link>
        </div> :
        <div className="char__search-error">
            The character was not found. Check the name and try again
        </div>;

    return (
        <div className="char__search-form">
            <Formik
                initialValues={{
                    charName: ''
                }}
                validationSchema={Yup.object({
                    charName: Yup.string().required('This field is required')
                })}
                onSubmit={({ charName }) => {
                    onRequest(charName);
                }}
            >
                <Form>
                    <label className="char__search-label" htmlFor="charName">Or find a character by name:</label>
                    <div className="char__search-wrapper">
                        <Field
                            id="charName"
                            name='charName'
                            type='text'
                            placeholder="Enter name" />
                        <button
                            type='submit'
                            className="button button__main"
                            disabled={process === 'loading'}>
                            <div className="inner">find</div>
                        </button>
                    </div>
                    <FormikErrorMessage component="div" className="char__search-error" name="charName" />
                </Form>
            </Formik>
            {setContent({ process, Component: () => content, LoadingComponent: false })}
            {/* {content} */}
            {/* {errorMessage} */}
        </div>
    );
}

export default FindCharacter;