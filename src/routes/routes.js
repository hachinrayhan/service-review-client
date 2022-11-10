import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllContents from "../pages/Home/AllContents";
import Home from "../pages/Home/Home";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contents',
                element: <AllContents></AllContents>
            }
        ]
    }
])