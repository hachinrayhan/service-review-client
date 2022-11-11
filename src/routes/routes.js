import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog";
import ContentDetails from "../pages/ContentDetails";
import AllContents from "../pages/Home/AllContents";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";
import MyReviews from "../pages/MyReviews";
import PrivateRoute from "./PrivateRoute";


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
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/my-reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            }
        ]
    }
])