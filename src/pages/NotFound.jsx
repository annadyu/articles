import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="error-container">
            <h1>Page not found!!</h1>
            <p>return to the <Link to="/">
            Homepage
            </Link>.</p>
        </div>
    )
}

export default NotFound;