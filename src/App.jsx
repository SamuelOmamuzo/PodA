import { Outlet } from "react-router-dom"

import Homepage from "./Screens/HomePage"
import { Header,Footer} from "./Static"

const App = () =>{
    return(
        <>
            <Header/>
            <Homepage/>
            <Footer/>
        </>
    )
}

export default App 