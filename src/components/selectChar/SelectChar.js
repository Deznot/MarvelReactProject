import "./selectChar.scss";

const SelectChar = () => {

    return (
        <>
            <div className="selectChar">
                <p className="selectChar__title">Please select a character to see information</p>
                <div className="selectChar__top">
                    <div className="selectChar__circle"></div>
                    <div className="selectChar__mini"></div>
                </div>
                
                <div className="selectChar__block"></div>
                <div className="selectChar__block"></div>
                <div className="selectChar__block"></div>
            </div>
            
        </>
    );
};

export default SelectChar;