import { createBrowserRouter} from "react-router-dom"
import App from "../App"
import { Page404 } from "./ErrorPages/Page404"



const Router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Page404/>,
        // children:[
        //     {
        //         path:"/detail/:id",
        //         element:<h1>Detail page</h1>
        //     }
        // ]
    },
    {
        path:"/detail/:id",
        element:<h1>Detail page</h1>
    }
])

export default Router