import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ContentDetails from "../pages/ContentDetails";
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
            },
            {
                path: '/contents/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/contents/${params.id}`),
                element: <ContentDetails></ContentDetails>
            }
        ]
    }
])