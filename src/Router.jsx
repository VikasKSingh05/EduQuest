import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import ErrorPage from './components/ErrorPage'
import IntroVideo from './pages/IntroVideo'

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/courses",
        element:<Courses/>,
        errorElement:<ErrorPage/>
    },
    {
        path: "/intro",
        element:<IntroVideo/>,
        errorElement:<ErrorPage/>
    }
]);
export default Router;