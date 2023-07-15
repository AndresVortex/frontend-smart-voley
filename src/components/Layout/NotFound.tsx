import { useRouteError } from "react-router-dom";

export const NotFound = () => {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Oops!</h1>
            <p>Lo sentimos, se ha producido un error inesperado.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}


