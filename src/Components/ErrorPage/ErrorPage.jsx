import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-48 ">
            <h1 className="text-4xl mb-6">Nothing found</h1>
            <Link to="/" className="px-4 py-2 bg-sky-500 rounded-lg hover:text-white">Go Back</Link>
        </div>
    );
};

export default ErrorPage;