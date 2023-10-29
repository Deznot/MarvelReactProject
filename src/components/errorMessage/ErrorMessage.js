import img from "./error.gif";
//если необходимо достать что либо из папки public process.env.PUBLIC_URL + 'error.gif'
const ErrorMessage = () => {  
    return (
        <img style={{display: 'block', width: "250px", height: "250px", objectFit: 'contain', margin: "0 auto"}} src={img} alt="error" />
    );
};

export default ErrorMessage;