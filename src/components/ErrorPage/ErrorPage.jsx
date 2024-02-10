import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const back = useNavigate();
    const goBack = () => {
        back(-1);
    }
    return (
        <div className="mx-auto text-center p-5 w-full">
            <h2 className="text-3xl m-5 p-5 text-green-600 font-bold">OOPPSS! <br></br>Something went wrong!</h2>
            <button onClick={goBack} className="bg-blue-500 rounded-lg   text-white px-5 py-2 ">Go Back</button>
        </div>
    );
};

export default ErrorPage;