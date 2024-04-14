import { Link } from "react-router-dom";
import './NotFoundPage.css';

export default function NotFoundPage(){
    return (
        <div className="error-page-wrapper">
            <div className="error-page-container">
                <div className="error-page-text">404 Not Found</div>
                <Link className="error-page-link" to='/'>Home</Link>
            </div>
        </div>
    );
}