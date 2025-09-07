import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import ErrorPage from './components/ErrorPage'
import Jungle from './pages/Jungle/Jungle'
import Zoo from './pages/zoo/zoo'

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
        path: "/course-2",
        element: <Jungle/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/course-3",
        element: <Zoo/>,
        errorElement: <ErrorPage/>
    },
]);
export default Router;