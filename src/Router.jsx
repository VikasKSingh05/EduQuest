import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import ErrorPage from './components/ErrorPage'
import IntroVideo from './pages/IntroVideo'
import AllCourses from './pages/AllCourses'
import ScrollToTop from './components/ScrollToTop'
import Zoo from './pages/Zoo'

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
    },
    {
        path: "all-courses",
        element:(<>
        <ScrollToTop/>
        <AllCourses/>
        </>
    ),
        errorElement:<ErrorPage/>
    },
    {
        path: "zoo",
        element: <Zoo/>,
        errorElement:<ErrorPage/>
    }
]);
export default Router;