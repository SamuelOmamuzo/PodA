import { useRouteError } from "react-router-dom";

export const Page404 = () =>{

    const error = useRouteError()
    // console.log(error)

    return(
        <center>
            <h1>Oops!</h1>
            <h1>{error.status}</h1>
            <p>{error.statusText}</p>
        </center>
    )
}