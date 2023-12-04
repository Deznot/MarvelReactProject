import "./findCharacter.scss";
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import useMarvelService from "../../services/MarvelService";
import { useState } from "react";

const FindCharacter = () => {
    const {loading, error, getCharacterByName} = useMarvelService();
    const [character, setCharacter] = useState(null);

    const onRequest = (name) => {
        if (!name) return;
        getCharacterByName(name)
            .then(onCharacterLoaded);
    }

    const onCharacterLoaded = (character) => {
        console.log(character);
        setCharacter(character);
    }

    // const char = !error && !loading && character? {character} : null;

    return (
        <div className="char__search-form">
        <Formik
            initialValues = {{
                charName: ''
            }}
            validationSchema = {Yup.object({
                charName: Yup.string().required('This field is required')
            })}
            onSubmit = { ({charName}) => {
                onRequest(charName);
                // updateChar(charName);
            }}
        >
            <Form>
                <label className="char__search-label" htmlFor="charName">Or find a character by name:</label>
                <div className="char__search-wrapper">
                    <Field 
                        id="charName" 
                        name='charName' 
                        type='text' 
                        placeholder="Enter name"/>
                    <button 
                        type='submit' 
                        className="button button__main"
                        disabled={loading}>
                        <div className="inner">find</div>
                    </button>
                </div>
                <FormikErrorMessage component="div" className="char__search-error" name="charName" />
            </Form>
        </Formik>
        {/* {char} */}
        {/* {results}
        {errorMessage} */}
    </div>
    );
}

export default FindCharacter;