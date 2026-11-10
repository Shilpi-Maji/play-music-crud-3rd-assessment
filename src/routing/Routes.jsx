import { createBrowserRouter } from "react-router-dom"
import Wrapper from "../layouts/Wrapper"
import Home from "../pages/Home"
import MusicList from "../pages/MusicList"
const Routes = createBrowserRouter([
    {
        path:"/",
        element:<Wrapper/>,
        children:[
            {
                path:"",
                element:<Home/>,
            },
             {
                path:"music-list",
                element:<MusicList/>,
            },
        ]
    }
])

export default Routes
